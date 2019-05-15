import React from 'react';
import { Navbar } from './Navbar';
import Simulator from './Simulator';
import { WideLayout } from './WideLayout';

const App = () => {
  return (
      <div>
        <Navbar/>
        <section className='section'>
          <div className='container'>
            <WideLayout>
              <Simulator/>
            </WideLayout>
          </div>
        </section>
      </div>
  );
};

export default App;
