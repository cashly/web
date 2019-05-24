import { SimulationResult } from 'cashly-core';
import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';

export interface NetWorthLineGraphProp {
  netWorth: SimulationResult[];
}

export const NetWorthLineGraph: React.FC<NetWorthLineGraphProp> = (props) => {
  return (
      <VictoryChart>
        <VictoryLine
            name={'Net Worth'}
            data={props.netWorth}
            x={'startDate'}
            y={'netWorth'}
        />
      </VictoryChart>
  );
};
