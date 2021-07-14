var student = { 
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 }; 

console.log(Object.keys(student))

// ------------------------------------------------

var student = { name : "David Rayy", 
sclass : "VI", 
rollno : 12 }; 

console.log("before deleting",student)

delete student.rollno

console.log(student)

//------------------------------------------------------------------------------

var student = { name : "David Rayy", sclass : "VI", rollno : 12}



console.log(Object.keys(student).length);

//-----------------------------------------------------------------------

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
     { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 



    console.log(Object.values(library))

//----------------------------------------------------------------------------------

    const v = {
        radius: 50,
        pi: 3.14,
        h : 10,
    
        volume : function() {
            return (2*this.pi*this.h*this.radius)
            
        }
    }
    
    console.log(v.volume().toFixed(4))

//---------------------------------------------------------------------------------------------

    var library = [{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 } , 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 



    library.forEach(item=>{
        console.log("{")
       Object.keys(item).sort().forEach(k => {
        console.log(k,item[k]);
        });
        console.log("}")
    });