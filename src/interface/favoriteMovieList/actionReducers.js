import {connect} from 'react-redux';
import { 
    TOGGLE_FAVORITES,
    ADD_FAVORITE,
    REMOVE_FAVORITE
} from "./actionTypes";
export const connectToStore=(component)=>{
    const mapStateToProps=(state)=>{
        return{

        };
    };
    const mapDispatchToProps=()=>{
        return{

        };
    };
    return connect(mapStateToProps,mapDispatchToProps)(component);
};
export const toggleFavoritesAction=()=>{
    return({type:TOGGLE_FAVORITES});
};
export const toggleFavoritesReducer=(state,action)=>{
    return{
        ...state,
        displayFavorites:!state.displayFavorites
    };
};