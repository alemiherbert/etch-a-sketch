const paintingArea = document.getElementById("painting-area");
let isDrawing = false;

function createGrid(element, pixelSize) {
    const numberOfRows = element.offsetHeight / pixelSize;
    const numberOfColumns = element.offsetWidth / pixelSize;
    const numberOfElements = numberOfRows * numberOfColumns;

    for (let pixelsCreated = 0; pixelsCreated < numberOfElements; pixelsCreated++) {
        const pixel = document.createElement("div");
        element.appendChild(pixel);
    }
    return [...element.childNodes];
}


const pixels = createGrid(paintingArea, 8);


pixels.forEach(function (pixel) {
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "red"
    })
})
