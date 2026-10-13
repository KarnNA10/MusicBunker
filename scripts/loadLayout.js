const layout =`
<div class="logo">LOGO</div>

<div class="navbar">
    <!-- Barra de navegación -->
     <!-- <marquee>Soy capitán clark y estos son mis backrooms. Capitan clark, voy a asesinarte, oye clarkin, soy tu pero acá bien backroom. soy capitan mantente en personaje. soy eslenderman y estos son mis bosques. eslenderman voy a asesinarte. Soy doctor house y este es mi caso . soy doctor house y voy a curarte. soy doctor house toma tus pastillas</marquee> -->
</div>

<div class="sidebar">
    <p>Índice</p>
    <ul>
        <li>Sección 1</li>
        <li>Sección 2</li>
        <li>Sección 3</li>
    </ul>
</div>

<div class="right">
    <!-- <iframe src="https://www.youtube.com/embed/E0ozmU9cJDg" 
            frameborder="0" 
            allowfullscreen>
    </iframe> -->
    <iframe id="iframe_a" name="iframe_a" src="" frameborder="0" allowfullscreen></iframe>
</div>

<div class="content">

</div>
`
function loadLayout(){
    const section = document.querySelector("body");
    section.innerHTML += layout;
}