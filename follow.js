let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");
let c4 = document.querySelector(".c4");
let items = [c1, c2, c3, c4];
let arrToGuess = [];
let arrGuessed = [];


function rand(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}


let nbrGuess=1,correct;
let r;

function show(aa) {
  let a=  setInterval(function () {
    
    
        r = rand(1, 4);

        document.querySelector(`.c${r}`).classList.add("light");
        document.querySelector(`.c${r}`).classList.remove("dark");
        setTimeout(function () {
            document.querySelector(`.c${r}`).classList.add("dark");
            document.querySelector(`.c${r}`).classList.remove("light");
            arrToGuess.push(document.querySelector(`.c${r}`));
        }, 1000)
        aa--;
        if (aa < 1) {
            clearInterval(a);
        }
    }, 1500)
}




function guess()
{
    let nbr = 0;
    correct = 0;
    items.forEach(function (e) {
        e.onclick = function () {
              arrGuessed.push(e);
            if (arrGuessed[nbr] == arrToGuess[nbr]) {
                correct++;
                nbr++;
                if (correct == nbrGuess) {
                    arrGuessed = [];
                    arrToGuess = [];
                    nbrGuess++;
                    document.querySelector(".score").innerHTML++;
                    show(nbrGuess);
                    guess();
                }
            }
            else
            {
                document.querySelector(".container").style.display = "none";
                document.querySelector(".lose").innerHTML += document.querySelector(".score").innerHTML;
                document.querySelector(".lose").style.display = "block";
                return;
                }
        }
      
    })

}



window.onload = function ()
{
    show(nbrGuess);
    guess();
}