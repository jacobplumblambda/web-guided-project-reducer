import { SET_TITLE, TOGGLE_EDITING, UPDATE_TEXT } from "../actions/title-form.actions";

export const initialTitleState = { 
    title: 'Hello earthlings!', 
    editing: false, 
    newTitleText: '' 
}

export const titleReducer = (state, action) => {
    switch(action.type) {
        case TOGGLE_EDITING:
            return {...state, editing: !state.editing}
        case SET_TITLE:
            return {...state, title: action.title}
        case UPDATE_TEXT:
            return {...state, newTitleText: action.text}
        default:
            return {...state};
    }
}