import { ALLOW_EDITING, SET_TITLE, UPDATE_TEXT } from "../actions/title.actions";

export const initialTitleState = {
    title: 'Something',
    editing: false,
    text: ''
} // => {title: 'Something', text: '', editing: true}

export const titleReducer = (state, action) => {
    switch(action.type) {
        case ALLOW_EDITING:
            console.log('previous: ',state);
            console.log('action: ', action);
            const newEditingState = {...state, editing: true}
            console.log('new: ',newEditingState);
            return newEditingState;
        case UPDATE_TEXT:
            console.log('previous: ',state);
            console.log('action: ',action);
            const newTextState = {...state, text: action.text}
            console.log('new: ', newTextState);
            return newTextState;
        case SET_TITLE:
            console.log('previous: ',state);
            console.log('action: ',action);
            const newTitleState = {...state, title: state.text, text: '', editing: false}
            console.log('new: ',newTitleState);
            return newTitleState;
        default:
            return state;
    }
}