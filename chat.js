var TodoList = [];
var DoingList = [];
var DoneList = [];

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


function toggleForm(){
   display = document.getElementById("myForm").style.display;
   if(display=="none"){
        document.getElementById("myForm").style.display = "block";
   }else{
        document.getElementById("myForm").style.display = "none";
   }
}