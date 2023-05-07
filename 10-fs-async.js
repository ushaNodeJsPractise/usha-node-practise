const{readFile, writeFile} = require('fs');
console.log("start");
readFile('./content/first.txt','utf8' ,(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
   // console.log(first);
    readFile('./content/second.txt', 'utf8',(err, result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',`hello this is the async result file: ${first},${second}`,(err,result)=>{
            if(err){console.log(err);
            return;}
            console.log(result);
        });
        readFile('./content/result-async.js', 'utf8',(err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            const fourth = result;
            console.log(fourth);
        })
    })
    console.log("end of first task");
})

console.log("End of last task");
