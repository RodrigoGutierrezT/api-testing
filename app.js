const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4001;
app.use(express.static('public'));

// middware for parsing request bodies:
app.use(bodyParser.json());


const usersRouter = require('./routes/users.js');
app.use('/users',usersRouter);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})

module.exports = app;