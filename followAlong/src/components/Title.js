import React, { useState, useReducer } from 'react';

const initialState = {
  title: 'Hello earthlings!',
  editing: false,
  newTitleText: ''
}

const updateTitle = (title) => {
  console.log('calling this function');
  return { type: 'UPDATE TITLE', title: title }
}

const reducer = (state, action) => {
  console.log('reducer was hit');
  switch (action.type) {
    case 'UPDATE TITLE':
      return { ...state, title: action.title } // {editing: false, newTitleText: '', title: 'new Title'}
    default:
      return { ...state };
  }
}

const Title = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [title, setTitle] = useState('Hello earthlings!');
  const [editing, setEditing] = useState(false);
  const [newTitleText, setNewTitleText] = useState('');

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  const updateTitleDom = () => {
    dispatch(updateTitle('new Title'))
  }

  return (
    <div>
      {!editing ? (
        <div>
          <h1>
            {state.title}{' '}
            <i onClick={() => setEditing(!editing)} className="far fa-edit" />
          </h1>
          <button onClick={updateTitleDom}>submit</button>
        </div>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              setTitle(newTitleText);
              setEditing(false);
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;