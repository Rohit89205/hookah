var footer = document.getElementById("footers");
footer.insertAdjacentHTML("beforeend", ` <div class="footer__logo-box">

<picture class="footer__logo">
    <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
            media="(max-width: 37.5em)">
    <img srcset="img/logo-white.png 1x, img/logo-white.png 2x" alt="Full logo" src="img/logo-white.png">
</picture>



</div>
<div class="row">
<div class="col-1-of-2">
    <div class="footer__navigation">
        <ul class="footer__list">

            <li class="footer__item"><a href="https://www.facebook.com/bartenders4uin" class="footer__link">
                <i class="fa fa-facebook fa-2x" id="instagram" aria-hidden="true"></i>
            </a></li>
            <li class="footer__item"><a href="https://www.instagram.com/bartenders4uin" class="footer__link">
                <i class="fa fa-instagram fa-2x" id="instagram" aria-hidden="true"></i>
            </a></li>
            <li class="footer__item"><a href="http://linkedin.com/in/bartenders4uin" class="footer__link">
                <i class="fa fa-linkedin fa-2x" id="instagram" aria-hidden="true"></i>
            </a></li>
            <li class="footer__item"><a href="http://www.pinterest.com/bartenders4uin" class="footer__link">
                <i class="fa fa-pinterest fa-2x" id="instagram" aria-hidden="true"></i>
            </a></li>
            <li class="footer__item"><a href="https://twitter.com/Bartenders4uin" class="footer__link">
                <i class="fa fa-twitter fa-2x" id="instagram" aria-hidden="true"></i>
            </a></li>
            <li class="footer__item"><a href="https://wa.me/919871888850" class="footer__link">
            <i class="fa fa-whatsapp fa-2x" id="instagram" aria-hidden="true"></i>
        </a></li>
            <li class="footer__item"><a href="https://www.youtube.com/channel/UCqblN8RpW-HjHTWZQP56puA" class="footer__link">
            <i class="fa fa-youtube fa-2x" id="instagram" aria-hidden="true"></i>
        </a></li>
        </ul>
    </div>
</div>
<div class="col-1-of-2">
    <p class="footer__copyright">
    Let us do the work, enjoy your party. We'll guide you throughout the process , so you know exactly what and how much you need to purchase to provide the drinks you have selected.  Our promise to you provides an  upscale atmosphere, great customer service and excellent cocktails.
    </p>
</div>
</div>`);