import { SimulationOptions, SimulationResult } from 'cashly-core';
import React from 'react';
import './SimulationResultTable.scss';

export interface IncomeTableProps {
  income: SimulationResult[];
  options: SimulationOptions;
}

export const SimulationResultTable: React.FC<IncomeTableProps> = (props) => {
  const rows = props.income.map((result) => {
    return (
        <tr key={result.startDate.toDateString()}>
          <td>{result.startDate.toDateString()}</td>
          <td>{result.endDate.toDateString()}</td>
          <td>${(result.income * (1 - props.options.incomeTaxRate)).toLocaleString()}</td>
          <td>${result.expenses.toLocaleString()}</td>
          <td>${result.netWorth.toLocaleString()}</td>
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
          <th>Income (post-tax)</th>
          <th>Expenses</th>
          <th>Net Worth</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
        <tfoot>
        <td>{sum.startDate.toDateString()}</td>
        <td>{sum.endDate.toDateString()}</td>
        <td>${sum.income.toLocaleString()}</td>
        <td>${sum.expenses.toLocaleString()}</td>
        <td />
        </tfoot>
      </table>
  );
};
