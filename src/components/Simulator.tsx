import { IncomeEntry, MonthlyEvent, OneOffEvent } from 'cashly-core';
import { runMonthlySimulation } from 'cashly-core/build/simulator';
import React from 'react';
import { VictoryArea, VictoryChart } from 'victory';

const income = [
  new IncomeEntry('Salary', 10000, new MonthlyEvent(new Date(2019, 7, 1))),
  new IncomeEntry('Bonus', 34000, new OneOffEvent(new Date(2019, 7, 1)))
];

const endDate = new Date();
endDate.setFullYear(endDate.getFullYear() + 1);

const results = runMonthlySimulation({
  endDate,
  startDate: new Date()
}, {
  income
});

const Simulator = () => {
  const resultRows = results.map((result) => {
    return (
        <tr key={result.startDate.toDateString()}>
          <td>{result.startDate.toDateString()}</td>
          <td>{result.endDate.toDateString()}</td>
          <td>{result.income}</td>
        </tr>
    );
  });

  return (
      <div>
        <VictoryChart>
          <VictoryArea
              name={'Monthly Income'}
              data={results}
              x={'startDate'}
              y={'income'}
          />
        </VictoryChart>
        <table className='table is-hoverable is-fullwidth'>
          <thead>
          <tr>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Income</th>
          </tr>
          </thead>
          <tbody>
          {resultRows}
          </tbody>
        </table>
      </div>
  );
};

export default Simulator;
