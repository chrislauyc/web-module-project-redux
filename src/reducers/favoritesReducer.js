import { 
    TOGGLE_FAVORITES,
    ADD_FAVORITE,
    REMOVE_FAVORITE
 } from "../actions/actionTypes";

const initialState={
    favorites:[],
    displayFavorites:false
};
// toggleFavorites,
// addFavorites,
// removeFavorite,
const reducer=(state,action)=>{
    if(!state){
        return initialState;
    }
    switch(action.type){
        case TOGGLE_FAVORITES:
            return state;
        case ADD_FAVORITE:
            return state;
        case REMOVE_FAVORITE:
            return state;
        default:
            console.log('This action is not found in reducer!: ',{action});
            return state;
    };
};
export default reducer;