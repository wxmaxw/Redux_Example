export default function (state, action) {
    switch(action.type){
        case "ADD_NAME":
            const {name} = action.payload;
            const newList = [...state.nameList, name]  //mevcut daha eklenmemiş normal listi kopyalamış oluyordum
            return{...state, nameList: newList};
        case "CLEAN_LIST":  
            return {...state,nameList: []};
        
        case "SET_USERNANE":  
            return {...state,userName:action.payload.username};
            
        default:
            return state;
    }
}