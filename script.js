var ul=document.getElementById('list')
var li;
var controls=document.querySelector(".controls")
var p=document.createElement('p')

var addButton=document.getElementById('add')
addButton.addEventListener('click',addTodo)

var removeButton=document.getElementById('remove')
removeButton.addEventListener('click',removeTodo)


function addTodo(){
    var input=document.getElementById('input')
    var todo=input.value
    var textNode=document.createTextNode(todo)
    if(todo==''){
         p.textContent="Enter a non empty todo"
         setTimeout(() => {
            controls.insertBefore(p,addButton) 
        }, 100);  
    } else{
        
        li=document.createElement('li')

       
        var checkBox = document.createElement('input')
        checkBox.type='checkbox'
        checkBox.setAttribute('id','check')
        
       
        var label = document.createElement('label')
    
        ul.appendChild(label)
        li.appendChild(checkBox)
        label.appendChild(textNode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0])
        setTimeout(() => {
            li.className="visual" 
        }, 10);
        input.value=''  
        controls.removeChild(p)
    }
}

function removeTodo(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}