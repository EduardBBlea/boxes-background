const boxContainer = document.querySelector("#boxes");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => boxContainer.classList.toggle("big"));

const createBoxes = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxContainer.appendChild(box);
    }
  }
};

createBoxes();
