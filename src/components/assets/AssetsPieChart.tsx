import { AssetEntry } from 'cashly-core';
import React from 'react';
import { VictoryPie } from 'victory';

export interface AssetsGraphProp {
  assets: AssetEntry[];
}

export const AssetsPieChart: React.FC<AssetsGraphProp> = (props) => {
  return (
      <VictoryPie
          name={'Assets'}
          data={props.assets}
          x={'name'}
          y={'amount'}
      />
  );
};
