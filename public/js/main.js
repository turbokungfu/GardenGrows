//takes all the items from ejs and provides variable names.
const deleteBtn = document.querySelectorAll('.fa-trash') //variable to remove button
const item = document.querySelectorAll('.item span')//variable for items
const itemCompleted = document.querySelectorAll('.item span.completed')//variable for completed items

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)//puts event listener on deletebutton
})

Array.from(item).forEach((element)=>{
    element.addEventListener('click', markComplete)//add eventlistener for mark complete
})

Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markUnComplete)//allows you to add event listener to mark uncomplete
})

async function deleteItem(){
    //this target specific item isn index.ejs. Looks at parent, then child and puts it in a variable.
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        //pulls response from server and sends back method, content type 
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()//reloads webpage after data received.

    }catch(err){
        console.log(err)//catching and reporting errors.
    }
}

async function markComplete(){ 
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUnComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markUnComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}