import React, { useContext } from "react";

import OperationLog from "./OperationLog";
import { operationLogType } from "../reducers/operationlogs_reducer";
interface Props {
  values: operationLogType[];
}

const OperationLogs: React.FC<Props> = (props) => {
  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {props.values.map((operationLog, index) => {
            return <OperationLog key={index} operationLog={operationLog} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
