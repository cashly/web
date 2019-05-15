import { EndOfMonthEvent, IncomeEntry, OneOffEvent, runMonthlySimulation, SimulationResult } from 'cashly-core';
import { addYears } from 'date-fns';
import React from 'react';
import { IncomeGraph } from './IncomeGraph';
import { IncomeTable } from './IncomeTable';

const income = [
  new IncomeEntry('Salary', 10000, new EndOfMonthEvent(new Date(2019, 6))),
  new IncomeEntry('Bonus', 34000, new OneOffEvent(new Date(2019, 6, 31)))
];

const today = new Date();

const results = runMonthlySimulation({
  startDate: today,
  endDate: addYears(today, 4)
}, {
  income
});

const Simulator = () => {
  return (
      <div>
        <IncomeGraph income={results} />
        <IncomeTable income={results} />
      </div>
  );
};

export default Simulator;
