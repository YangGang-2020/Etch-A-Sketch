
///
let userValue = 16;
var colorChange = false;

var wrapper = document.createElement("div")
wrapper.classList.add("wrapper")
document.body.appendChild(wrapper)

var outerBlock = document.createElement("div")
wrapper.classList.add("outer-block")
wrapper.appendChild(outerBlock)
///

///
var titleblock = document.createElement("section")
outerBlock.appendChild(titleblock)

var title = document.createElement("h1")
title.innerHTML = "Etch-E-Sketch"
titleblock.appendChild(title)

var subTitle = document.createElement("h3")
subTitle.innerHTML = "Hover your mouse across the box below to start drawing with Java!"
titleblock.appendChild(subTitle)
///

///

buttonContainer = document.createElement("section")
buttonContainer.classList.add("button-container")
outerBlock.appendChild(buttonContainer)

resetButton = document.createElement("button")
resetButton.innerHTML = "Reset Grid"
resetButton.setAttribute("id", "reset-button")
buttonContainer.appendChild(resetButton)

colorButton = document.createElement("button")
colorButton.innerHTML = "Change Colors"
colorButton.setAttribute("id", "color-button")
buttonContainer.appendChild(colorButton)

///

///
var container = document.createElement("div")
container.classList.add("container")
outerBlock.appendChild(container)

for(i=1;i <= (userValue* userValue); i++) {
var gridbox = document.createElement("div")
gridbox.classList.add("grid-box");
gridbox.setAttribute("id", `box-${i}`)
gridbox.setAttribute("style", "width: 60px; height: 60px;")
container.appendChild(gridbox);
}
///


const colorPool = [
    '#7DB32B',
    '#A41809',
    '#421AAE',
    '#FEFEE3',
    '#F91A84',
    '#D01943',
    '#4E8669',
    '#FBB065',
    '#F53F42',
    '#23B4E4',
    '#8C5959',
    '#D9860F',
    '#FFAB01',
    '#1F64EB',
    '#71F35E',
    '#7EAD80',
];

let colorState = {
    color:	'#000',
};

///

document.getElementById("color-button").addEventListener("click", function() {
    if (colorChange) {
        colorChange = false;
    } else {
        colorChange = true;
    }
    ///colorState.color = colorPool[Math.floor(Math.random() * colorPool.length)]

})

var myColor = document.getElementsByClassName("grid-box");

container.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('grid-box')) {
        if (colorChange) {
            e.target.style.backgroundColor = colorPool[Math.floor(Math.random() * colorPool.length)]
        } else {
            e.target.style.backgroundColor = '#000';
        }
    }
});

document.getElementById("reset-button").addEventListener("click", function() {
    console.log('hi')

    let paras = document.getElementsByClassName("grid-box");
    
    while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    } 
    userValue = window.prompt("enter how many rows you'd like", "16");
    let sideLength = (960/userValue)

    for(i=1;i <= (userValue* userValue); i++) {
        var gridbox = document.createElement("div")
        gridbox.classList.add("grid-box");
        gridbox.setAttribute("id", `box-${i}`)
        gridbox.setAttribute("style", `width: ${sideLength}px; height: ${sideLength}px;`)
        container.appendChild(gridbox);
        }

    

})
