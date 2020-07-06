import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EventContext } from './App';
import reducer, { stateType } from '../reducers/events';
import Event from './event';

const EventList = () => {
  const { state } = useContext(EventContext);
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
          {state.events.map((event, index) => {
            return <Event key={index} event={event}></Event>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default EventList;
