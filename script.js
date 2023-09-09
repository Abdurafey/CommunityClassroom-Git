// const userLeft = false
// const userWatchingCatMeme = false

// function watchTutorialPromise(){
//     return new Promise ((resolve, reject) =>{
//         if(userLeft){
//             reject({
//                 name: 'User Left',
//                 message:':-('
//             });
//         } else if(userWatchingCatMeme){
//             reject({
//                 name: 'User WATCHING CAT Meme',
//                 message:'WebDevSimplified < Cat'
//             })
//         } else{
//             resolve('Thumbs up and subscribe')
//         }
    
//     })
// }

// watchTutorialPromise()
// .then((message) =>{
//     console.log('Success: ' + message)
// })
// .catch ((error) =>{
//     console.log(error.name + ' ' + error.message)
// })


function resolvedIn2Seconds(){
    return new Promise(resolve =>{
        setTimeout(() => {
           resolve('RESOLVED IN 2 SECONDS!') 
        }, 2000);
    });
}

// async function asyncCall(){
//     console.log('1 Calling...');
//     const result = await resolvedIn2Seconds();
//     console.log(result)
//     console.log('3 Completed Successfully!')
// }


async function asyncCall(){
    console.log('Line 1 Calling...');
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await result.json();
    console.log('Line 2 ',data)
    console.log('Line 3 Completed Successfully!')
}
 

asyncCall();
// let index = 0;
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log('hello world')
// }


