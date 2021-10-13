import React, { useState, useReducer } from 'react';

const initialState = { title: 'Hello earthlings!', editing: false, newTitleText: '' }

const updateTitle = (title) => {
  console.log('calling this function');
  return { type: 'UPDATE TITLE', title: title }
}

const toggleEditing = () => {
  console.log('toggle editing dispatched');
  return { type: 'TOGGLE EDITING' }
}

// reducer({ title: 'Hello earthlings!', editing: false, newTitleText: '' }, { type: 'UPDATE TITLE', title: 'new Title' });

const reducer = (state, action) => {
  console.log('reducer was hit');
  switch (action.type) {
    case 'UPDATE TITLE':
      return { ...state, title: action.title } // {editing: true, newTitleText: '', title: 'new Title'}
    case 'TOGGLE EDITING':
      return { ...state, editing: !state.editing} // {title: 'Hello earthlings!', newTitleText: '', editing: true}
    default:
      return { ...state };
  }
}

const Title = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [newTitleText, setNewTitleText] = useState('');

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  const updateTitleDom = () => {
    dispatch(updateTitle('new Title'))
  }

  return (
    <div>
      {!state.editing ? (
        <div>
          <h1>
            {state.title}{' '}
            <i onClick={() => dispatch(toggleEditing())} className="far fa-edit" />
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