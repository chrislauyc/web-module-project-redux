import { addMovieReducer } from '../interface/addMovieFormRedux';
import {deleteMovieReducer} from '../interface/movieRedux'
import { ADD_MOVIE, DELETE_MOVIE } from '../actions/actionTypes';
import movies from './../data.js';
const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state, action) => {
    if(!state){
        return initialState;
    }
    switch(action.type) {
        case DELETE_MOVIE:
            return deleteMovieReducer(state,action);
        case ADD_MOVIE:
            return addMovieReducer(state,action);
        default:
            return state;
    }
}

export default reducer;