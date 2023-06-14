function showText() {
  alert("Заявка на отмену рейса была отправлена!");
}

function Data() {
  alert("Запрос на смену данных был отправлен, ожидайте!");
}


function Data1() {
  alert("На ваш e-mail отправлено письмо!");
}


window.onscroll = function() {myFunction()};


var header = document.getElementById("myHeader");


var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}