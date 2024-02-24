let userscore = 0;
let compscore = 0;


const choices = document.querySelectorAll(".choice");
//let msg = document.querySelectorAll("#msg");
let msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options = ["rock","paper","scissor"];
    const randid = Math.floor(Math.random()*3);
    return options[randid];
}

const showwinner = (userwin,uid,cid) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
      //  console.log("you win");
        msg.innerText = `you win! ${uid} beats ${cid}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
       // console.log("you lose");
        msg.innerText = `you lose! ${uid} beats ${cid}`;
        msg.style.backgroundColor = "green";
        msg.style.backgroundColor = "red";
    }
}

const drawgame = () =>{
   // console.log("game was draw!!");
    msg.innerText = "Game was Draw!!";
    msg.style.backgroundColor = "blue";
};

const playgame = (uid) =>{
  //  console.log("user coice = ",uid);
    const cid =  gencompchoice();
   // console.log("computer coice = ",cid);
    if(uid === cid){
        drawgame();
    }
    else{
        let userwin = true;
        if(uid === "rock"){
           userwin = cid === "paper"?false:true;
        }
        else if(uid === "paper"){
            userwin = cid === "scissor"?false:true;
        }
        else{
            cid === "rock" ? false : true;
        }
        showwinner(userwin,uid,cid);
    }
}

choices.forEach((choice) => {

    choice.addEventListener("click",() =>{
        const uid = choice.getAttribute("id");
        playgame(uid);
       
    });
});