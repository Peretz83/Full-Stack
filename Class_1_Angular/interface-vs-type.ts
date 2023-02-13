// interface Animal {
//   name: string
// }

// interface Bear extends Animal{
//   honey: boolean
// }

// const bear: Bear = {
//   name: 'bear 1',
//   honey: true
// }



type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

 export interface User1{
  id:string,
  name: string,
  age:number,
  occupation:string,
  eyeColor: string
}
interface User2{
  id:number,
  name: string,
  age:number,
  occupation:string,
  eyeColor: string
}

type Users = User1 | User2

