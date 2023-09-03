
//  import

const express =require("express") 
// const res = require("express/lib/response")
const mongodb =require("mongodb")
const mongodbclient =require("mongodb").MongoClient;

const bodyParser = require("body-parser")
const methodOverride = require("method-override");
const cors = require("cors")

// initialize

const app=express()

app.use(cors())
app.use(bodyParser.json())
const connection="mongodb+srv://admin:Diksha2244@cluster0.gaxetvl.mongodb.net/?retryWrites=true&w=majority"

var collection;
var register;
mongodbclient.connect(connection,(err,succ)=>{
    if(err)throw err;
    console.log("database connected")


    collection=succ.db("Database1").collection("collection");
    register=succ.db("Database1").collection("register");
}) 

app.get("/add",(req,res)=>{
    collection.insertOne({
        Name:'riya',
        RollNo:1
    }).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send(err)
    })

})


app.get("/getdata",(req,res)=>{
    collection.find().toArray().then((succ)=>{
        res.send(succ)
    })
})


//deleteOne
app.get("/del",(req,res)=>{
    var id1 = new mongodb.ObjectId("634906d16f757f19407facd3")
    collection.deleteOne({
            _id:id1
    }).then((succ)=>{
            res.send("data deleted")
    })
})

app.get("/updatedata",(req,res)=>{
    var id1 = new mongodb.ObjectId("634bef15a2ea1a1a0040a2ed");
    collection.updateOne({
            _id:id1
    },{
            $set:{
                    Name:'RIYA 123'
            }
    }).then((succ)=>{
            res.send("data updated")
    })
})


app.post("/addform",(req,res)=>{
    console.log(req.body)
    collection.insertOne(req.body).then((succ)=>{
            res.send("data added")
    })
})

app.get("/getdata1",(req,res)=>{
    collection.find().toArray().then((succ)=>{
            res.send(succ)
    })
})



app.get("/",(req,res)=>{
    res.send("dskdhsdjhskjdfhsjk")
})

app.get("/abc",(req,res)=>{
    res.send("page 1")
})

app.get("/xyz",(req,res)=>{
    res.send("page 2")
})

app.post("/deldata",(req,res)=>{
    console.log(req.body.ID)
    var id1 = new mongodb.ObjectId(req.body.ID)
    collection.deleteOne({
        _id:id1
    }).then((succ)=>{
        res.send("deleted")
    })

})

var id1 ;
app.post("/getonedata",(req,res)=>{
        id1 = new mongodb.ObjectId(req.body.ID)
        collection.findOne({
                _id:id1
        }).then((succ)=>{
                res.send(succ)
        })
})

app.post("/editdata",(req,res)=>{
        collection.updateOne({
                _id:id1
        },{
                $set:{
                        Name: req.body.Nm,
                        Email: req.body.Em,
                        Password: req.body.Ps,
                        Contact:req.body.Ct
                }
        }).then((succ)=>{
                res.send("data updated")
        })
})



app.post("/register",(req,res)=>{
    console.log(req.body)
    register.findOne({
            UserName:req.body.UserName,
    }).then((succ)=>{
            res.send(succ)
    })
})

app.post("/adduser",(req,res)=>{
    register.insertOne(req.body).then((succ)=>{
            res.send(succ)
    })
})

// creating port
app.listen(1000,(req,res)=>{
    console.log("server start")
})