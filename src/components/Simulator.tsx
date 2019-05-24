import {
  AssetEntry,
  EndOfMonthEvent,
  ExpenseEntry,
  IncomeEntry, MonthlyEvent,
  OneOffEvent,
  runMonthlySimulation,
  SimulationResult
} from 'cashly-core';
import { addYears } from 'date-fns';
import React from 'react';
import { AssetsPieChart } from './assets/AssetsPieChart';
import { ExpensesLineGraph } from './expenses/ExpensesLineGraph';
import { ExpensesPieChart } from './expenses/ExpensesPieChart';
import { IncomeGraph } from './income/IncomeGraph';
import { NetWorthLineGraph } from './networth/NetWorthLineGraph';
import { SimulationResultTable } from './simulation/SimulationResultTable';

const income = [
  new IncomeEntry('Salary', 10000, new EndOfMonthEvent(new Date(2019, 6))),
  new IncomeEntry('Bonus', 34000, new OneOffEvent(new Date(2019, 6, 31)))
];

const expenses = [
  new ExpenseEntry('Rent', 3000, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Hyundai - Lease', 300, new MonthlyEvent(new Date(2019, 5, 14))),
  new ExpenseEntry('Hyundai - Insurance', 170, new MonthlyEvent(new Date(2019, 5, 14))),
  new ExpenseEntry('Hyundai - Gas', 80, new MonthlyEvent(new Date(2019, 5, 1))),
  new ExpenseEntry('Food', 500, new MonthlyEvent(new Date(2019, 5, 1))),
  new ExpenseEntry('Entertainment', 175, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Parking', 250, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Shopping - Kitchen', 75, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Shopping - Electronics', 250, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Shopping - Clothing', 166, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Shopping - Household Supplies', 16, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Cellphone - Plan', 70, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Cellphone - Device', 30, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Utilities - Gas', 65, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Utilities - Water', 100, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Utilities - Internet', 70, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Insurance - Health', 72, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Insurance - Dental', 3, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Insurance - Vision', 9, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Insurance - Renters', 12, new MonthlyEvent(new Date(2019, 8, 1))),
  new ExpenseEntry('Travel', 500, new MonthlyEvent(new Date(2019, 8, 1)))
];

const assets = [
  {
    name: 'Bank',
    amount: 737
  },
  {
    name: 'Savings',
    amount: 3244
  },
  {
    name: 'Relocation',
    amount: 1250
  }
];

const today = new Date();

const options = {
  startDate: today,
  endDate: addYears(today, 4),
  incomeTaxRate: .3
};

const results = runMonthlySimulation(options, {
  income,
  expenses,
  assets
});

const Simulator = () => {
  return (
      <div>
        <IncomeGraph income={results} />
        <ExpensesLineGraph expenses={results} />
        <NetWorthLineGraph netWorth={results} />
        <AssetsPieChart assets={assets} />
        <ExpensesPieChart assets={expenses} />
        <h1 className='title'>Simulation</h1>
        <p>
          Income tax rate: {options.incomeTaxRate}%
        </p>
        <SimulationResultTable income={results} options={options} />
      </div>
  );
};

export default Simulator;
