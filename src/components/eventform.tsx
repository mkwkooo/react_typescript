import React, { useReducer, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext from '../contexts/AppContext';
import reducer, { actionType, stateType } from '../reducers/events';
import { CREATE_EVENT } from '../actions/action';
import { EventContext } from './App';

const EventForm = () => {
  const { state, dispatch } = useContext(EventContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });
    setTitle('');
    setBody('');
  };
  const createButton = title === '' || body === '' ? true : false;

  return (
    <div>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">title</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">body</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
      </form>
      <button
        className="btn btn-primary"
        onClick={addEvent}
        disabled={createButton}
      >
        イベントを作成する
      </button>
    </div>
  );
};

export default EventForm;
