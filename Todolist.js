const inpuBox = document.querySelector('.inputBox');
const listCntainer = document.getElementById('listContainer');

function addTask(){
    if(inpuBox.value === ""){
        alert("You must write something! ");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inpuBox.value;
        listCntainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inpuBox.value = "";
    saveData();
}

listCntainer.addEventListener('click',function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
}
},false);

function saveData(){
    localStorage.setItem("date",listCntainer.innerHTML);
}
function showTask(){
    listCntainer.innerHTML = localStorage.getItem("date");
    
}
showTask();