let root = document.getElementById("root")


let priceArr = [
  {
    icon:"https://img.freepik.com/premium-vector/modern-badge-telegram-icon_578229-156.jpg?w=2000",
    title:"Basic",
    price:25,
    pOne:"10 GB Space",
    pTwo:"3 Domain Names",
    pThree:"10 Email Addresses",
    pFour:"Live",
    liveSupport:"Live Support"
  },
  {
    icon:"https://static.vecteezy.com/system/resources/thumbnails/004/879/681/small/icon-of-an-airplane-taking-off-free-vector.jpg",
    title:"Standard",
    price:55,
    pOne:"10 GB Space",
    pTwo:"3 Domain Names",
    pThree:"10 Email Addresses",
    liveSupport:"Live Support"
  },
  {
    icon:"bi bi-rocket-takeoff-fill",
    title:"Premium",
    price:25,
    pOne:"10 GB Space",
    pTwo:"3 Domain Names",
    pThree:"10 Email Addresses",
    liveSupport:"Live Support"
  }

] 


priceArr.forEach((item)=>{

 root.innerHTML += `
 <div class="container" id="card">
<img id="img" style="width:40px;" src="${item.icon}" alt="">

  <h2>${item.title}</h2>
  <p>${item.price}</p>
  <div>
  <p>${item.pOne}</p>
  </div>
  <div>
    <p>${item.pTwo}</p>
  </div>
  <div>
    <p>${item.pThree}</p>
  </div>
  <div>
    <p>${item.pFour}</p>
  </div>
 
  <button>Click here</button>

</div>

 
 `
 


})





