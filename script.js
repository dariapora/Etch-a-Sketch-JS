const gridSld = document.getElementById("gridSld");
const helpTxt = document.getElementById("helpText");
const column2 = document.getElementById("containerColumn2");
const colors = Array.from(document.getElementsByClassName("color"));
const eraserBtn = document.getElementById("eraserBtn");
const brushBtn = document.getElementById("brushBtn");
const resetBtn = document.getElementById("resetGrid");
const valueText = document.getElementById("value");
let color = "black";
let gridSize;

colors.forEach((clr) => {
    clr.addEventListener("click", () => {
        color = clr.style.backgroundColor;
    })
});

let isEraser = false;
brushBtn.style.backgroundColor="#3b3b3b";
brushBtn.style.color="white";

eraserBtn.addEventListener("click", () => {
    isEraser = true;
    eraserBtn.style.color = "white";
    brushBtn.style.color = "black";
    eraserBtn.style.backgroundColor="#3b3b3b";
    brushBtn.style.backgroundColor="white";
});

brushBtn.addEventListener("click", () => {
    isEraser = false;
    brushBtn.style.backgroundColor="#3b3b3b";
    eraserBtn.style.backgroundColor="white";
    brushBtn.style.color = "white";
    eraserBtn.style.color="black";
});

gridSld.addEventListener("input", () => {
    gridSize = gridSld.value;
    helpTxt.style.display = "none";
    console.log(gridSize);
    column2.innerHTML = "";
    value.innerHTML = `${gridSize}`+"x"+`${gridSize}`;
    let pixelGrid = document.createElement("div");
    let pixels = [];
    pixelGrid.style.display = "flex";
    pixelGrid.style.flexDirection = "column";
    column2.append(pixelGrid);
    for (let i = 1; i <= gridSize; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.id = "row" + i;
        pixelGrid.append(row);
        for (let j = 1; j <= gridSize; j++) {
            let pixel = document.createElement("div");
            pixel.style.height = 600 / gridSize + "px";
            pixel.style.width = 600 / gridSize + "px";
            pixel.style.border = "0.5px solid #3b3b3b";
            pixel.style.backgroundColor = "white";
            row.append(pixel);
            pixels.push(pixel);
        }
    }
    let isDrawing = false;
    pixels.forEach((pxl) => {
        pxl.addEventListener("mousedown", () => isDrawing = true);
        pxl.addEventListener("mouseup", () => isDrawing = false);
        pxl.addEventListener("mouseover", () => {
            if (isDrawing) {
                if (!isEraser) pxl.style.backgroundColor = color;
                else pxl.style.backgroundColor = "white";
            }
        })
    });
    resetBtn.addEventListener("click", ()=> {
        pixels.forEach((pxl) => pxl.style.backgroundColor = "white");
    })
});
