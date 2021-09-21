const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case "Add_Todo":

            return [
                ...state,
                action.payload
            ];
        case "Del_Todo":
            return (state.filter((val,i)=>i!==action.payload))

        default:
            return state;

    }
}

export default TodoReducer;