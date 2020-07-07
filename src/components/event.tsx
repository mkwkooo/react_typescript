import React, { useContext } from "react";
import { stateType } from "../reducers/events";
import { EventContext } from "./App";
import { DELETE_EVENT } from "../actions/action";

const Event: ({ event }: { event: stateType }) => JSX.Element = ({ event }) => {
  const { dispatch } = useContext(EventContext);
  const id = event.id;
  const deleteEvent = () => {
    const result = window.confirm(
      `イベント(id=${id})を本当に削除しても良いですか？`
    );
    if (result) {
      dispatch({ type: DELETE_EVENT, id });
    }
  };

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={deleteEvent}>
          削除
        </button>
      </td>
    </tr>
  );
};
export default Event;
