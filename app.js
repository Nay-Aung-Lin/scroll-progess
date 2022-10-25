var getProgressBar = document.getElementById("progress-bar");

window.onscroll = function () {
  scrollPoint();
};

function scrollPoint() {
  //   console.log("I'm working");
  // st * 100 / (projectheight - clientheight) ;
  var getScrollTop = document.documentElement.scrollTop;
  var getScrollHeight = document.documentElement.scrollHeight;
  var getClientHeight = document.documentElement.clientHeight;

  var calcHeight = getScrollHeight - getClientHeight;

  var getFinal = Math.round(getScrollTop * 100) / calcHeight;
  getProgressBar.style.width = `${getFinal}%`;
}

function printMe() {
  window.print();
}
