import { connect } from "react-redux";
import {addMovie} from '../actions/movieActions'
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