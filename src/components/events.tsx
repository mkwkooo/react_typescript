import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { EventState, EventAction } from "../reducers/events_reducer";
import EventRow from "./EventRow";

interface Props {
  values: EventState[];
  dispatch: React.Dispatch<EventAction>;
}

const EventList: React.FC<Props> = (props) => {
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
        </thead>
        <tbody>
          {/* 他コンポーネントの呼出　必要な値（event、dispatch）を引渡 */}
          {/* stateの中に titleとbodyが格納されている */}
          {props.values.map((event, index) => {
            return (
              <EventRow
                key={index}
                event={event}
                dispatch={props.dispatch}
              ></EventRow>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default EventList;
