 // Q 1 )

 const path = require('path')

 function paths (mypath){

    console.log({File : __filename , Dir : __dirname});
    
 }
 paths("C:/Users/ahmed/Downloads/Assignment2_Route/index.js")

 // Q 2 )

function filename (mypath) {


  console.log(path.basename(mypath));
}
filename("C:/Users/ahmed/Downloads/Assignment2_Route/index.js")

// Q 3 )

function formated (obj){

    console.log(path.format(obj));
    
}
formated({ dir: "\\folder", name: "app", ext: ".js"})

// Q 4 )

function extention (mypath){

    console.log(path.extname(mypath));
    
}
extention("C:/Users/ahmed/Downloads/Assignment2_Route/index.js")

// Q 5 )

function parse (obj){
        let {name , ext}= obj

        let d = path.parse(obj)
    console.log("ext :" , d.ext , "name : " , d.name);
}
parse("C:/Users/ahmed/Downloads/Assignment2_Route/index.js")

// Q 6 )

function isabsolute (mypath){
    console.log(path.isAbsolute(mypath));
}
isabsolute("C:/Users/ahmed/Downloads/Assignment2_Route/index.js")

// Q 7 ) 

function joint_segment (...segment){
    console.log(path.join(...segment));
    
}
joint_segment("src","components", "App.js")

// Q 8 )

function resolve (mypath){

    console.log(path.resolve(mypath));
    
}
resolve("index.js")

// Q 9 )

function join_paths(from , to){
    console.log(path.join(from , to));
}
join_paths("/folder1" , "folder2/file.txt")

// Q 10 )


const fs = require("fs");

function deletion(file) {
  fs.unlink(file,  (err)=> {
    if (err) {
      console.error(err);
    } else {
      console.log("the file ", path.basename(file) , "is deleted");
    }
  });
}

deletion("C:/Users/ahmed/Downloads/NAT.pdf");


// Q 11 }

function create_folder (x){
    
    try{
     const  folder = fs.mkdirSync(x)
     console.log("Success");
    }
    catch{
        console.log("Invalid");
        
    }
    }

create_folder("beboo")



// Q 12 )

const {EventEmitter} = require("events")

const events = new EventEmitter()

function message (msg){
    events.on("start" , (msg)=>{
        console.log(msg);
    
})

events.emit("start" , msg)

}
message("Welcome event triggered!")

// Q 13 )

function login (name){

    events.on("login" ,(name)=>{
        console.log("User logged in:" , name);
        
    } )

    events.emit("login" , name)

}
login("Ahmed")

// Q 14 )

function read (file){
    try{
 
      const x = fs.readFileSync(file ,"utf8")

      console.log("the file content : " , x);

      
    }
    catch{
        console.log("error");
        
    }
}
read("notes.txt")


// Q 15 )
function write_file (path , content){

    try{
        const write = fs.writeFileSync(path , content , "utf8")
        console.log("successfully");
    }
    catch{
        console.log("error");
        
    }
}
write_file("async.txt" , "Async save")


// Q 16 )

function check (file){

       console.log(fs.existsSync(file));
    
}
check("index.js")

// Q 17 )

function OS (){

    const os = require("os")
    const c= os.arch()
    console.log({Plateform : os.platform() , Arch: os.arch()});
}

OS()
