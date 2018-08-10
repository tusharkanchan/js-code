function funOne(){
    console.log(`First function`)
}
 let varOne = funOne
 console.log(`${varOne}`)

 let varTwo = function (){ }


 let varThree = () => console.log(`this is lambda`)
 let varFour =(nm1,nm2) => nm1+nm2
 console.log(`Addition is${varFour(23,32)}`)

 function funTwo()
 {
     console.log(`returning function`)
     return function(){
         console.log(`returned function`)
     }
 }


 let varFv = funTwo()
 console.log(`${varFv}`)

 varFv()



 funTwo()()


 function funThree(cb){
     console.log(`fun three called`)
     cb()
 }


 funThree(funOne)
 funThree( function(){

    console.log(`anonymus function passed`)
 })

 funThree(() => console.log(`passed lambda`))

 console.log(`before timeout`)
 setTimeout(
 () => console.log(`function invoked in future`),
 1500)
console.log(`after timeout`)
