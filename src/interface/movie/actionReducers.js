import { DELETE_MOVIE } from "../../actions/actionTypes";
export const deleteMovieAction=(id)=>{
    return({type: DELETE_MOVIE, payload:id});
};
export const deleteMovieReducer=(state,action)=>{
    const newMovies = state.movies.filter(item=>(parseInt(action.payload) !== item.id)).map((item,i)=>({...item,id:i}));
    console.log(newMovies);
    return {
        movies: newMovies
    };
};