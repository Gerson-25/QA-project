
const petsContainer = document.querySelector('.pets-container')

async function deletePet(id){
    let reponse = await fetch(`http://localhost:8083/api/pets/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type" : "application/json"
        }
    })
}

async function getPets(){
    let response = await fetch("http://localhost:8083/api/pets/getAll")
    let data = await response.json()
    return data;
}

getPets()
.then( data => {
    data.forEach(item => {
        fillPetList(item)
        const deleteBtn = document.querySelectorAll('.delete')
       deleteBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            deletePet(e.target.classList[0])
           
            console.log(e.target.classList[0])
         })
       })
    })
})



function fillPetList(data){

    var imgUrl = ''
    
     switch(data.type){
        case "Perro":
            imgUrl = 'img/039-dog.svg';
            break;
        case "Gato":
            imgUrl = 'img/050-cat.svg';
            break;
        case "Loro": 
            imgUrl = 'img/028-parrot.svg';
            break;
        case "Tortuga":
            imgUrl = 'img/006-turtle.svg';
            break;
        default:
            break;
    }

    console.log(imgUrl)

    petsContainer.innerHTML += `<li class="collection-item col s3" style="padding:10px !important;">   
    <img src="${imgUrl}" style="height: 100px;"/>
    <h5 class="">${data.name}</h5>
    <div><b>Edad: </b>${data.age} año/s</div>
    <div style="border: green solid 1px; padding: 10px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
    <button class=" ${data.id} btn red red-lighten-2 delete" style="background-color: white !important; color: red; font-size: 10px !important; border: red 1px solid;">ELIMINAR</button>
    </li>`
}