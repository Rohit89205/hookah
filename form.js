var form = document.getElementById("forms");
form.insertAdjacentHTML("afterbegin", `<div class="row">
<div class="book">
    <div class="book__form">
        <form action="#" class="form">
            <div class="u-margin-bottom-medium">
                <h2 class="heading-secondary">
                    Start booking now
                </h2>
            </div>

            <div class="form__group">
                <input type="text" class="form__input" placeholder="Full name" id="name" required>
                <label for="name" class="form__label">Full name</label>
            </div>

            <div class="form__group">
                <input type="email" class="form__input" placeholder="Email address" id="email" required>
                <label for="email" class="form__label">Email address</label>
            </div>
            <div class="form__group">
                <input type="text" class="form__input" placeholder="Message" id="name" required>
                <label for="name" class="form__label">Message</label>
            </div>
            <div class="form__group">
                <button class="btn btn--green">SUBMIT</button>  
            </div>
        </form>
    </div>
</div>
</div>`);