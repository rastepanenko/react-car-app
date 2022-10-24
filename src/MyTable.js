import React, { useState } from 'react'

export default function MyTable(props) {
  const [cars, setState] = useState([]);

  let carInfo = [];
function setToTableAndClearForm() {

  setState([...cars, {
    carValueMethod: props.carSpecification.carValue,
    modelValueMethod: props.carSpecification.modelValue,
    gearBoxValueMethod: props.carSpecification.gearBoxValue,
    stateValueMethod: props.carSpecification.stateValue,
    dateValueMethod: props.carSpecification.dateValue,
    commentValueMethod: props.carSpecification.commentValue,
  }]);

  props.setState(prevState => ({
    ...prevState,
    carValue: "",
    modelValue: "",
    gearBoxValue: "",
    stateValue: "",
    dateValue: "",
    commentValue: "",
  }));

  props.setIsSubmitted(true);
}

  return (
    <div>
      <button onClick={setToTableAndClearForm}>Отправить</button>
      <table border="1" id="myTable">
        <thead>
          <tr>
            <th>Марка</th>
            <th>Модель</th>
            <th>КПП</th>
            <th>Состояние</th>
            <th>Год выпуска</th>
            <th>Комментарий</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody id="tBody">
            {cars.map((car, index) => {
              return <tr key={car.id}>
                <td>{car.carValueMethod}</td>
                <td>{car.modelValueMethod}</td>
                <td>{car.gearBoxValueMethod}</td>
                <td>{car.stateValueMethod}</td>
                <td>{car.dateValueMethod}</td>
                <td>{car.commentValueMethod}</td>
                <td><button onClick={() => {setState(cars.filter((car, i) => index != i))}}>Удалить</button></td>
              </tr>
            })} 
        </tbody>
      </table>
    </div>
  )
}
