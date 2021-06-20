import { connect } from "react-redux";
import { toggleFavorites } from "../actions/favoritesActions";

export const connectToStore=(component)=>{
    const mapStateToProps=(state)=>{
        return{
            appTitle:state.movie.appTitle,
            displayFavorites:state.favorites.displayFavorites
        };
    };
    const mapDispatchToProps=(dispatch)=>{
        return{
            toggleFavorites:()=>dispatch(toggleFavorites())
        };
    };
    return connect(mapStateToProps,mapDispatchToProps)(component);
};