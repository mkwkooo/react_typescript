import {
  CREATE_EVENT,
  DELETE_EVENT,
  DELETE_ALL_EVENTS,
} from "../actions/action";

export type EventAction = {
  type: string;
  id?: number;
  title?: string;
  body?: string;
};

export type EventState = {
  id: number;
  title: string;
  body: string;
};

export const initialEventState: EventState[] = [];

const events = (state = initialEventState, action: EventAction) => {
  switch (action.type) {
    case CREATE_EVENT:
      const length = state.length;
      const id = length === 0 ? 0 : state[length - 1].id + 1;
      if (action.title === undefined || action.body === undefined) {
        throw new Error("action.title or action.body is undefined");
      }
      const createdState: EventState = {
        id: id,
        title: action.title,
        body: action.body,
      };
      return [...state, createdState];

    case DELETE_EVENT:
      const deletedState = state.filter((event) => event.id !== action.id);
      const newState = deletedState;
      return newState;

    case DELETE_ALL_EVENTS:
      return [];

    default:
      return state;
  }
};

export default events;
