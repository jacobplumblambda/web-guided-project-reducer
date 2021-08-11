const SET_TITLE = "SET_TITLE";
const SET_EDITING = "SET_EDITING";
const SET_NEWTEXTTITLE = "SET_NEWTEXTTITLE";

export default {
    setTitle: (title) => {
        return {type: SET_TITLE, payload: title}
    },
    setEditing: (isEditing) => {
        return {type: SET_EDITING, payload: isEditing}
    },
    setNewTextTitle: (newTextTitle) => {
        return {type: SET_NEWTEXTTITLE, payload: newTextTitle}
    }
}