import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from "../actions/action";

export type operationLogType = {
  description: string;
  operatedAt: string;
};

export type OperationLogAction = {
  type: string;
  description: string;
  operatedAt: string;
};

export const initialOperationState: operationLogType[] = [];

const operationLogs = (
  state = initialOperationState,
  action: OperationLogAction
) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt,
      };
      return [operationLog, ...state];

    default:
      return state;
  }
};

export type OperationLogReducerType = typeof operationLogs;

export default operationLogs;
