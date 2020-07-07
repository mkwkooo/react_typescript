import { combineReducers } from "redux";

import events from "./events_reducer";
import operationLogs from "./operationlogs_reducer";

export default combineReducers({
  events,
  operationLogs,
});
