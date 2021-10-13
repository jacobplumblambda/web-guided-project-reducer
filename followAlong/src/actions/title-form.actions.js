export const TOGGLE_EDITING = 'Toggle Editing';
export const SET_TITLE = 'Set Title';
export const UPDATE_TEXT = 'Update Text';

export const toggleEditingAction = () => {
    return { type: TOGGLE_EDITING }
}

export const setTitleAction = (title) => {
    return { type: SET_TITLE, title}
}

export const setTitleTextAction = (text) => {
    return { type: UPDATE_TEXT, text}
}