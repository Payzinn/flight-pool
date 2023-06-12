// Получаем все кнопки "Подробнее" в акциях
var promoButtons = document.querySelectorAll(".promo-button");

for (var i = 0; i < promoButtons.length; i++) {
  // Добавляем обработчик событий для каждой кнопки
  promoButtons[i].addEventListener("click", function() {
    // Получаем следующий элемент после кнопки, который содержит скрытый текст
    var descr = this.nextElementSibling;

    // Если элемент уже отображен, то скрываем его, иначе отображаем
    if (descr.style.display === "block") {
      descr.style.display = "none";
      this.innerHTML = "Подробнее";
    } else {
      descr.style.display = "block";
      this.innerHTML = "Скрыть";
    }
  });
}