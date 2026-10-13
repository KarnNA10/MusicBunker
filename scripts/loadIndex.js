const contentIndex=`
    <!-- <h2>Database</h2> -->
    <table class="SortableTable" aria-readonly="true" role="grid" > 
    <thead>
      <tr id="tableHead"></tr>
    </thead>
    <tbody id="Albumes">
    </tbody>
  </table>`

function loadData(htmlTarget, source){
    const datosSection = document.querySelector(htmlTarget);
    for (const art of source){
        for (const alb of art[1]){
            var play
            if (alb[6]=='linkYT'){
                play = ""
            } else {
                play = `<a target="iframe_a" href="${alb[6]}">tocar</a>`
            }
            // ${image}
            // datosSection.innerHTML += `<tr><td class="artist">${art[0]}</td><td>${alb[0]}</td><td>${alb[1]}</td><td>${alb[2]}</td><td>${alb[3]}</td><td>${alb[4]}</td><td>${alb[6]}</td><td>${alb[8]}</td><td>${alb[9]}</td></tr>`;
            datosSection.innerHTML += `<tr><td class="artist">${art[0]}</td><td>${alb[0]}</td><td>${alb[1]}</td><td>${alb[2]}</td><td>${alb[3]}</td><td>${alb[4]}</td><td>${play}</td><td>${alb[7]}</td><td>${alb[8]}</td></tr>`;
        }
    }
}

const wpContent=[
    albums
]

function loadHead(){
    const content='<th>Artist</th><th class="num">N</th><th aria-sort="ascending">Album</th><th class="num">Year</th><th>Country</th><th>Genres</th><th>Links</th><th>dwn</th><th>phy</th>'
    const datosSection = document.querySelector("#tableHead");
    datosSection.innerHTML += content;
    // alert("You will listen to great music and you will like it")
}

function loadIndex(){
    loadLayout();
    const body = document.querySelector(".content");
    body.innerHTML += contentIndex;
    loadData("#Albumes",albums);
    loadHead();
}