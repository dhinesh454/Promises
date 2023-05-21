
const Posts=[{title:'Post1'}];



function getpost(){
    Posts.forEach((item)=>{
        console.log(item.title)
    })
}






 function updateLastUserActivity() {
   return new Promise( (resolve,reject)=>{
    setTimeout( ()=>{
    
           resolve(new Date());
    })
   

    },1000)
}

function create2Post()
{
    return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
       Posts.push({title:'Post2'})
          resolve("Post2");
      },2000)



   })
}

function create3rdPost()
{
   return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
       Posts.push({title:'Post3'})
          resolve("Post3");
      },1000)



   })
}


function deletePost() 
{
   return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      
      
      if(Posts.length>0)
      {

     let pop= Posts.pop()
          resolve(pop.title);
      }
         reject("ERROR:Post is empty")


      },2000)



   })

}

async function totalPost()
{
   
     let post2=await create2Post();



     let post3=await create3rdPost();


    let del =await deletePost();

    // let post=await getpost();//we cant put await is not promises 

    Promise.all([post2,post3,del]).then((s)=>{
       s.forEach((post)=>{
        console.log(post)
       })
       
    });
  


     
}


totalPost()






// Promise.all([create2Post(),deletePost(),create3rdPost(),updateLastUserActivity(),deletePost(),updateLastUserActivity()]).then((data)=>{
//   console.log(data)
//   getpost()//// if we want to sprint the post 
// .catch(err => console.log(err))
// })




//// if rejected in promises using catch in promises.all 
// Promise.all([create2Post(),deletePost(),create3rdPost(),updateLastUserActivity(),deletePost(),deletePost(),deletePost()]).then((data)=>{
//     console.log(data)
//     getpost()
//   })
//   .catch(err => console.log(err))
  



// create2Post()
// .then(()=>{
//     create3rdPost()
//     .then(()=>{
//         deletePost()
//         .then(()=>{
//             getpost()
//         })
//     })
// })
