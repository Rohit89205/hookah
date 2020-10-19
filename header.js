var header = document.getElementById("navigation");
header.insertAdjacentHTML("afterbegin", `
<input type="checkbox" class="navigation__checkbox" id="navi-toggle">
            
<label for="navi-toggle" class="navigation__button">
    <span class="navigation__icon">&nbsp;</span>
</label>

<div class="navigation__background">&nbsp;</div>

<nav class="navigation__nav">
    <ul class="navigation__list">
        <li class="navigation__item">
        <a href="index.html" class="navigation__link">enjoy & chill</a></li>
        <li class="navigation__item">
        <a href="image.html" class="navigation__link">our Gallery</a></li>
        <li class="navigation__item">
        <a href="bartenders.html" class="navigation__link">Bartenders</a></li>
        <li class="navigation__item">
        <a href="services.html" class="navigation__link">our Services </a></li>
        <li class="navigation__item">
        <a href="contact.html" class="navigation__link"><span>Contact US</span></a></li>
        
    </ul>
</nav>
`);