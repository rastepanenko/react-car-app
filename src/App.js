import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Car from './Car';
import Model from './Model';
import GearBoxSection from './GearBoxSection';
import ConditionSection from './ConditionSection';
import DateSection from './DateSection';
import TextArea from './TextArea';
import ApplyButton from './ApplyButton';
import MyTable from './MyTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h4>Выберите марку</h4>
        <div className="CarAndModelSection">
          <Car />
          <Model />
        </div>
        <h4>КПП</h4>
        <GearBoxSection />
        <h4>Состояние</h4>
        <div className='ConditionSection'>
          <ConditionSection />
        </div>
        <div className='DateSection'>
          <DateSection />
        </div>
        <h4>Комментарий</h4>
        <TextArea />
        <ApplyButton />
        <MyTable />
      </header>
    </div>
  );
}

export default App;
