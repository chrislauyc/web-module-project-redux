import { connect } from "react-redux";

export const connectToStore=(component)=>{
    const mapStateToProps=(state)=>{
        return{
            appTitle:state.movie.appTitle
        };
    };
    return connect(mapStateToProps,null)(component);
};