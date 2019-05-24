import { SimulationResult } from 'cashly-core';
import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';

export interface IncomeGraphProp {
  income: SimulationResult[];
}

export const IncomeGraph: React.FC<IncomeGraphProp> = (props) => {
  return (
      <VictoryChart>
        <VictoryLine
            name={'Income'}
            data={props.income}
            x={'startDate'}
            y={'income'}
        />
      </VictoryChart>
  );
};
