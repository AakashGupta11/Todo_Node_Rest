const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
// const todoRoutes = express.Router();
const todoRoute = require('./todo.route');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true })
.then(() => console.log('Connected to mongoDB database...'))
.catch((err) => console.log('Could not connect to database ', err));

app.use('/todos', todoRoute);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
