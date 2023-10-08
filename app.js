const express = require('express');
const mongoose = require('mongoose');
const url  = 'mongodb://localhost:2701'
const app = express();
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...');
})
const alienRouter = require('./routers/aliens')
app.use('/aliens', alienRouter)

app.listen(9000, () => {
    console.log('Server started');
}
)
