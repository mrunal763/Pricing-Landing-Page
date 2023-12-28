

document.addEventListener("DOMContentLoaded", function () {
  function toggleCardDetails(card, hiddenClass) {
    const cardElementHidden = card.querySelector(`.${hiddenClass}`);
    cardElementHidden.classList.toggle("card-element-hidden");
  }

  function addCardListeners() {
    const cards = document.querySelectorAll(".card-basic, .card-standard, .card-premium");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        toggleCardDetails(card, `card-element-hidden-${card.classList[1]}`);
      });
    });
  }

  addCardListeners();

  const currencySelect = document.getElementById("currency");

  currencySelect.addEventListener("change", function () {
    const selectedCurrency = currencySelect.value;
    const prices = document.querySelectorAll(".card-body h2");

    prices.forEach((price) => {
      const currentPrice = parseFloat(price.innerText.split(" ")[0].substring(1));
      const updatedPrice = currentPrice * getConversionRate(selectedCurrency);
      price.innerText = `${selectedCurrency}${updatedPrice.toFixed(2)} / mo`;
    });
  });

  function getConversionRate(currency) {
    const conversionRates = {
      "$": 1,
      "€": 0.85,
      "£": 0.73,
    };

    return conversionRates[currency] || 1;
  }
});
