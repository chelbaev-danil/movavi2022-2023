const express = require("express")
const cors = require("cors")

const BlogRouter = require("./routes/blog-router")
const AboutRouter = require("./routes/about-route")
const TestRouter = require("./routes/test-router")
const ApiRouter = require("./routes/api")


const HOST = "localhost"
const PORT = 3000

const app = express()

app.set("view engine", "hbs");
app.set('views', __dirname + '/view');

app.use(cors(
    {
        origin: "*"
    }
))
app.use(express.static(__dirname + "/static")) // use styles to index.html and another ones

// app.get('/', (req, res) => {
//     res.send("hellooo menchik")
// })
// app.get('/about', (req, res) => {
//     res.send("im dan from nsk")
// })
// app.get('/contact', (req, res) => {
//     res.send("i dont like being ignored so you can easy write me a massage")
// })
// app.get('/gallery', (req, res) => {
//     res.send("there will be a photo")
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.use('/blog', BlogRouter)
app.use('/about', AboutRouter)
app.use('/test', TestRouter)
app.use('/api', ApiRouter)


// app.get('/test/:id', (req, res) =>{
//     var id = req.params.id;
//     res.send(`Вы перешли на подстраницу ${id}`)
// })

app.get('/square/:id', (req, res) =>{
    var id = req.params.id;
    if (Number(id)){
        res.send(`Result ${id**2}`)
    }else{
        res.send(`Result ${id.repeat(2)}`)
    }
    
})

// app.use((req, res, next) => {
//     var pages = ['/about'];
//     var link = req.path;
//     if(pages.includes(link)){
//         res.sendFile(__dirname + `/public${link}.html`)
//     }else{
//         next()
//     }
// })

app.use((req, res, next) => {
    res.status(404).send("the page doesn't exist")
} )

app.listen(PORT, HOST, (err)=> {
    if (err){
        console.log(err);
    }else {
        console.log(`Server http://${HOST}:${PORT}`);
    }
})