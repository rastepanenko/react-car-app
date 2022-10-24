import React, { useEffect, useState } from 'react'

export default function GearBoxSection(props) {

  const [checkBoxesState, setCheckBoxesState] = useState(
    {
      mechanic: false,
      automatic: false,
      variator: false,
      robotic: false
    }
  );

   useEffect(() => {
    if (props.isSubmitted == true) {
      setCheckBoxesState(prevState => ({...prevState, automatic: false, mechanic: false, variator: false, robotic: false}));
      props.setIsSubmitted(false);
    }
  }, [props.isSubmitted])

  function GearBoxValueMethod(event) {

    props.setState((prevState) => (
      {
        ...prevState,
        gearBoxValue: event.target.value
      }
    ));

    if(event.target.value == "МКПП") {
      setCheckBoxesState(prevState => ({...prevState, automatic: false, mechanic: true, variator: false, robotic: false}));
    }
    else if(event.target.value == "АКПП") {
      setCheckBoxesState(prevState => ({...prevState, automatic: true, mechanic: false, variator: false, robotic: false}));
    }
    else if(event.target.value == "Вариатор") {
      setCheckBoxesState(prevState => ({...prevState, automatic: false, mechanic: false, variator: true, robotic: false}));
    }
    else if(event.target.value == "Робот") {
      setCheckBoxesState(prevState => ({...prevState, automatic: false, mechanic: false, variator: false, robotic: true}));
    }
  };


  return (
    <div>
      <div className='GearBoxSection'>
        <p>
          <input type="radio" value="МКПП" checked={checkBoxesState.mechanic} name="mechanic" onChange={GearBoxValueMethod}/>МКПП
        </p>
        <p>
          <input type="radio" value="АКПП" checked={checkBoxesState.automatic} name="automatic" onChange={GearBoxValueMethod}/>АКПП
        </p>
        <p>
          <input type="radio" value="Вариатор" checked={checkBoxesState.variator} name="variator" onChange={GearBoxValueMethod}/>Вариатор
        </p>
        <p>
          <input type="radio" value="Робот"  checked={checkBoxesState.robotic} name="robotic" onChange={GearBoxValueMethod}/>Робот
        </p>
        </div>
    </div>
  )
}
