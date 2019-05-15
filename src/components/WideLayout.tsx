import React from 'react';

export const WideLayout: React.FC = (props) => {
  return (
      <div className='columns'>
        <div className='column is-three-fifths is-offset-one-fifth'>
          {props.children}
        </div>
      </div>
  );
};
