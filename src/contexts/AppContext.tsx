import { createContext } from 'react';

type stateType = { events: []; operationLogs: [] };

export const initialState: stateType = {
  events: [],
  operationLogs: [],
};

const AppContext = createContext(initialState);

export default AppContext;
