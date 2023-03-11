const textArea = document.getElementById("textArea");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

textArea.addEventListener("keyup", () => {
  updateTotal();
});

const updateTotal = () => {
  score1.innerText = textArea.value.length;
  score2.innerText = textArea.getAttribute("maxlength") - textArea.value.length;
  //   console.log(textArea.value.length);
};

updateTotal();
