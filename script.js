let cols =16;
let rows =16;

const container = document.querySelector('#container');
const btnSize = document.querySelector('#btn-size');

function setContainer(container){
    container.setAttribute('style',`display: inline-grid; 
                        border: 1px solid black; 
                        grid-template-rows: repeat(${rows},1fr); 
                        grid-template-columns: repeat(${cols},1fr);
                        width: 900px;
                        justify-content: center
                        padding: 0;
                        margin:0;
                        `)
}

function createBox(bgColor = 'gray')
{
    const div = document.createElement('div');
    div.setAttribute('style',`aspect-ratio:1/1; 
                              background-color: white;`);
    div.onmouseover = () => div.style.backgroundColor = bgColor;
    container.appendChild(div);
}

btnSize.setAttribute('style',`
                      width: 100px;
                      height: 30px;
                      margin-left: 400px;
                      margin-bottom: 10px;`);
 
setContainer(container);

for(i=0; i<cols*rows;i++){
    createBox()
}

function setSize(){
    rows = prompt('Enter the grid size');
    cols = rows;

    document.getElementById('container').innerHTML = "";


    setContainer(container);

    if(rows < 100 ){                    
        for(i=0; i< rows * rows;i++){
                        const div = document.createElement('div');
                        div.setAttribute('style',`aspect-ratio:1/1;
                                                  background-color: white;`);
                        div.onmouseover = () => div.style.backgroundColor = random_bg_color();
                        container.append(div);
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

btnSize.addEventListener('click',setSize);


//container.style['grid-template'] = `${rows},${cols},auto`;