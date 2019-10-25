var mysql=require('mysql');
var con=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'api'
})

var abc={};
abc.select=()=>{

    return new Promise((resolve,reject)=>{

con.query(`select * from task`,(err,rows,fields)=>{
if(!err){
    resolve(rows);
}
else{
    reject(err);
}

})

    })
}

abc.insert=(id,name)=>{


    return new Promise((resolve,reject)=>{

con.query(`insert into task (id,name)values(?,?)`,[id,name],(err,rows,fields)=>{
if(!err){
    resolve(rows);
}
else{
    reject(err);
}

})

    })
}

abc.update=(id,name)=>{

    return new Promise((resolve,reject)=>{
       console.log(id);
       

con.query(`update task  set name=? where id=?`,[name,id],(err,rows,fields)=>{
if(!err){
    resolve(rows);
}
else{
    reject(err);
}

})

    })
}



abc.delete=(id)=>{

    console.log(id);
    
        return new Promise((resolve,reject)=>{
           console.log(id);
           
    
    con.query(`delete from task where id=?`,[id],(err,rows,fields)=>{
    if(!err){
        resolve(rows);
    }
    else{
        reject(err);
    }
    
    })
    
        })
    }
module.exports=abc;
