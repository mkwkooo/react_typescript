import { CREATE_EVENT, DELETE_EVENT } from "../actions/action";

export type actionType = {
  type: string;
  id?: number;
  title?: string;
  body?: string;
};

export type stateType = {
  id: number;
  title: string;
  body: string;
};

/// TODO: ほんとうはcontexts/eventに
export type eventStateType = { events: stateType[] };

export const initialEventState: eventStateType = { events: [] };

const events: React.Reducer<eventStateType, actionType> = (
  state: eventStateType = initialEventState,
  action: actionType
) => {
  switch (action.type) {
    case CREATE_EVENT:
      const length = state.events.length;
      const id = length === 0 ? 0 : state.events[length - 1].id + 1;
      if (action.title === undefined || action.body === undefined) {
        throw new Error("action.title or action.body is undefined");
      }
      const createdState: stateType = {
        id: id,
        title: action.title,
        body: action.body,
      };
      return { events: [...state.events, createdState] };

    case DELETE_EVENT:
      console.log(state.events.filter((event) => event.id !== action.id));
      return state;

    default:
      return state;
  }
};

export default events;
