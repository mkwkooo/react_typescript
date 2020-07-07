import React from "react";
import { operationLogType } from "../reducers/operationlogs_reducer";

type Props = {
  operationLog: operationLogType;
};

const OperationLog: React.FC<Props> = (props) => {
  return (
    <tr>
      <td>{props.operationLog.description}</td>
      <td>{props.operationLog.operatedAt}</td>
    </tr>
  );
};
export default OperationLog;
