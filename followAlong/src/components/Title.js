import React, { useState, useReducer } from 'react';
import { setTitleAction, setTitleTextAction, toggleEditingAction } from '../actions/title-form.actions';
import { initialTitleState, titleReducer } from '../reducers/title-form.reducer';

const Title = () => {
  const [state, dispatch] = useReducer(titleReducer, initialTitleState);

  return (
    <div>
      {!state.editing ? (
        <div>
          <h1>
            {state.title}{' '}
            <i onClick={() => dispatch(toggleEditingAction())} className="far fa-edit" />
          </h1>
        </div>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={state.newTitleText}
            onChange={(e) => dispatch(setTitleTextAction(e.target.value))}
          />
          <button
            onClick={() => {
              dispatch(setTitleAction(state.newTitleText))
              dispatch(setTitleTextAction(''))
              dispatch(toggleEditingAction());
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