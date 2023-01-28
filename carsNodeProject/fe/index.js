async function loadTable(){
  await axios.get("http://localhost:3007/api/cars",{}
  ).then(res =>{
    if(res.status ===200){
      const objects = res.data
      let trHTML = ""

      objects.forEach((car)=>{
trHTML+=`
<tr>
  <td>${car.car_id}</td>
 
  <td>${car.make}</td>
  <td>${car.model}</td>
  <td>${car.year}</td>
  <td>${car.color}</td>
  <td>${car.acceleration}</td>
  <td>${car.price}</td>
  <td>${car.in_stock?car.in_stock:0}</td>
  <td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(${car.car_id})">Edit</button>
        <button type="button" class="btn btn-outline-danger" onclick="userDelete(${car.car_id})">Del</button>
        <button type="button" class="btn btn-outline-danger" onclick="userBuy(${car.car_id})">Buy</button>
        
        </td>
  </tr>

`

      })
       document.getElementById("mytable").innerHTML = trHTML;
}

  }).catch(err =>{
    console.log(err.res.status + "|",+ err.res.data + '|'+ err.message);
     alert(err.res.status + '\n\r' + err.res.data + '\n\r' + err.message)
  }
  
  );
}

function showUserCreateBox() {
  Swal.fire({
    title: 'Add a Car',
    html:
      '<input id="id" type="hidden">' +
      '<input name="make" id="make" class="swal2-input" placeholder="Make">' +
      '<input name="model" id="model" class="swal2-input" placeholder="Model">' +
      '<input name="year" id="year" class="swal2-input" placeholder="Year">' +
      '<input name="color" id="color" class="swal2-input" placeholder="Color">'+
      '<input name="acceleration" id="acceleration" class="swal2-input" placeholder="Acceleration">'+
      '<input name="price" id="price" class="swal2-input" placeholder="Price">',
    focusConfirm: false,
    preConfirm: () => {
      userCreate();
    }
  })
}

async function userCreate() {
    
 const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const color = document.getElementById("color").value;
  const acceleration = document.getElementById("acceleration").value;
  const price = document.getElementById("price").value;
    
  await axios.post('http://localhost:3007/api/cars', {"make": make, "model": model, "year": year, "color": color, "acceleration":acceleration, "price":price }
  ).then(response => {

    Swal.fire(` was created!`)
    
    loadTable()
     
  }).catch(err => {
    console.log(err.response.status + '\n\r' + err.response.response.data + '\n\r' + err.message);
    alert(err.response.status + '\n\r' + err.response.response.data + '\n\r' + err.message)

  })
}

async function userDelete(car_id) {
 
    // if(res.status === 204){
      Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
      axios.delete(`http://localhost:3007/api/cars/${car_id}`, {}
  ).then(res=>{
        loadTable()
    }).catch(err => {
    console.log(err.res.status + '\n\r' + err.res.res.data + '\n\r' + err.message);
    alert(err.res.status + '\n\r' + err.res.res.data + '\n\r' + err.message)

  })
    Swal.fire(
      'Deleted!',
      'Your book has been deleted.',
      'success'
    )
    
  }
  
})

  
    // }
  
}


async function showUserEditBox(car_id) {

  await axios.get("http://localhost:3007/api/cars/"+car_id,{}
  ).then(res =>{
const objects = res.data
 Swal.fire({
        title: 'Edit a car',
        html:`
      <input car_id="car_id" type="hidden"> 
      <input name="make" id="make" class="swal2-input" value="${objects.make}" placeholder="Make">
      <input name="model" id="model" class="swal2-input" value="${objects.model}" placeholder="Model">
      <input name="year" id="year" class="swal2-input" value="${objects.year}" placeholder="Year">
      <input name="color" id="color" class="swal2-input" value="${objects.color}" placeholder="Color">
      <input name="acceleration" id="acceleration" class="swal2-input" value="${objects.acceleration}" placeholder="Acceleration">
      <input name="price" id="price" class="swal2-input" value="${objects.price}" placeholder="Price">`,
        
        focusConfirm: false,
        preConfirm: () => {
          userEdit(car_id);
        }
      }) 

      
      
  async function userEdit(car_id) {

  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const color = document.getElementById("color").value;
  const acceleration = document.getElementById("acceleration").value;
  const price = document.getElementById("price").value;
  
    
 await axios.put('http://localhost:3007/api/cars/'+car_id, {"make": make, "model": model, "year": year, "color": color, "acceleration": acceleration , "price": price}
  ).then(response => {

    loadTable() 

  }).catch(err => {
    console.log(err.response.status + '\n\r' + err.response.response.data + '\n\r' + err.message);
    alert(err.response.status + '\n\r' + err.response.response.data + '\n\r' + err.message)
  })
}
      

  
}).catch(err =>{
    console.log(err.res.status + "|",+ err.res.data + '|'+ err.message);
     alert(err.res.status + '\n\r' + err.res.data + '\n\r' + err.message)
  });
}

async function userBuy(car_id){


    await axios.put(`http://localhost:3007/api/cars/${car_id}/buy`,{}
  ).then(res =>{
loadTable()
if(res.data.in_stock === 0)
Swal.fire("out of stock")





}).catch(err =>{

  
    console.log(err.res.status + "|",+ err.res.data + '|'+ err.message);
     alert(err.res.status + '\n\r' + err.res.data + '\n\r' + err.message)

  });

}