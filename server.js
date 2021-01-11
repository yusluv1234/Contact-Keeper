const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
// connectDB();

app.get('/', (req, res) => {
    res.send('hello world');
    
});

app.put('/', (req, res) => {
    res.send('hello world')
});

// Define Routes 
app.use('api/users', require('./routes/users'));
app.use('api/auth', require('./routes/auth'));
app.use('api/contact', require('./routes/contact'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));