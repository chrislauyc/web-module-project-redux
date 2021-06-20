import { connect } from "react-redux";
import { DELETE_MOVIE, REMOVE_FAVORITE } from "../actions/actionTypes";
import { addFavorite } from "../actions/favoritesActions";
import { deleteMovie } from "../actions/movieActions";

export const connectToStore=(component)=>{
    const mapStateToProps=(state)=>{
        return{
            movies:state.movie.movies
        };
    };
    const mapDispatchToProps=(dispatch)=>{
        return{
            deleteMovie: (id)=>{dispatch(deleteMovie(id))},
            addFavorite: (id)=>{dispatch(addFavorite(id))}
        };
    };
    return connect(mapStateToProps,mapDispatchToProps)(component);
};
export const deleteMovieAction=(id)=>{
    return([{type: DELETE_MOVIE, payload:id},{type:REMOVE_FAVORITE,payload:id}]);
};
export const deleteMovieReducer=(state,action)=>{
    const newMovies = state.movies.filter(item=>(parseInt(action.payload) !== item.id));
    return {
        movies: newMovies
    };
};