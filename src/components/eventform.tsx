import React, { useReducer, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer, { EventAction, EventState } from "../reducers/events_reducer";
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
} from "../actions/action";
import {
  operationLogType,
  OperationLogAction,
} from "../reducers/operationlogs_reducer";
import { stringify } from "querystring";
import { timeCurrentIso8601 } from "../utils";

interface Props {
  values: EventState[];
  eventsDispatch: React.Dispatch<EventAction>;
  operationLogsDispatch: React.Dispatch<OperationLogAction>;
}
const EventForm: React.FC<Props> = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    props.eventsDispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    props.operationLogsDispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントを作成しました",
      operatedAt: timeCurrentIso8601(),
    });
    console.log(props.values);
    setTitle("");
    setBody("");
  };
  const createButton = title === "" || body === "" ? true : false;

  const deleteAllEvents = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const result = window.confirm(
      "全てのイベントを本当に削除しても良いですか？"
    );
    if (result) {
      props.eventsDispatch({ type: DELETE_ALL_EVENTS });
    }
  };

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
      <button
        className="btn btn-danger"
        onClick={deleteAllEvents}
        disabled={props.values.length === 0}
      >
        全てのイベントを削除する
      </button>
    </div>
  );
};

export default EventForm;
