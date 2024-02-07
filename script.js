




function randomHexColorCode(){
    let n=(Math.random()*0xfffff*1000000).toString(16);
    return '#'+n.slice(0,6);
}

let text=document.createElement("p");
let nav=document.querySelector(".nav");
let bgColorText=document.querySelector(".bg-color");
let button=document.querySelector(".click_me");
let main=document.querySelector("#main")

// button && button.addEventListener('click',(){
//     console.log("button");
// })




button.addEventListener("click",function(){
    let colorCode=randomHexColorCode();
    text.innerText=colorCode;
    bgColorText.appendChild(text);

    main.style.backgroundColor=colorCode;
});


    






