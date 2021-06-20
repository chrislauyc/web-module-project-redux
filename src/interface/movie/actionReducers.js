import { connect } from "react-redux";
import { DELETE_MOVIE } from "../../actions/actionTypes";
import { deleteMovie } from "../../actions/movieActions";

export const connectToStore=(component)=>{
    const mapStateToProps=(state)=>{
        console.log('mapping state to props',{state})
        return{
            movies:state.movie.movies
        };
    };
    const mapDispatchToProps=(dispatch)=>{
        return{
            deleteMovie: (id)=>{dispatch(deleteMovie(id))}
        };
    };
    return connect(mapStateToProps,mapDispatchToProps)(component);
};
export const deleteMovieAction=(id)=>{
    return({type: DELETE_MOVIE, payload:id});
};
export const deleteMovieReducer=(state,action)=>{
    const newMovies = state.movies.filter(item=>(parseInt(action.payload) !== item.id));
    return {
        movies: newMovies
    };
};