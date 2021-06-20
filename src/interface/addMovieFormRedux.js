import { ADD_MOVIE } from '../actions/actionTypes';
import { connect } from 'react-redux';
import { addMovie } from '../actions/movieActions';
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
    console.log('addmoviereducer',state);
    const newMovie = {
        ...action.payload,
        id:state.movies.reduce((acc,movie)=>Math.max(acc,movie.id),0)+1,
    };
    return{
        ...state,
        movies:[...state.movies,newMovie]
    };
};