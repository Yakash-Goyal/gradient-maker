let but1 = document.querySelector(".but1");
let but2 = document.querySelector(".but2");
let copy = document.querySelector(".copy");
let text = document.querySelector("h2");
let change = document.querySelector(".change");
let count = 0;
let hex1 = '#a96139';
let hex2 = '#7f2194';

const hexvalue = () => {
    let hexvalues = "0123456789abcdef";
    let hex = "#";
    for(let i = 0;i<6;i++){
        hex = hex.concat(hexvalues[Math.floor(Math.random()*16)]) 
    }
    return hex;
}

const button1 = ()=>{
    hex1 = hexvalue();
    // let hex2 = button2();
    but1.textContent = hex1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${hex1},${hex2})`;
    but1.style.background = hex1;
    copy.textContent = `background-image :linear-gradient(to right, ${hex1},${hex2})`;
    return hex1;
}

const button2 = ()=>{
    hex2 = hexvalue();
    but2.textContent = hex2; 
    document.body.style.backgroundImage = `linear-gradient(to right, ${hex1},${hex2})`;
    but2.style.background = hex2;


    copy.textContent = `background-image :linear-gradient(to right, ${hex1},${hex2})`;

    return hex2;
}

but1.addEventListener('click', button1);
but2.addEventListener('click', button2);

text.addEventListener("click", () =>{
    console.log("Hello");
    navigator.clipboard.writeText(copy.textContent);
    copy.textContent = "copied!";
})

change.addEventListener("click",()=>{
    // let hex1 = button1();
    // let hex2 = button2(); 
    count++;
    if(count == 8){
        count = 0;
    }
    const direction = ["to right","to top right","to top","to top left","to left","to bottom left","to bottom","to bottom right"];
    document.body.style.backgroundImage = `linear-gradient(${direction[count]}, ${hex1},${hex2})`
    copy.textContent = `background-image :linear-gradient(${direction[count]}, ${hex1},${hex2})`;
    
})