

// const  cart =["shoes","pants","Kurta"];

//      createOrder( cart,function (orderId) {
//       proceedtoPayment(orderId)
//      });   



   //   here the problem in call back issue is "INVERSION OF CONTROL" we give create oder function to full powerpower..but wheteher is cll back or works as per code



   // How we can handle this using promises



   // const promises=createOrder(cart);


   // promises.then(function (orderId) {
   //    proceedtoPayment(orderId)
   //   });

const GITHUB_API="https://api.github.com/dhinesh454/Gittutorial";

const user=fetch(GITHUB_API);

console.log(user);




///we can control over the function..  
////using call back function attach by promises 

user.then(function(data)
{
   console.log(data)
})




// promise is immutable bz wherever it is fullfilled or we can get the value data can be pass it  