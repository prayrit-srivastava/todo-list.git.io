var list =[];

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



function addTodo(text){
    var task ={
        task_name : text,
        id:Date.now
    }
    list.push(task);
    var li = document.createElement("li");
    // li.style.fontSize= 20px;
    var t = document.createTextNode(task.task_name);
    li.appendChild(t);
    document.getElementById("list").appendChild(li);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }

  document.getElementById("inp").value = "";
    // document.getElementById("todo").innerHTML = list.map(double);
    console.log(list);
}


function solve(){
    const input = document.getElementById("inp").value;
    event.preventDefault();
    const text = input.trim();
    if (text !== ''){
              addTodo(text);
    }
}
function clearAll(){
    // var e = document.getElementsById("list").value;
    var e = document.querySelector("ul");
    var child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
}
// form.addEventListener('submit', event => {
//     // prevent page refresh on form submission
//     event.preventDefault();
//     // select the text input
//     const input = document.querySelector('#inp');
  
//     // Get the value of the input and remove whitespace
//     const text = input.value.trim();
//     if (text !== '') {
//       addTodo(text);
//     //   input.value = '';
//     //   input.focus();
//     }
// });