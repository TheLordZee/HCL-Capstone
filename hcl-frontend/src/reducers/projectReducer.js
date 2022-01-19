import { GET_PROJECT, GET_PROJECTS } from "../actions/types";

const initState = {
    projects: [],
    project: {}
};

export default function(state=initState, action){
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case GET_PROJECT:
            return{
                ...state,
                project: action.payload
            }
        default:
            return state;
    }
}