// The code below fetches my latest playlist and returns
//  the playlist's id, title, and description. 

export async function getLatestPlaylist() {
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=id,snippet&channelId=UCa_0Tn_aYic-2d4XRr75Mtg&key=${API_KEY}&maxResults=1`,
    );

    if (!res.ok) {
      throw Error(res.statusText);
    }

    const { items } = await res.json();

    return {
      id: items[0].id,
      title: items[0].snippet.title,
      description: items[0].snippet.description,
    };
  } catch (error) {
    console.log(error);
  }
}

// The most important part of the script 
// extracts and formats the data and renders it into HTML

async function buildPlaylist() {
  const { id, title } = await getLatestPlaylist();
  const playlistUrl = `https://music.youtube.com/playlist?list=${id}`;
  const playlistItems = await getPlaylistItems(id);
  let videoIds = [];

  const songData = playlistItems.map((song, idx) => {
    videoIds.push(song.snippet.resourceId.videoId);
    const songMarkup = createSongMarkup(song, idx);
    return songMarkup;
  });

  const videoData = await getVideo(videoIds);

  const totalDuration = {
    minutes: 0,
    seconds: 0,
  };

  const playListPromises = Promise.all(
    songData.map(async (el, idx) => {
      const durationTimestamp = videoData[idx].contentDetails.duration;
      const duration = isoDuration(durationTimestamp);
      const minutes = duration.parse().minutes;
      const seconds = duration.parse().seconds;
      totalDuration.minutes += minutes;
      totalDuration.seconds += seconds;
      el.duration = duration.humanize("en");
      el.vidId = videoData[idx].id;
      el.thumbnail = videoData[idx].snippet.thumbnails.maxres.url;
      const [r, g, b] = await getColor(el.thumbnail);
      el.color = `rgb(${r},${g},${b})`;
      el.timestamp = `${minutes}:${seconds.toString().padStart(2, "0")}`;

      return el;
    })
  );

  const playListItems = await playListPromises;

  const humanReadableDuration = isoDuration(totalDuration)
    .normalize()
    .humanize("en", { largest: 2 });

  const markup = createPlaylistElementMarkup(
    title,
    playlistUrl,
    playListItems,
    humanReadableDuration,
    videoData,
    id
  );

  try {
    await fs.writeFile("index.html", markup);
    console.log("Playlist built!");
  } catch (error) {
    console.log(error);
  }
}