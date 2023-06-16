var createError = require('http-errors');
const express = require('express');
const path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

require("dotenv").config();

const indexRouter = require("./routes/routes");

const port = 2121;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", indexRouter);
const mongoose = require('mongoose');
const mongo_pass = process.env.MONGO_PASS;

async function main() {
  await mongoose.connect(`mongodb+srv://fabiocpb:${mongo_pass}@cluster0.g8pht.mongodb.net/predmaq?retryWrites=true&w=majority`);
}

main().catch(err => console.log(err));

app.use(function(req, res, next) {
    next(createError(404));
});
  
 
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.render('error');
  });

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
})