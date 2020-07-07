import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import eventReducer, { initialEventState } from "../reducers/events_reducer";

import operationReducer, {
  operationLogType,
  OperationLogAction,
  initialOperationState,
} from "../reducers/operationlogs_reducer";

import EventForm from "./eventform";
import EventList from "./events";
import OperationLogs from "./OperationLogs";

const App: React.FC = () => {
  const [events, eventsDispatch] = useReducer(eventReducer, initialEventState);
  const [operationLogs, operationLogsDispatch] = useReducer(
    operationReducer,
    initialOperationState
  );
  return (
    <div className="container-fluid">
      <EventForm
        values={events}
        eventsDispatch={eventsDispatch}
        operationLogsDispatch={operationLogsDispatch}
      ></EventForm>
      <EventList values={events} dispatch={eventsDispatch}></EventList>
      <OperationLogs values={operationLogs}></OperationLogs>
    </div>
  );
};

export default App;
