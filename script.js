let cols =16;
let rows =16;

const container = document.querySelector('#container');

const btnSize = document.querySelector('#btn-size');
btnSize.setAttribute('style',`
                      width: 100px;
                      height: 30px;
                      margin-bottom: 10px;`);

const btnRainbow = document.querySelector('#btn-colour');
btnRainbow.setAttribute('style',`
                      width: 100px;
                      height: 30px;
                      margin-bottom: 10px;`);

const btnDefault = document.querySelector('#btn-default');
btnDefault.setAttribute('style',`
                      width: 100px;
                      height: 30px;
                      margin-bottom: 10px;`);

const btnDark = document.querySelector('#btn-dark');
btnDark.setAttribute('style',`
                      width: 100px;
                      height: 30px;
                      margin-bottom: 10px;`);

const btnReset = document.querySelector('#btn-reset');
btnReset.setAttribute('style',`
                      width: 100px;
                      height: 30px;
                      margin-bottom: 10px;`);

function makeRainbow(){
    const divs = document.querySelectorAll('#divs');
    divs.forEach((div) => {
        div.onmouseover = () => div.style.backgroundColor = random_bg_color();
    });
}

function makeDark(){
    const divs = document.querySelectorAll('#divs');
    divs.forEach((div) => {
        //div.style.backgroundColor = 'rgb(255, 255, 255)';
        div.onmouseover = () => {
                                  let old =div.style.backgroundColor;
                                  console.log(old);
                                  
                                  let rgbString = old.slice(4, -1);
                                  let rgbaArray = rgbString.split(',');
                                  let red = rgbaArray[0];
                                  let green = rgbaArray[1];
                                  let blue = rgbaArray[2];

                                  console.log("red:"+red+" blue:"+blue+' green:'+green);
                                  div.style.backgroundColor = `rgb(${red -(red * 0,30)}, ${blue -(blue * 0,30)}, ${green - (green *0,30)})`;
                                }
    });
}

function makeDefault(){
    const divs = document.querySelectorAll('#divs');
    divs.forEach((div) => {
        div.onmouseover = () => div.style.backgroundColor = 'rgb(128, 128, 128)';
    });
}

function resetGrid(){
    const divs = document.querySelectorAll('#divs');
    divs.forEach((div) => {
        div.style.backgroundColor ='rgb(255, 255, 255)';
    });
}

function setContainer(container){
    container.setAttribute('style',`display: inline-grid; 
                        border: 1px solid black; 
                        grid-template-rows: repeat(${rows},1fr); 
                        grid-template-columns: repeat(${cols},1fr);
                        width: 900px;
                        justify-content: center;
                        padding: 0;
                        margin-left:450px;
                        `)
}

function createBox(bgColor = 'rgb(128, 128, 128)')
{
    const div = document.createElement('div');
    div.setAttribute('style',`aspect-ratio:1/1; 
                              background-color: rgb(255, 255, 255);`);
    div.setAttribute('id','divs');
    div.onmouseover = () => div.style.backgroundColor = bgColor;
    container.appendChild(div);
}

function setSize(){
    rows = prompt('Enter the grid size');
    cols = rows;

    document.getElementById('container').innerHTML = "";


    setContainer(container);

    if(rows < 100 ){                    
        for(i=0; i< rows * rows;i++){
                createBox();
            }                                    
    }
    else{
        alert('grid too big');
    }
}


function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}


 
setContainer(container);

for(i=0; i<cols*rows;i++){
    createBox()
}



btnSize.addEventListener('click',setSize);
btnRainbow.addEventListener('click',makeRainbow);
btnDefault.addEventListener('click',makeDefault);
btnReset.addEventListener('click',resetGrid);
btnDark.addEventListener('click',makeDark);


//container.style['grid-template'] = `${rows},${cols},auto`;