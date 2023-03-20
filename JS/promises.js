//
// const octokit = new Octokit({
//     auth: gitHubToken
// })




async function getUserData() {
    const response = await fetch('https://api.github.com/users/Paul-Garcia-TX');
    const userData = await response.json();
    console.log(userData);
    console.log("Your username is:", userData.login);
}

// async function getActivity() {
//     const response = await octokit.request('GET /users/{username}/events/public', {
//         username: 'Paul-Garcia-TX',
//         headers: {
//             'X-Github-Api-Version': '2022-11-28'
//         }
//     });
//     console.log(response.data);
// }
// fetch ('https://api.github.com/users/Paul-Garcia-TX/events/public')



getUserData();
// getActivity();


//
// const myPromise = new Promise((resolve,reject)=>{
//     let randomNum = Math.random();
//     if (randomNum > 0.5){
//         console.log("Random num: " , randomNum);
//         resolve();
//     }
//     else {
//         console.log("Random num: ", randomNum);
//         reject();
//     }
// });
// myPromise.then(() => console.log('whoo! resolved!'));
// myPromise.catch(()=> console.log('rejected'));
