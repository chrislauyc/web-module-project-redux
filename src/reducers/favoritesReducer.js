import { 
    TOGGLE_FAVORITES,
    ADD_FAVORITE,
    REMOVE_FAVORITE
 } from "../actions/actionTypes";
import {
    toggleFavoritesReducer,
    addFavoriteReducer,
    removeFavoriteReducer
} from '../interface/favoriteMovieListRedux';
const initialState={
    favorites:{},
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
            return toggleFavoritesReducer(state,action);
        case ADD_FAVORITE:
            return addFavoriteReducer(state,action);
        case REMOVE_FAVORITE:
            return removeFavoriteReducer(state,action);
        default:
            console.log('This action is not found in reducer!: ',{action});
            return state;
    };
};
export default reducer;