const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let lang = users.filter(function(users){
    return users.languages.length >= 3;
}).map(function(user){
    return user.name;
});

console.log("These users: " + lang.join(', ') + " know more than 3 languages.");

let mailing = users.map(function(user){
    let nameParts = user.name.split(' ');

    return {name: nameParts[0] + ' '+ nameParts[1], email: user.email};
});

console.log(mailing);

let totalExperience = users.reduce(function(total,yearsOfExperience){

   return total + yearsOfExperience;
});

const totalStr = users.map( user => totalExperience.toString());

console.log("The total years of experience is: " + totalStr);

const average = totalExperience / users.length;

const averageStr = average.toString();
console.log("The average years of experience is: "+ averageStr);