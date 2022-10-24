import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Car from './Car';
import Model from './Model';
import GearBoxSection from './GearBoxSection';
import ConditionSection from './ConditionSection';
import DateSection from './DateSection';
import TextArea from './TextArea';
import MyTable from './MyTable';

function App() {
  const [carSpecification, setState] = useState({
    carValue: "",
    modelValue: "",
    gearBoxValue: "",
    stateValue: "",
    dateValue: "",
    commentValue: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <h4>Выберите марку</h4>
        <div className="CarAndModelSection">
          <Car setState={setState} carSpecification={carSpecification} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
          <Model setState={setState} carSpecification={carSpecification} />
        </div>
        <h4>КПП</h4>
        <GearBoxSection setState={setState} carSpecification={carSpecification} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}/>
        <h4>Состояние</h4>
        <div className='ConditionSection'>
        <ConditionSection setState={setState} isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} carSpecification={carSpecification}/>
        </div>
        <div className='DateSection'>
        <DateSection setState={setState} isSubmitted={isSubmitted} carSpecification={carSpecification} setIsSubmitted={setIsSubmitted}/>
        </div>
        <h4>Комментарий</h4>
        <TextArea setState={setState} isSubmitted={isSubmitted} carSpecification={carSpecification} setIsSubmitted={setIsSubmitted}/>
        <MyTable setState={setState} carSpecification={carSpecification} setIsSubmitted={setIsSubmitted}/>
      </header>
    </div>
  );
}

export default App;
