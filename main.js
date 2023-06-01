
function newinput() {

    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var inputPriority = document.getElementById("priority").value;
    var t = document.createTextNode(inputValue);
    var p = document.createTextNode(inputPriority);


    var span = document.createElement("SPAN");
    var txt = document.createTextNode("×");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.remove();
    }
    }
    
    
    
    var item = document.createElement("DIV");
    item.className = "item";
    item.contentEditable = "true";
    item.appendChild(t);
    li.appendChild(item);
    
    
    var prio = document.createElement("DIV");
    prio.className = "prior";
    prio.contentEditable = "true";
    prio.appendChild(p);
    li.appendChild(prio);




    if (inputValue === '') {
    alert("You must write any task!");
    } 

    else if (inputPriority === '') {
    alert("You must write any priority!");
    }
    
    else {
    document.getElementById("appContent").appendChild(li);
    }

    document.getElementById("myInput").value = "";
    document.getElementById("priority").value = "";

    


    // var done = document.createElement("SPAN");
    // var doneTxt = document.createTextNode("Done");

    // done.setAttribute("id", "done");
    // done.className = "done";
    // done.appendChild(doneTxt);
    // li.appendChild(done);



    var span = document.createElement("SPAN");
    var txt = document.createTextNode("×");

    span.className = "close";
    span.appendChild(txt);
    // li.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.remove();
    }
    }


    }



// close Section
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
myNodelist[i].appendChild(span);
}



// close functionality
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
var div = this.parentElement;
div.remove();
}
}











// Change background

$('#lmode').click(function() {
    $('#darkmode').addClass('lightmode');
    document.getElementById('lmode').style.display = "none";
    document.getElementById('dmode').style.display = "block";
});

$('#dmode').click(function() {
    $('#darkmode').removeClass('lightmode');
    document.getElementById('dmode').style.display = "none";
    document.getElementById('lmode').style.display = "block";
});




// function addToLocalStorage(todos) {
//     localStorage.setItem('todos', JSON.stringify(todos));
//     renderTodos(todos);
// }





// CheckList Section
var list = document.querySelector("ul");
console.log (list);
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
ev.target.classList.toggle('checked');
}
}, false);