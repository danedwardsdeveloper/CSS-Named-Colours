import colours from "./modules/colours.module.js";

function generateColourButtons() {
  const main = document.querySelector("main");

  colours.forEach((colour) => {
    let colourButton = document.createElement("button");
    colourButton.classList.add("colour-card");
    colourButton.style.backgroundColor = `${colour}`;
    let label = document.createElement("span");
    label.classList.add("colour-label");
    label.textContent = `${colour}`;
    colourButton.appendChild(label);
    colourButton.addEventListener("click", (event) => {
      let textToCopy = label.textContent;
      navigator.clipboard.writeText(textToCopy);
      label.textContent = `Copied ✅`;
      setTimeout(() => {
        label.textContent = colour;
      }, 500);
    });
    main.appendChild(colourButton);
  });
}

generateColourButtons();
