var express=require('express')
const cors = require('cors');
var app=express()
var mongodb=require('mongodb')
const mongoClient=mongodb.MongoClient

 app.use(cors()); 
//1. establish the connection
let dburl='mongodb+srv://Sathish:sathish3210@mongofristdb.jvmrx1b.mongodb.net/'
app.use(express.json())
app.get('/', async function(req,res)

{
    const client= await mongoClient.connect(dburl)
    try
    {
       let db= await client.db('amity')
       let user= await db.collection('userDetails').find().toArray()
       res.json({
        message:'Displaying all records',
        user
       })
    }
       catch(error)
       {
        console.log(error);
       }
     
   finally{
    client.close()


   }

}) 

app.post('/register', async function(req,res){
console.log('Reqe Body',req.body);
    const client= await mongoClient.connect(dburl)
    try
    {
        const client=await mongoClient.connect(dburl);
       let db= await client.db('Sathish')
       let user= await db.collection('UserDetails').insertOne(req.body)
       res.json({
        message:'Record Inserted'
        
       })
    }
       catch(error)
       {
        console.log(error);
       }
    
   finally{
    client.close()

s
   }

})
app.get('/fetch/:num', async function(req,res)

{
    const client= await mongoClient.connect(dburl)
    const id =parseInt(req.params.num)
    try
    {
       let db= await client.db('amity')
       let user= await db.collection('userDetails').findOne({id:id})
       if(user)
       {
       res.json({
        message:'Record Found',
        user
        
       })
    }
    else{
        res.json({
            message:'record not found'
        })
    }
    }
       catch(error)
       {
        console.log(error);
       }
    
   finally{
    client.close()


   }

}) 
app.put('/update/:num', async function(req,res)

{
    const client= await mongoClient.connect(dburl)
    // const id =parseInt(req.params.num)
    try
    {
       let db= await client.db('amity')
       let user= await db.collection('userDetails').findOne({name:req.params.num})
       if(user)
       {

        let data= await db.collection('userDetails').updateOne({name:req.params.num},{$set:{name:req.body.name}})
       res.json({
        message:'Record updated'
        
        
       })
    }
    else{
        res.json({
            message:'record not found'
        })
    }
    }
       catch(error)
       {
        console.log(error);
       }
    
   finally{
    client.close()


   }

}) 
app.delete('/delete/:num', async function(req,res)

{
    const client= await mongoClient.connect(dburl)
    // const id =parseInt(req.params.num)
    try
    {
       let db= await client.db('amity')
       let user= await db.collection('userDetails').findOne({name:req.params.num})
       if(user)
       {

        let data= await db.collection('userDetails').deleteOne({name:req.params.num})
       res.json({
        message:'Record deleted'
        
        
       })
    }
    else{
        res.json({
            message:'record not found'
        })
    }
    }
       catch(error)
       {
        console.log(error);
       }
    
   finally{
    client.close()


   }

}) 


app.listen(8000, ()=>console.log('Server is running in the port 8000'))