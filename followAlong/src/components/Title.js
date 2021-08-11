import React, { useState, useReducer } from 'react';
import actions from '../action';
import reducer from '../reducer';

const initalState = {
  title: 'Default',
  editing: false,
  newTitleText: ''
}

const Title = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [title, setTitle] = useState('Hello earthlings!');
  const [editing, setEditing] = useState(false);
  const [newTitleText, setNewTitleText] = useState('');

  const handleChanges = e => {
    dispatch(actions.setNewTextTitle(e.target.value));
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {title}{' '}
          <i onClick={() => dispatch(actions.setEditing(true))} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch(actions.setTitle(state.newTitleText))
              dispatch(actions.setEditing(false));
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