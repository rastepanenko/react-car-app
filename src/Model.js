import React, { useEffect, useState } from 'react'

export default function Model(props) {

  const [modelsList, setModelsList] = useState([]);

  var models = {
    Audi: ["A3", "A4", "A5"],
    BMW: ["3-Series", "5-Series", "7-Series"],
    MercedesBenz: ["A-Class", "C-Class", "E-Class"]
  };

  useEffect(() => {

    setModelsList(
      props.carSpecification.carValue == ""
      ? []
      : models[props.carSpecification.carValue]
    );

  }, [props.carSpecification.carValue]);


  function ModelValueMethod(event) {
    props.setState((prevState) => (
      {
        ...prevState,
        modelValue: event.target.value
      }
    ));
  }
  return (
    <div>
      <select name="Model" id="Model" onChange={ModelValueMethod}>
        <option hidden="hidden">МОДЕЛЬ</option>
        {modelsList.map((model, index) => {
            return <option key={index}>{model}</option>
        })}
      </select> 
    </div>
  )
}
