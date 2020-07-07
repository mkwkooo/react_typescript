import React, { useReducer, useContext, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer, {
  stateType,
  eventStateType,
  initialEventState,
  actionType,
} from "../reducers/events";
import EventForm from "./eventform";
// import AppContext, { initialState } from '../contexts/AppContext';
import EventList from "./events";

export const EventContext = createContext<{
  state: eventStateType;
  dispatch: (action: actionType) => void;
}>({ state: initialEventState, dispatch: () => {} });

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialEventState);

  return (
    <div className="container-fluid">
      <EventContext.Provider value={{ state, dispatch }}>
        <EventForm></EventForm>
        <EventList></EventList>
      </EventContext.Provider>
    </div>
  );
};

export default App;
