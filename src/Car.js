import React, { useEffect } from 'react'

export default function Car(props) {
  useEffect(() => {
    if (props.isSubmitted == true) {
      props.setState((prevState) => (
        {
          ...prevState,
          carValue: ""
        }
      ));
      props.setIsSubmitted(false);
    }
  }, [props.isSubmitted])
  function getCarModels(event) {

    props.setState((prevState) => (
      {
        ...prevState,
        carValue: event.target.value
      }
    ));   
  }

  return (
    <div>
      <select name="Car" id="Car" onChange={getCarModels} value={props.carSpecification.carValue}>
	      <option value="Mark">МАРКА</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="MercedesBenz">MercedesBenz</option>
      </select>
    </div>
  )
}
