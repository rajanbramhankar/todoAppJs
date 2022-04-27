
    
    let container = document.getElementById("container")
    let container1 = document.getElementById("container1")
    // let addTask = document.createElement("div");
    // addTask.setAttribute("id","addTask");
    let nItem = document.getElementById("nItem")
    const tasklist = [];


    function addpop2()
{

document.getElementById("popup2").style.display="block"
}





function vishakha(){
    container.style.filter = "blur(5px)"
    let akash = document.createElement("h1")
    akash.setAttribute("id","akash")
    container1.appendChild(akash)

    // let addTask1 = document.getElementById("addTask");
    akash.innerText = 'Add New List'
    akash.style.fontSize="20px"
    akash.style.fontFamily="sans-serif"
    akash.style.textAlign="center"
    akash.style.padding="8px"
    akash.innerHTML= `  <span>Add Task List</span>  <br><br>

    <input type="text" placeholder="add task list" name="name" value="" id="list">  <br><br> 

    <button onclick="yup()" class="abutton">Add</button>  
    <button class="cbutton">Close</button>`

};


function yup(){

    container.style.filter = "blur(0)"
    // container1.style.display="none"
    container.style.display="flex"
    container.style.flexWrap="wrap"
    container.style.justifyContent="space-between"
    container.style.position="relative"
    nItem.style.display="none"
const name=document.getElementById("list").value

const tempObject={
    taskname: name
} 

tasklist.push(tempObject); 
console.log(tasklist);

addtaskonScreen();
};



function addtaskonScreen() {
    
const element=document.createElement("div");
element.setAttribute("class","child");
element.innerText=tasklist[tasklist.length-1].taskname;


const existingElement=document.getElementById("container ");
container.appendChild(element); 

const hr=document.createElement("hr")
hr.setAttribute("id","hr")
element.appendChild(hr)


const i=document.createElement("i")
i.setAttribute("id","pluse")
i.innerHTML='<i class="fa-solid fa-circle-plus"></i>'
i.onclick=addpop2
element.appendChild(i)


const j=document.createElement("i")
j.setAttribute("id","delete")
j.innerHTML='<i class="fa-solid fa-trash-can"></i>'
element.appendChild(j)
j.onclick=deletecard()


 


};

function deletecard()
{


const trash=document.getElementById("child")
trash.parentNode.removeChild(child)


}






    

  








    
