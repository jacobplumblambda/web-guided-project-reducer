import React, { useState, useReducer } from 'react';
import { allowEditing, setTitle, updateText } from '../actions/title.actions';
import { initialTitleState, titleReducer } from '../reducers/title.reducer';

const Title = () => {
  const [state, dispatch] = useReducer(titleReducer, initialTitleState);


  const handleChanges = e => {
    dispatch(updateText(e.target.value));
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i onClick={() => dispatch(allowEditing())} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.text}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch(setTitle());
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