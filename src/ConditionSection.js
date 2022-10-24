import React, { useEffect, useState } from 'react'

export default function ConditionSection(props) {
  const [checkBoxState, setCheckBoxState] = useState(false);

  useEffect(() => {
    if (props.isSubmitted == true) {
      setCheckBoxState(false);
      props.setIsSubmitted(false);
    }
  }, [props.isSubmitted])
  
  function StateValueMethod(event) {
    props.setState((prevState) => (
      {
        ...prevState,
        stateValue: event.target.value
      }
    ));
  
    if (event.target.checked == false) {
      setCheckBoxState(false);
    }
    else {
      setCheckBoxState(true);
    }
  }
  return (
    <div>
      <p>
        <input type="checkbox" id="State" checked={checkBoxState} name="State" value="Новая" onChange={StateValueMethod}/>Новая
      </p>
    </div>
  )
}
