import { ExpenseEntry, SimulationResult } from 'cashly-core';
import React from 'react';
import { VictoryPie } from 'victory';

export interface AssetsGraphProp {
  assets: ExpenseEntry[];
}

export const ExpensesPieChart: React.FC<AssetsGraphProp> = (props) => {
  return (
      <VictoryPie
          name={'Expenses'}
          data={props.assets}
          x={'name'}
          y={'amount'}
      />
  );
};
