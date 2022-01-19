import { GET_PROJECTS } from "../actions/types";

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
        default:
            return state;
    }
}