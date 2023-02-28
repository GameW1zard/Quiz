
var awnsers = document.querySelector("#awnsers")
var question = document.querySelector("#questions")
var countdown = document.querySelector("#counter")
var counter = ""


countdown.textContent = counter

function question1() {
    var li1 = document.createElement("li")
    var li2 = document.createElement("li")
    question.textContent = "did this work?"

    li1.textContent = "i have no idea"
    li2.textContent = "somehow amazingly it did"


    awnsers.appendChild(li1)
    awnsers.appendChild(li2)


}


function timer() {
    counter = 60;
  
    var timeInterval = setInterval(function () {
    countdown.textContent = counter + " seconds left"
    
    counter--;
    
  
    if (counter === -1) {
  
      clearInterval(timeInterval)
      displayMessage()
  
    }
    }, 1000);
  }

timer()


question1()









