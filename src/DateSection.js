import React, { useEffect } from 'react'

export default function DateSection(props) {
    useEffect(() => {
    if (props.isSubmitted == true) {
      props.setState((prevState) => (
        {
          ...prevState,
          dateValue: ""
        }
      ));
      props.setIsSubmitted(false);
    }
  }, [props.isSubmitted])
  
  function DateValueMethod(event) {
    props.setState((prevState) => (
      {
        ...prevState,
        dateValue: event.target.value
      }
    ));
  }
  return (
    <div>
      <h4>Дата выпуска</h4>
      <input type="date" id="Date" value={props.carSpecification.dateValue} onChange={DateValueMethod}></input> 
    </div>
  )
}
