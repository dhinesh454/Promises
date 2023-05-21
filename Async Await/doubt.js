console.log('person1:shows Ticket');
console.log('person2:shows Ticket');

async function preMovie()      
{
    const promiseWifebringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve('Ticket');    // reject('Sad face')
    },3000)
});

let getPopcorn = new Promise((resolve,reject)=>{
    resolve(`popcorn`)

});



let getButter= new Promise((resolve,reject)=>{
    resolve (`butter`);
});

let getCoke=new Promise((resolve,reject)=>{
    resolve("CokaCola")
});


const getCandy=new Promise((resolve,reject)=>{
    resolve('Candy')
});
 
let ticket =await promiseWifebringingTicks;
// let ticket 
// try {
//     ticket=await promiseWifebringingTicks;
// } catch (error) {
//  ticket='sad face'   
// }

// const allItems= await Promise.all([getPopcorn,getCandy,getCoke]).then((data)=>{
//     console.log(data)
// })

let [popcorn, candy,coke]=await Promise.all([getPopcorn,getCandy,getCoke])


console.log(`${popcorn},${candy},${coke}`)




 




return ticket; 

}

preMovie().then((m)=>console.log(`person 3:shows ${m}`))   ///async is a default promise 
console.log('person4:shows Ticket');
console.log('person5:shows Ticket');
