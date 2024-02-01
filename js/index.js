const InputName = document.querySelector("#input-name");

const InputNumber = document.querySelector("#input-number");

const InputMonth = document.querySelector("#input-month");

const InputYear = document.querySelector("#input-year");

const InputCvc = document.querySelector("#input-cvc");

const CardNumber = document.querySelector("#card-number");

const CardName = document.querySelector("#card-name");

const CardMonth = document.querySelector("#card-date");

const CardYear = document.querySelector("#card-year");

const CardCvc = document.querySelector("#card-cvc");

const Form = document.querySelector("#form");

const ThankYou = document.querySelector("#thank-you")

const ButtonContinue = document.querySelector("#continue")

InputName.addEventListener("input", () => {
    CardName.innerText = InputName.value;

    if (InputName.value.length === 0) {
        CardName.innerText = "Jane Appleseed";
    }
});

// Nueva funcionalidad para formatear el número de tarjeta de crédito
var inputNumber = document.getElementById('input-number');
var cardNumber = document.getElementById('card-number');

inputNumber.addEventListener("input", () => {
    var enteredNumber = inputNumber.value.replace(/\D/g, ''); // Elimina caracteres no numéricos
    var formattedNumber = enteredNumber.replace(/(\d{4})/g, '$1 '); // Formatea en bloques de 4
    cardNumber.innerText = formattedNumber.trim();
    
    if (enteredNumber.length === 0) {
        cardNumber.innerText = "0000 0000 0000 0000";
    }
});

InputMonth.addEventListener("input", () => {
    CardMonth.innerText = InputMonth.value;

    if (InputMonth.value.length === 0) {
        CardMonth.innerText = "00";
    }
});

InputYear.addEventListener("input", () => {
    CardYear.innerText = InputYear.value;

    if (InputYear.value.length === 0) {
        CardYear.innerText = "00";
    }
});

InputCvc.addEventListener("input", () => {
    CardCvc.innerText = InputCvc.value;

    if (InputCvc.value.length === 0) {
        CardCvc.innerText = "00";
    }
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("disabled");
    thankYou.classList.remove("disabled");
})

ButtonContinue.addEventListener("click", () => {
    form.classList.remove("disabled");
    thankYou.classList.add("disabled");
    form.reset();
    cardName.innerText = "Jane Appleseed";
    cardNumber.innerText = "0000 0000 0000 0000";
    cardMonth.innerText = "00";
    cardYear.innerText = "00";
    cardCVC.innerText = "000";
})


