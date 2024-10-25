const express = require('express');
const app = express();
const port = 3000;

// Listens for a get Method and / = URL path. Once both are satisified,
// executes arrow function. 
app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Listening on port 3000
// Always has to be at the bottom
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});