const bodyEl = document.querySelector("body")
bodyEl.addEventListener("mousemove",(event) =>{
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const spanEl = document.createElement("span") ;
    spanEl.style.left = xpos + "px";
    spanEl.style.top = ypos + "px";
    const size = Math.random()*100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});

const containerEl = document.querySelector(".container");

const careers = ["KIND" , "HANDSOME" , "THOUGHTFUL" , "MY FAV"];

let careersindex = 0;

let characterIndex = 0

updateText()

function updateText() {
    characterIndex ++
    containerEl.innerHTML =` <h2> YOU ARE ${careers[careersindex].slice(0,characterIndex)}</h2>`;

    if(characterIndex === careers[careersindex].length){
        careersindex ++
        characterIndex = 0
    }

    if(careersindex=== careers.length){
        careersindex =0
    }
    setTimeout( updateText, 400
        
    )
}

