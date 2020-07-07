import React, { useContext } from "react";
import { EventState, EventAction } from "../reducers/events_reducer";
import { DELETE_EVENT } from "../actions/action";

interface Props {
  event: EventState;
  key: number;
  dispatch: React.Dispatch<EventAction>;
}

const Event: React.FC<Props> = (props) => {
  const id = props.event.id;
  const deleteEvent = () => {
    const result = window.confirm(
      `イベント(id=${id})を本当に削除しても良いですか？`
    );
    if (result) {
      props.dispatch({ type: DELETE_EVENT, id });
    }
  };

  return (
    <tr>
      <td>{props.event.id}</td>
      <td>{props.event.title}</td>
      <td>{props.event.body}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={deleteEvent}>
          削除
        </button>
      </td>
    </tr>
  );
};
export default Event;
