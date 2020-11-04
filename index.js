const express = require('express')
const app = express()
const bodyParser = require('body-parser')
urlEncodedParser = bodyParser.urlencoded({extended:true})
app.use(bodyParser.json())
app.set("view engine","ejs")

let todoList = []

app.get('/',(req,res)=>{
    res.render('index',{data: todoList})
});

app.post('/', urlEncodedParser, (req,res)=>{
    todoList.push(req.body)
    res.redirect('/')
});

app.listen(3000)