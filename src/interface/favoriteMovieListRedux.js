import {connect} from 'react-redux';
import { 
    TOGGLE_FAVORITES,
    ADD_FAVORITE,
    REMOVE_FAVORITE
} from "../actions/actionTypes";
import {
    toggleFavorites,
    addFavorite,
    removeFavorite
} from "../actions/favoritesActions";
export const connectToStore=(component)=>{
    const mapStateToProps=(state)=>{
        return{
            favorites:state.favorites.favorites,
            movies:state.movie.movies
        };
    };
    const mapDispatchToProps=(dispatch)=>{
        return{
            toggleFavorites:(id)=>dispatch(toggleFavorites(id)),
            addFavorite:(id)=>dispatch(addFavorite(id)),
            removeFavorite:(id)=>dispatch(removeFavorite(id))
        };
    };
    return connect(mapStateToProps,mapDispatchToProps)(component);
};
// toggleFavorites
export const toggleFavoritesAction=()=>{
    return({type:TOGGLE_FAVORITES});
};
export const toggleFavoritesReducer=(state,action)=>{
    return{
        ...state,
        displayFavorites:!state.displayFavorites
    };
};
// addFavorite
export const addFavoriteAction=(id)=>{
    return({type:ADD_FAVORITE,payload:id});
};
export const addFavoriteReducer=(state,action)=>{
    return{
        ...state,
        favorites:[...state.favorites,action.payload]
    }; 
};
// removeFavorite
export const removeFavoriteAction=(id)=>{
    return({type:REMOVE_FAVORITE,payload:id});
}
export const removeFavoriteReducer=(state,action)=>{
    return{
        ...state,
        favorites:state.favorites.filter(fav=>fav===action.payload)
    };
}