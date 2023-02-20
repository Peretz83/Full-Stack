const observable = new rxjs.observable(myStream =>{
  myStream.next(1)
  myStream.next(2)
  myStream.next('hhh')
})

// observable.subscribe(x => console.log(x))

observable.subscribe({

})