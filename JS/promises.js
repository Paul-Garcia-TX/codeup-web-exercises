

async function getUserData() {
    const response = await fetch('https://api.github.com/users/Paul-Garcia-TX', {
        headers: {
            'Authorization': `Bearer ${gitHub}`
        }
    });
    const userData = await response.json();

    console.log("Your username is:", userData.login);
    return userData;
}

getUserData()
    .then(data => {
        return fetch(`https://api.github.com/repos/${data.login}/codeup-web-exercises/commits`, {
            headers: {
                'Authorization': `Bearer ${gitHub}`
            }
        });
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const lastCommit = data[0].commit.author.date;
        console.log('Last commit pushed at: ' + lastCommit);
    })
    .catch(error => console.error(error));



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
