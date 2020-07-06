import React, { useContext } from 'react';
import { stateType } from '../reducers/events';
import { EventContext } from './App';

const Event: ({ event }: { event: stateType }) => JSX.Element = ({ event }) => {
  const { dispatch } = useContext(EventContext);
  const deleteEvent = () => {};

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
