const bodyEle = document.querySelector("body");

bodyEle.addEventListener("mousemove", (e) => {
  //   console.log("moved");
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  const spanEl = document.createElement("span");

  //setting pointer postion
  spanEl.style.left = xPos + "px";

  spanEl.style.top = yPos + "px";
  //getting random size hearts
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEle.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
