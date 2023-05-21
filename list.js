let theInput = document.querySelector(".add-item input"),
    theClickButton = document.querySelector(".add-item .plus"),
    theContainer = document.querySelector(".content");

//Add item

 window.onload = function () {
  theInput.focus();
};
theClickButton.onclick = function(){
    if(theInput.value === ""){
        console.log("No value");
        alert("Please enter a task");
    }else if(theInput.value.length >28){
        alert("the chrachter is less than 28")
        console.log("wrong");
    }else{
        let mainSpan = document.createElement("span"),
            deleteSpan = document.createElement("span"),
            createSpan = document.createTextNode(theInput.value),
            createDelete = document.createTextNode("x");
            mainSpan.appendChild(createSpan);
            mainSpan.className= 'task-box';
            deleteSpan.appendChild(createDelete);
            deleteSpan.className = 'delete';
            mainSpan.appendChild(deleteSpan);
            theContainer.appendChild(mainSpan);
            theInput.value="";
        
                
    }
};

document.addEventListener('click', function(e)
{
    if (e.target.className == "delete")
    {
        e.target.parentNode.remove();
    }
    if (e.target.classList.contains("task-box"))
    {
        e.target.classList.toggle("finished");
    }
});
//theInput.addEventListener('click', check)
theInput.addEventListener('keydown', (e) => {
	if(e.which === 13){
		check();
	}
});
function check(){
        if(theInput.value === ""){
        console.log("No value");
        alert("Please enter a task");
    }else if(theInput.value.length >28){
        alert("the chrachter is less than 28")
        console.log("wrong");
    }else{
        let mainSpan = document.createElement("span"),
            deleteSpan = document.createElement("span"),
            createSpan = document.createTextNode(theInput.value),
            createDelete = document.createTextNode("x");
            mainSpan.appendChild(createSpan);
            mainSpan.className= 'task-box';
            deleteSpan.appendChild(createDelete);
            deleteSpan.className = 'delete';
            mainSpan.appendChild(deleteSpan);
            theContainer.appendChild(mainSpan);
            theInput.value="";
        
                
    }
};

    




