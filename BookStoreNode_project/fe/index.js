async function loadTable() {
  await axios.get('http://localhost:3007/api/books', {}
  ).then(res => {

    let objects = res.data
    if (res.status === 200) { 
      var trHTML = ''
      for (let object of objects) {
        trHTML += `
          <tr> 
            <td>${object.isbn}</td>
            <td>${object.title}</td>
            <td>${object.description}</td>
            <td>${object.price ? object.price : ""}</td>
            <td>${object.quantity ? object.quantity : ""}</td>
            <td><button type="button" class="btn btn-outline-secondary" onclick="showBookEditBox(${object.isbn})">Edit</button>
            <button type="button" class="btn btn-outline-danger" onclick="bookDelete(${object.isbn})">Del</button></td>
          </tr>`
      }
      document.getElementById("mytable").innerHTML = trHTML
    } 
  }).catch(err => {
    alert(err.response.status + "\n\r" + err.response.data + "\n\r" + err.message)
  })
}

function showBookCreateBox() {
  Swal.fire({
    title: 'Create book',
    html:
      '<input id="isbn" class="swal2-input" placeholder="ISBN">' +
      '<input id="title" class="swal2-input" placeholder="Title">' +
      '<input id="description" class="swal2-input" placeholder="Description">' +
      '<input id="price" class="swal2-input" placeholder="Price">' +
      '<input id="quantity" class="swal2-input" placeholder="Quantity">',
    focusConfirm: false,
    preConfirm: () => {
      bookCreate();
    }
  })
}

async function bookCreate() {
  
    let isbn = document.getElementById("isbn").value
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let price = document.getElementById("price").value
    let quantity = document.getElementById("quantity").value
   
  
  await axios.post(`http://localhost:3007/api/books`, {"isbn":isbn, "title":title, "description":description, "price":price, "quantity":quantity}
  ).then(res => {
   
    if (res.status === 201) {
      Swal.fire(`Successfully created new book '${res.data.title}'.`)
      loadTable()
    } 
  }).catch(err => {
    alert(err.response.status + "\n\r" + err.response.data + "\n\r" + err.message)
  });
}

async function showBookEditBox(isbn) {
  await axios.get(`http://localhost:3007/api/books/${isbn}`, {}
  ).then(res => {
      if (res.status === 200) {
        const book = res.data
        Swal.fire({
          title: 'Edit Book',
          html:
            `<input id="isbn" class="swal2-input" placeholder="ISBN" value="${book.isbn}" disabled>
            <input id="title" class="swal2-input" placeholder="Title" value="${book.title}">
            <input id="description" class="swal2-input" placeholder="Description" value="${book.description}">
            <input id="price" class="swal2-input" placeholder="Price" value="${book.price ? book.price : ""}">
            <input id="quantity" class="swal2-input" placeholder="Quantity" value="${book.quantity ? book.quantity : ""}">`,
          focusConfirm: false,
          preConfirm: () => { // 3. Perform the update, and call the server (call the PUT API)
            bookEdit()
          }
        })
      } 
  }).catch(err => {
    alert(err.response.status + "\n\r" + err.response.data + "\n\r" + err.message)
  })
}

async function bookEdit() {
  const book = {
    isbn: document.getElementById("isbn").value,
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    price: document.getElementById("price").value,
    quantity: document.getElementById("quantity").value
  }
  await axios.put(`http://localhost:3007/api/books/${book.isbn}`, book
  ).then(res => {
      if (res.status === 200) {
        Swal.fire(`Successfully updated book.`)
        loadTable()
      } 
  }).catch(err => {
      alert(err.response.status + "\n\r" + err.response.data + "\n\r" + err.message)
  })
}

async function bookDelete(isbn) {
  await axios.delete(`http://localhost:3007/api/books/${isbn}`, {}
  ).then(res => {
      if (res.status === 204) {
        Swal.fire(`Successfully deleted book.`)
        loadTable();
      } 
  }).catch(err => {
      alert(err.response.status + "\n\r" + err.response.data + "\n\r" + err.message)
  })
}