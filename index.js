const http=require('http') 
const fs=require('fs/promises')

http.createServer(async function(req,res){
    const path=req.url
    console.log(path)
    // prints the pathname Eg:/,/about,/contact-me,etc
    try{
        if (path==='/') 
            filename='index.html'
        else if(path==='/about' | path==='/contact-me')
            // converts '/about'-> about.html
            filename=`${path}.html`.slice(1)
        else
            filename='404.html'
        console.log(filename)
        //prints index.html,about.html,contact-me.html
        const data=await fs.readFile(filename,'utf-8')
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data)
    }catch(error){
        console.log(error)
        res.writeHead(404,{'Content-Type':'text/html'})
    }
}).listen(8080)


