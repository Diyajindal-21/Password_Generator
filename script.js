const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let input=document.querySelector("#input_length");
let generate=document.querySelector(".generate");
let password=document.querySelector(".box1");
let isalive=true;
let arr=[];
let display=()=>{
    let val=input.value;
    for(let i=0;i<val;i++){
        let char=characters[Math.floor(Math.random()*characters.length)];
        arr.push(char);
    }
    generate.disabled=true;
    for(let a=0;a<arr.length;a++){
        password.textContent+=arr[a];
    }
}
let enable=()=>{
    input.addEventListener("change",(event)=>{
        generate.disabled=false;
        arr=[];
        password.textContent="";
        display();
    })
}
generate.addEventListener("click",()=>{
    display();
    enable();
})