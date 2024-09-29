let boxes=document.querySelectorAll(".box");
let reSet=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let mssgContainer=document.querySelector(".mssg-container");
let mssg=document.querySelector("#mssg");

let turnO="true";
let count=0;
let winPattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText="O";
            count++;
            turnO=false;
        }else{
            box.innerText="X";
            count++;
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });

});
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    mssgContainer.classList.add("hide");
}


const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner =( winner)=>{
    mssg.innerText=`Congratulations winner is ${winner}`;
    mssgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPattern){
        pos1Val=boxes[pattern[0]].innerText;
        pos2Val=boxes[pattern[1]].innerText;
        pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
            if(count===9){
                mssg.innerText=`It's a Draw!`;
                mssgContainer.classList.remove("hide");
            }
        }
    }
    
}
newBtn.addEventListener("click",resetGame);
reSet.addEventListener("click",resetGame);
