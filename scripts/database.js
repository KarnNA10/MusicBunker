const wpContent=[
    albums
]

const stl=[
    [pseudonum, testColor, bgColor],
]

const albums=[
    [artist,
        ["index","album","year","country","genre(s)",style[0],"linkArchive","linkYT"],
    ],
    [artist,
        [band,album,year,country,genre(s),bg_color,txt_color,linkArchive,linkYT],
    ],
]

function loadData(htmlTarget, source){
    const datosSection = document.querySelector(htmlTarget);
    for (const d of source){
        var image = `<img src="style/icon/${d[1]}" class="icon">`
        if (d[1] == "-"){image = ""};
        datosSection.innerHTML += `<li>${image}<a class="link" target="_blank" href="${d[2]}">${d[0]}</a></li>`;
    }
}

function main(){
    loadData("#Albumes",albums);
}