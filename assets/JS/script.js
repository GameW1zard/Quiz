
var awnsers = document.querySelector("#awnsers")
var question = document.querySelector("#questions")
var countdown = document.querySelector("#counter")
var counter = "90 seconds left"
var score = 0
var awnser1 = false
var awnser2 = false
var awnser3 = false
var awnser4 = false
var initals = ""


countdown.textContent = counter

startquiz()

function startquiz() {
  var li1 = document.createElement("li")

  question.textContent = "Click start to begin quiz!"

  li1.textContent = "Click to start!"
  li1.setAttribute("id", "li1")
  awnsers.appendChild(li1)
  li1.addEventListener ("click", function() {question1(), timer(), li1.remove()})

}


function question1() {
    var li1 = document.createElement("li")
    var li2 = document.createElement("li")
    question.textContent = "What form of braket do you use to specify what a function does"

    li1.textContent = "Curly"
    li2.textContent = "Square"
  
    li1.setAttribute("id", "li1")
    li2.setAttribute("id", "li2")

    awnsers.appendChild(li1)
    awnsers.appendChild(li2)

    li1.addEventListener ("click", function() {score += 25, console.log("li1 clicked " + score), awnser1 = true, li1.remove(), li2.remove(), question2()})
    li2.addEventListener ("click", function() {score -= 10, counter -= 5, console.log("li2 clicked " + score)})




}

function question2() {
  var li1 = document.createElement("li")
  var li2 = document.createElement("li")
  var li3 = document.createElement("li")
  question.textContent = "Console.log('hello') will print what to the console"

  li1.textContent = "'hello'"
  li2.textContent = "5"
  li3.textContent = "hello"

  li1.setAttribute("id", "li1")
  li2.setAttribute("id", "li2")
  li3.setAttribute("id", "li3")

  awnsers.appendChild(li1)
  awnsers.appendChild(li2)
  awnsers.appendChild(li3)
  
  li3.addEventListener ("click", function() {score += 25, console.log("li1 clicked " + score), li1.remove(), li2.remove(), li3.remove(), awnser2 = true, question3()})
  li2.addEventListener ("click", function() {score -= 10, counter -= 5, console.log("li2 clicked " + score) })
  li1.addEventListener ("click", function() {score -= 10, counter -= 5, console.log("li3 clicked " + score) })



}

function question3() {
  var li1 = document.createElement("li")
  var li2 = document.createElement("li")
  var li3 = document.createElement("li")
  var li4 = document.createElement("li")
  question.textContent = "Wich one of these will correctly create a 'li' element"

  li1.textContent = "document.makeElement('li')"
  li2.textContent = "document.createElement('li')"
  li3.textContent = "document.Element('li')"
  li4.textContent = "document.createElement(li)"

  li1.setAttribute("id", "li1")
  li2.setAttribute("id", "li2")
  li3.setAttribute("id", "li3")
  li4.setAttribute("id", "li4")
  awnsers.appendChild(li1)
  awnsers.appendChild(li2)
  awnsers.appendChild(li3)
  awnsers.appendChild(li4)
  li2.addEventListener ("click", function() {score += 25, console.log("li1 clicked " + score), awnser3 = true, li1.remove(), li2.remove(), li3.remove(), li4.remove(), question4()})
  li1.addEventListener ("click", function() {score -= 10, counter -= 5, console.log("li2 clicked " + score)})
  li3.addEventListener ("click", function() {score -= 10, counter -= 5, console.log("li3 clicked " + score)})
  li4.addEventListener ("click", function() {score -= 10, counter -= 5, console.log("li4 clicked " + score)})



}

function question4() {
  var li1 = document.createElement("li")
  var li2 = document.createElement("li")
  question.textContent = "20 === '20'"

  li1.textContent = "False"
  li2.textContent = "True"

  li1.setAttribute("id", "li1")
  li2.setAttribute("id", "li2")

  awnsers.appendChild(li1)
  awnsers.appendChild(li2)

  li1.addEventListener ("click", function() {score += 25, console.log("li1 clicked " + score), awnser4 = true, li1.remove(), li2.remove(), counter = 0})
  li2.addEventListener ("click", function() {score -= 10, counter -= 5, console.log("li2 clicked " + score)})



}

function Form(event) {
  var inputholder = document.createElement("form")
  var nameinput = document.createElement("input")
  var uldel = document.querySelector("#awnsers")
  var flexholder = document.querySelector("#flexholder")
  var button = document.createElement("button")
  nameinput.setAttribute ("id", "text")
  question.textContent = "Please enter your initals";

  uldel.remove();
 
  flexholder.appendChild(inputholder)
  inputholder.appendChild(nameinput)
  inputholder.addEventListener("submit", test)

console.log(initals)
}

function test(event) {
  event.preventDefault();

console.log("did this work")


}


function initsubmit() {
  var lastscore = localStorage.getItem("score")
  var lastinit = localStorage.getItem("initals")
  var li1 = document.createElement("li")
  var li2 = document.createElement("li")
  var li3 = document.createElement("li")

  li2.textContent = "Reset highscore"
  li3.textContent = "Play again?"
  question.textContent = "Highscore"

  awnsers.appendChild(li1)
  awnsers.appendChild(li2)
  awnsers.appendChild(li3)

  li2.addEventListener ("click", function() {localStorage.clear()})
  li3.addEventListener ("click", function() {li1.remove(), li2.remove(), li3.remove(), refresh()})


  if (score <= 0) {score = 0}

  if (lastscore == null) {lastscore = 0; lastinit = "W1zard"}
  initals = prompt ("Your score was " + score + " please enter your initals", "W1z")
  if (score >= lastscore) {
  localStorage.setItem("initals", initals);
  localStorage.setItem("score", score)
  
    li1.textContent = initals + " with " + score
  }
  else {  
  li1.textContent = lastinit + " with " + lastscore;

  }
  

  

  
  
  

}


function timer() {
    counter = 90;
  
    var timeInterval = setInterval(function () {
    countdown.textContent = counter + " seconds left"
    
    counter--;
    
  
    if (counter === -1) {
  
      clearInterval(timeInterval)
      initsubmit()
      
  
    }
    }, 1000);
  }




function refresh() {


window.location.reload()


}







