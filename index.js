const express = require('express');
const app = express();

const PORT = 8000;

//make the basic / route
app.get('/', (req, res) => {
    //send user to /app route
    res.redirect('/app');
}
);

app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/dev/app.html');
    }
);


//if the user goes to a route that doesn't exist, send them to the 404 page
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dev/404.html');
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))