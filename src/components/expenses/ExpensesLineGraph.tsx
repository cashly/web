import { SimulationResult } from 'cashly-core';
import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';

export interface ExpensesLineGraphProp {
  expenses: SimulationResult[];
}

export const ExpensesLineGraph: React.FC<ExpensesLineGraphProp> = (props) => {
  return (
      <VictoryChart>
        <VictoryLine
            name={'Expenses'}
            data={props.expenses}
            x={'startDate'}
            y={'expenses'}
        />
      </VictoryChart>
  );
};
