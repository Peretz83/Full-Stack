async function loadTable() {

  await axios.get("http://localhost:3002/api/books",{}
  ).then(res =>{
if(res.status === 200)
{
 
const objects = res.data
let trHTML = ""

  for (let object of objects){
  trHTML+= `
  <tr>
  <td>${object.isbn}</td>
  <td><img style="width:100px;" src="${object.image}"></td>
  <td>${object.title}</td>
  <td>${object.description}</td>
  <td>${object.price}</td>
  <td>${object.quantity}</td>
  <td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(${object.isbn})">Edit</button>
        <button type="button" class="btn btn-outline-danger" onclick="userDelete(${object.isbn})">Del</button></td>
  </tr>
  
  `
  }
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
    title: 'Add a book',
    html:
      '<input id="id" type="hidden">' +
      '<input name="title" id="title" class="swal2-input" placeholder="Title">' +
      '<input name="description" id="description" class="swal2-input" placeholder="Description">' +
      '<input name="price" id="price" class="swal2-input" placeholder="Price">' +
      '<input name="quantity" id="quantity" class="swal2-input" placeholder="Quantity">'+
      '<input name="image" id="image" class="swal2-input" placeholder="Image">',
    focusConfirm: false,
    preConfirm: () => {
      userCreate();
    }
  })
}

async function userCreate() {
    
 const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;
  const image = document.getElementById("image").value;
    
  await axios.post('http://localhost:3002/api/books', {"title": title, "description": description, "price": price, "quantity": quantity, "image":image}
  ).then(response => {

    Swal.fire(`${response.data.title} created!`)
    
    loadTable()
     
  }).catch(err => {
    console.log(err.response.status + '\n\r' + err.response.response.data + '\n\r' + err.message);
    alert(err.response.status + '\n\r' + err.response.response.data + '\n\r' + err.message)

  })
}

async function showUserEditBox(isbn) {

  await axios.get("http://localhost:3002/api/books/"+isbn,{}
  ).then(res =>{
const objects = res.data


  for (let object of objects){
    Swal.fire({
        title: 'Edit a book',
        html:
        `<input id="id" type="hidden" >
      <input name="title" id="title" class="swal2-input" value="${object.title}" placeholder="Title">
      <input name="description" id="description" class="swal2-input" value="${object.description}"placeholder="Description"> 
      <input name="price" id="price" class="swal2-input" value="${object.price}"placeholder="Price">
      <input name="quantity" id="quantity" class="swal2-input" value="${object.quantity}" placeholder="Quantity">`,
        
        focusConfirm: false,
        preConfirm: () => {
          userEdit(object.isbn);
        }
      }) 
      

  }
}).catch(err =>{
    console.log(err.res.status + "|",+ err.res.data + '|'+ err.message);
     alert(err.res.status + '\n\r' + err.res.data + '\n\r' + err.message)
  });


//   console.log(isbn);
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("GET", "http://localhost:3002/api/books/"+isbn);
//   xhttp.send();
//   xhttp.onreadystatechange = function() {
//     // if (this.readyState == 4 && this.status == 404) {
//       const objects = JSON.parse(this.responseText)
//       for(let object of objects){
// Swal.fire({
//         title: 'Edit a book',
//         html:
//         `<input id="id" type="hidden" >
//       <input name="title" id="title" class="swal2-input" value="${object.title}" placeholder="Title">
//       <input name="description" id="description" class="swal2-input" value="${object.description}"placeholder="Description"> 
//       <input name="price" id="price" class="swal2-input" value="${object.price}"placeholder="Price">
//       <input name="quantity" id="quantity" class="swal2-input" value="${object.quantity}" placeholder="Quantity">`,
//         //  `<input id="id" type="hidden" value='${objects.isbn}' 
//         //   <input id="fname" class="swal2-input" placeholder="First" value="${objects.title}">
//         //   <input id="lname" class="swal2-input" placeholder="Last" value="${objects.description}">
//         //   <input id="username" class="swal2-input" placeholder="Username" value="${objects.price}">
//         //   <input id="email" class="swal2-input" placeholder="Email" value="${objects.quantity}">`,
//         focusConfirm: false,
//         preConfirm: () => {
//           userEdit(object.isbn);
//         }
//       }) 
//       }
 
//     // }
//   };
}

async function userEdit(isbn) {

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;
    
 await axios.put('http://localhost:3002/api/books/'+isbn, {"title": title, "description": description, "price": price, "quantity": quantity}
  ).then(response => {

    loadTable() 

  }).catch(err => {
    console.log(err.response.status + '\n\r' + err.response.response.data + '\n\r' + err.message);
    alert(err.response.status + '\n\r' + err.response.response.data + '\n\r' + err.message)
  })
}

async function userDelete(isbn) {
 
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
      axios.delete(`http://localhost:3002/api/books/${isbn}`, {}
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

