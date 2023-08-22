// Refactoring the same code using express

const express =require('express')
const app=express()
const {readFile}=require('fs/promises')
const port=3000

app.get('/',async (req,res)=>{
    const data=await readFile('index.html','utf-8')
    res.send(data)
})

app.get('/',async (req,res)=>{
    const data=await readFile('index.html','utf-8')
    res.send(data)
})

app.get('/about',async (req,res)=>{
    const data=await readFile('about.html','utf-8')
    res.send(data)
})

app.get('/contact-me',async (req,res)=>{
    const data=await readFile('contact-me.html','utf-8')
    res.send(data)
})

app.use(async (req,res)=>{
    res.status(404).send(await readFile('404.html','utf-8'))
})

app.listen(port,()=>{
    console.log(`Express app listening on port ${port}!`)
})