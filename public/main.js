// let word = wordArray[0].split("")
// console.log(word)
// //Shuffle cards
// knuthShuffle(word)
// console.log(word)

let words = ["doctype", "script", "rendering", "specificity", "sprites", "media queries", "responsive", "inheritance", "prototype", "hoisting", "promises", "object oriented", "asynchronous", "node.js", "javascript"]

let scrambledWords = []
let word = ""
words.forEach((el) => {
  word = el.split("")
  //Shuffle cards
  knuthShuffle(word)
  scrambledWords.push(word)
})

knuthShuffle(scrambledWords)
console.log(scrambledWords)
document.querySelector("h2").innerHTML = scrambledWords[0]

// scrambledWords.forEach(() => {



let count = 1
document.querySelector("#reset").onclick = () =>{
  document.querySelector("h2").innerHTML = scrambledWords[count]
  count += 1
  console.log(count)
}






var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fas fa-ban");

//THUMBS UP
// Array.from(arrayName), new ES6 syntax
// instead could use,
// var thumbUp = document.querySelectorAll("fa-thumbs-up");
// thumbUp.forEach(function(element) {


Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log("thumbUp")
        //"this" is clickedOn thumb up <i>icon</i>
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        //parseFloat to change to StringValue from DOM to NumberValue
        const countUp = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('thumbUp', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          //changing to JSON format to send from client to server
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':countUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    //"this" is clickedOn thumb up <i>icon</i>
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    //parseFloat to change to StringValue from DOM to NumberValue
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[11].innerText)
    console.log(`thumbDown ${thumbDown}`)
    fetch('messagesDown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      //changing to JSON format to send from client to server
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbDown':thumbUp
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

//TRASH CAN
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        //name and message targed
            //this = what you clicked on
            //parentNode = go up a level
            //parentNode = go up a level
            //childNode = go INTO the level (BY INDEX)
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        // messages end point
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
