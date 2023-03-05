
var awnsers = document.querySelector("#awnsers")
var question = document.querySelector("#questions")
var countdown = document.querySelector("#counter")
var counter = 60
var score = 100
var awnser1 = false
var awnser2 = false
var awnser3 = false
var awnser4 = false
countdown.textContent = counter

timer()


function question1() {
    var li1 = document.createElement("li")
    var li2 = document.createElement("li")
    question.textContent = "did this work?"

    li1.textContent = "yes it did"
    li2.textContent = "no it didn't"
  
    li1.setAttribute("id", "li1")
    li2.setAttribute("id", "li2")

    awnsers.appendChild(li1)
    awnsers.appendChild(li2)

    li1.addEventListener ("click", function() {console.log("li1 clicked " + score), awnser1 = true })
    li2.addEventListener ("click", function() {score -= 10, counter -= 5, console.log("li2 clicked " + score) })




}

function question2() {
  var li1 = document.createElement("li")
  var li2 = document.createElement("li")
  var li3 = document.createElement("li")
  question.textContent = "is sue cute?"

  li1.textContent = "yes"
  li2.textContent = "no"
  li3.textContent = "sue is hot"

  li1.setAttribute("id", "li1")
  li2.setAttribute("id", "li2")
  li3.setAttribute("id", "li3")

  awnsers.appendChild(li1)
  awnsers.appendChild(li2)
  awnsers.appendChild(li3)
  
  li1.addEventListener ("click", function() {console.log("li1 clicked " + score), awnser1 = true })
  li2.addEventListener ("click", function() {score -= 10, counter -= 5, console.log("li2 clicked " + score) })
  li3.addEventListener ("click", function)



}




function timer() {
    counter = 60;
  
    var timeInterval = setInterval(function () {
    countdown.textContent = counter + " seconds left"
    
    counter--;
    
  
    if (counter === -1) {
  
      clearInterval(timeInterval)
    
  
    }
    }, 1000);
  }

question1()









