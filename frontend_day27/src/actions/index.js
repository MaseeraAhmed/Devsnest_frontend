const Addtodo=(obj)=>{
    return{
        type:"Add_Todo",
        payload:obj,
    };
};

const Deletetodo=(id)=>{
    return{
        type:"Del_Todo",
        payload:id,
    }
}

export {Addtodo,Deletetodo};