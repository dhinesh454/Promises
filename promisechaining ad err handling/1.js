const cart =["shoes","pants","kurta"]
createOrder(cart)
.then(function (orderId) {

   console.log(orderId);
   return orderId;
})
.then(function(orderId)
{
 return proceedtoPayment(orderId)    //// now this is 
}) 
.then( function (paymentInfo)
{
    console.log(paymentInfo)
})


/// if rejected shows red colour error 

///so we have to handle the error 
.catch(function(err)
{

//if we put err only showa like erroe except red colour but we want show like message output
    console.log(err.message)
});


// for failure cases we catch the error so uses.catch ()







////for createrorder we have to create promises

function createOrder(cart)
{
    const pr = new Promise((resolve, reject) => {
        //  create order //validate cart 

        //success would create ordrid //
        //failure would throw an error 
        if(!validateCart(cart))
        {
            const err =new Error("Cart is not valid")
            reject(err);
        }
      ///logic for create order success

      const orderId='1234567'
       
      if(orderId)
      {
    //     resolve(orderId);  
    // // we can use set timeout also
    //   }


    //   using arrow function 

      setTimeout (  ()=>
      {
        resolve(orderId)
      },5000)

    }
    //   setTimeout (   function()
    //   {
    //     resolve(orderId)
    //   },5000)


    });
    return pr;

}


function validateCart(cart)
{
    return true;
}

function proceedtoPayment(orderId)
{
    return new Promise((resolve, reject) => {
        resolve('payment succesfull')
    })
}