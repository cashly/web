import { SimulationResult } from 'cashly-core';
import React from 'react';
import './IncomeTable.scss';

export interface IncomeTableProps {
  income: SimulationResult[];
}

export const IncomeTable: React.FC<IncomeTableProps> = (props) => {
  const rows = props.income.map((result) => {
    return (
        <tr key={result.startDate.toDateString()}>
          <td>{result.startDate.toDateString()}</td>
          <td>{result.endDate.toDateString()}</td>
          <td>${result.income.toLocaleString()}</td>
        </tr>
    );
  });

  const sum = props.income.reduce((accum, curr) => {
    return SimulationResult.merge(accum, curr) as SimulationResult;
  });

  return (
      <table className='table is-hoverable is-fullwidth'>
        <thead>
        <tr>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Income</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
        <tfoot>
        <td>{sum.startDate.toDateString()}</td>
        <td>{sum.endDate.toDateString()}</td>
        <td>${sum.income.toLocaleString()}</td>
        </tfoot>
      </table>
  );
};
