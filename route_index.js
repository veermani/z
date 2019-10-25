var db=require('./db_index');
var express=require('express');

var router=express.Router();





router.get('/select',async (req,res,next)=>{
try{
var result=await db.select();
res.send(result);


}
catch(e){
console.log(e.message);

}
})


router.post('/insert',async (req,res,next)=>{
   
    
    try{
    var result=await db.insert(req.body.id,req.body.name);
    res.send(result);
    
    
    }
    catch(e){
    console.log(e.message);
    
    }
    })


router.put('/update/',async (req,res,next)=>{

    
    try{
    var result=await db.update(req.body.id,req.body.name);
    res.send(result);
    
    
    }
    catch(e){
    console.log(e.message);
    
    }
    })

    router.delete('/delete/',async (req,res,next)=>{
        var id=req.body.id;
        
        
        try{
        var result=await db.delete(id);
        res.send(result);
        
        
        }
        catch(e){
        console.log(e.message);
        
        }
        })

module.exports=router;
