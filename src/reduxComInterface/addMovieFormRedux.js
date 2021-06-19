import { ADD_MOVIE } from './../actions/actionTypes';
export const addMovieAction=(movie)=>{
    return({type:ADD_MOVIE,payload:movie});
};
export const addMovieReducer=(state,action)=>{
    console.log(state);
    const newMovie = {
        ...action.payload,
        id:state.movies.length,
    };
    console.log({
        ...state,
        movies:[...state.movies,newMovie]
    })
    return{
        ...state,
        movies:[...state.movies,newMovie]
    };
};