const paintingArea = document.getElementById("painting-area");
const eraseBtn = document.getElementById("erase-btn");
const clearBtn = document.getElementById("clear-btn");
const colorBtn = document.getElementById("color-btn");
let isDrawing = false;
let initialColor = "#000";

function createGrid(element, numPixels) {
    const width = 400;
    const pixelSize = width / numPixels;
    const numberOfElements = numPixels * numPixels;

    for (let pixelsCreated = 0; pixelsCreated < numberOfElements; pixelsCreated++) {
        const pixel = document.createElement("div");
        pixel.style.minWidth = pixelSize;
        pixel.style.minHeight = pixelSize;
        element.appendChild(pixel);
    }
    return [...element.childNodes];
}


const pixels = createGrid(paintingArea, 50);

clearBtn.addEventListener("click", () => {
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "#fff"
    })
})

eraseBtn.addEventListener("click", () => {
    initialColor = "#fff"
})

colorBtn.addEventListener("change", () => {
    initialColor = colorBtn.value
})

pixels.forEach(function (pixel) {
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = initialColor
    })
})
