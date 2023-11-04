const min = 1;
const max = 10;

const button = document.getElementsByClassName('button')[0];
const hearts = document.getElementsByClassName('fa-heart');
const h1 = document.createElement("h1");

let remainingHearts = hearts.length;

button.addEventListener('click',()=>{
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const user = prompt("Guess the number from 1 to 10");

    if(user == randomNum){
        alert("You've got it! :)");
        for (const heart of hearts){
            while(remainingHearts != 3){
                remainingHearts++
            }
            heart.style.color = "red";
        }
    }else if(user < 1 || user > 10){
        alert("please enter a number from 1 to 10")
    }else{
        alert("Nope :(");
        if (remainingHearts > 0) {
            remainingHearts--;
            hearts[remainingHearts].style.color = "white";
        }
        if (remainingHearts === 0) {
            alert("You've run out of hearts! Game over.");
            button.disabled = true;
            document.body.appendChild(h1);
            h1.textContent = "Restart the page"
        }
    }
});