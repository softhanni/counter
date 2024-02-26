// console.log(document.querySelector(".count"))

function decrement() {
  var i = document.querySelector(".count").innerText;
  if ((i) => 0) {
    i--;
    document.querySelector(".count").innerText = i;

    if (i < 0) {
      document.querySelector(".count").style.color = "red";
    } else if (i == 0) {
      document.querySelector(".count").style.color = "white";
    }
    // console.log(i)
  }
}

function increment() {
  var i = document.querySelector(".count").innerText;
  if ((i) => 0) {
    i++;
    document.querySelector(".count").innerText = i;

    if (i > 0) {
      document.querySelector(".count").style.color = "green";
    } else if (i == 0) {
      document.querySelector(".count").style.color = "white";
    }
  }
}

function reset() {
  var i = document.querySelector(".count").innerText;
  if (i < 0 || i > 0) {
    i = 0;
    document.querySelector(".count").innerText = i;
    document.querySelector(".count").style.color = "white";
  }
}
