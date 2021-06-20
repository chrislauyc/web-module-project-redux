import { ADD_MOVIE } from '../../actions/actionTypes';
import { connect } from 'react-redux';
import { addMovie } from '../../actions/movieActions';
export const connectToStore=(component)=>{
    const mapStateToProps=(state)=>{
        return{};
    };
    const mapDispatchToProps=(dispatch)=>{
        return{
            addMovie: (movie)=>dispatch(addMovie(movie))
        }
    }
    return connect(mapStateToProps,mapDispatchToProps)(component);
};
export const addMovieAction=(movie)=>{
    return({type:ADD_MOVIE,payload:movie});
};
export const addMovieReducer=(state,action)=>{
    console.log(state);
    const newMovie = {
        ...action.payload,
        id:state.movies.length,
    };
    return{
        ...state,
        movies:[...state.movies,newMovie]
    };
};