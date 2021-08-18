export const ALLOW_EDITING = 'Allow Editing';
export const UPDATE_TEXT = 'Update Text';
export const SET_TITLE = 'Set Title';

export const allowEditing = () => {
    return ({type: ALLOW_EDITING});
}

export const updateText = (text) => {
    return ({type: UPDATE_TEXT, text});
}

export const setTitle = () => {
    return ({type: SET_TITLE});
}