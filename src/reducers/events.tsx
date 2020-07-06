import { CREATE_EVENT } from '../actions/action';

export type actionType = {
  type: string;
  title: string;
  body: string;
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
      const event = { title: action.title, body: action.body };
      const Length = state.events.length;
      const id = Length === 0 ? 0 : state.events[Length - 1].id + 1;
      return { events: [...state.events, { id, ...event }] };

    default:
      return state;
  }
};

export default events;
