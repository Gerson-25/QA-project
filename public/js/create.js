const petName = document.querySelector('#name');
const type = document.querySelector('#type');
const age = document.querySelector('#age')
const notification = document.querySelector('.notification-alert')
const closeAlert = document.querySelector('.close-alert')

const saveButton = document.querySelector('.save-button')

const url = "http://localhost:8083/api/pets/addNewPet"

document.addEventListener('DOMContentLoaded', e =>{
    var elems = document.querySelectorAll('select')
    var instances = M.FormSelect.init(elems)
})

const xhr = new XMLHttpRequest()

closeAlert.addEventListener('click', e => {
    e.preventDefault()
    notification.style.display = 'none'
})

xhr.open("post", "http://localhost:8083/api/pets/addNewPet")

xhr.setRequestHeader("Content-Type", "application/json")
xhr.onreadystatechange = function e() {
    if(this.readyState === XMLHttpRequest.DONE && this.status == 200){
        notification.style.display = 'block'
    }
}

saveButton.addEventListener('click', e => {
    e.preventDefault()
    /*const postBody = {
        name: petName.value,
        age: parseInt(age.value),
        type: type.value
    }

    console.log(postBody)
    
    const params = {
        headers: {
            "content-type" : "application/json"
        },
        body: postBody,
        method: "POST"
    }
    
    fetch(url, params)
    .then(data => {
        return data.json()
    })
    .then(res =>{
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    })*/

    const body = {
        "name": petName.value,
        "age": parseInt(age.value),
        "type": type.value
    }

    xhr.send(JSON.stringify(body))
})

