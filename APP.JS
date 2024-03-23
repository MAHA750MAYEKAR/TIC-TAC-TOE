let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-btn")
let turnO=true;
let newGamebtn=document.querySelector("#newGame-btn")
let messageDispay=document.querySelector(".msg-container")

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const unableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}
const resetGame=()=>{
    unableBoxes()
    turnO=true;
    messageDispay.classList.add("hide")

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
        box.innerText="O"
        turnO=false

       }
       else{
        box.innerText="X"
        turnO=true
       }
       box.disabled=true
       winChecker()

    })
})
const diclarwinner=(winner)=>{
    messageDispay.classList.remove("hide")
   
    
    messageDispay.innerText=`Congratulation winner is ${winner}!!`
   messageDispay.style.fontSize="50px"
   
   messageDispay.style.fontFamily="Arial, sans-serif"
    disableBoxes()

}

const winChecker=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText
        let pos2Val=boxes[pattern[1]].innerText
        let pos3Val=boxes[pattern[2]].innerText

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!="")
        if(pos1Val===pos2Val && pos2Val===pos3Val){
           diclarwinner(pos1Val)

        }
    }
}
resetBtn.addEventListener("click",resetGame)
newGamebtn.addEventListener("click",resetGame)