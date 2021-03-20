const express = require('express');
const app = express();
const port = process.env.PORT || 4000


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const fs = require('fs');

let userJson = fs.readFileSync('./mockDataJson/users.json');
let usersDB = JSON.parse(userJson);



app.get('/getUsers', (req, res) => {
    console.log(usersDB)
    res.send(usersDB)
})

app.post('/addUser', (req, res) => {
    console.log(req.body.user)
    if (req.body.user && Object.keys(req.body.user).length !== 0) {
        let findEmail = usersDB.find(user => user.email === req.body.user.email)
        let findName = usersDB.find(user => user.userName === req.body.user.userName)
        console.log(findEmail, findName, 51)
        if (findEmail && findName) {
            res.send({ message: 'This email and name has already been registered' })
        } else if (findEmail) {
            res.send({ message: 'This email has already been registered' })
        } else if (findName) {
            res.send({ message: 'This name has already been registered' })

        } else {
            usersDB.push(req.body.user)
            let data = JSON.stringify(usersDB, null, 2);
            fs.writeFileSync('./mockDataJson/users.json', data, (err) => {
                console.log(err)
            });
            res.send({ message: 'user added' })
        }
    } else {
        res.send({ error: 'empty req' })
    }


})




app.listen(port, function () {
    console.log('server port', port)
})