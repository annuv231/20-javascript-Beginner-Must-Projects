const btnEle = document.querySelector(".btn");

btnEle.addEventListener("mouseover", (e) => {
  //   console.log("hello world");
  const x = e.pageX - btnEle.offsetLeft;
  const y = e.pageY - btnEle.offsetTop;
  btnEle.style.setProperty("--xPos", x + "px");
  btnEle.style.setProperty("--yPos", y + "px");
});
