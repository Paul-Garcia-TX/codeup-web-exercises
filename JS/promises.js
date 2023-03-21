

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

function wait(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
wait(1000).then(() => console.log('You will see this after 1 second'));
wait(3000).then(() => console.log('You will see this after 3 seconds'));
