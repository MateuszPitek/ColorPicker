const inputs = document.querySelectorAll("input");
const container = document.querySelector("#main-container");

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.value < 0 || input.value > 255) {
            input.style.border = "3px solid red";
            input.value = "";

        } else {
            changeColor()
        };
    });
});

function changeColor() {
    const r = document.querySelector("#red").value;
    const g = document.querySelector("#green").value;
    const b = document.querySelector("#blue").value;
    const a = document.querySelector("#transparency").value/100;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${a})`;
    document.querySelector(".hex-value").innerHTML = `${rgbToHex(Number(r), Number(g), Number(b))}`
    document.querySelector(".rbin").innerHTML = Number(r).toString(2);
    document.querySelector(".gbin").innerHTML = Number(g).toString(2);
    document.querySelector(".bbin").innerHTML = Number(b).toString(2);
}

const rgbToHex = ((r, g, b) => [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex
}).join(''));


