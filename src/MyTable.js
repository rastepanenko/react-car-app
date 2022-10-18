import React, { useState } from 'react'

export default function MyTable() {
  const [cars, setState] = useState([]);

  let carInfo = [];
function addTableRow() {
  var carValueMethod = document.getElementById("Car").value;
  
  var modelValueMethod = document.getElementById("Model").value;

  var gearBoxValue = document.getElementsByName("GearBox");
  var checkedGearBoxMethod;     
  for ( var i = 0; i < gearBoxValue.length; i++) {
    if(gearBoxValue[i].checked) {
      checkedGearBoxMethod = gearBoxValue[i].value;
      break;
    }
    else {
    gearBoxValue[i].value = "Не выбрано";
    checkedGearBoxMethod = gearBoxValue[i].value;
    }
  }

  var stateValue = document.getElementById("State");
    var checkedStateMethod;
    if(stateValue.checked) {
      checkedStateMethod = stateValue.value;
      }
    else {
      stateValue.value = "Б/У";
      checkedStateMethod = stateValue.value;
      }

  var dateValueMethod = document.getElementById("Date").value;

  var commentValueMethod = document.getElementById("Comment").value;

  setState([...cars, {
    carValue: carValueMethod,
    modelValue: modelValueMethod,
    gearBoxValue: checkedGearBoxMethod,
    stateValue: checkedStateMethod,
    dateValue: dateValueMethod,
    commentValue: commentValueMethod,
  }]);

  //var removeButton = document.getElementById("RemoveButton");
  //removeButton.type = "button";
  //removeButton.value = "Удалить";
  //removeButton.onClick = () => {
  //  tr.remove();
  //};
  //var td = document.createElement('td');
  //td.appendChild(removeButton);
  //tr.appendChild(td);

  document.getElementById("Car").selectedIndex = 0;
  document.getElementById("Model").selectedIndex = 0;
  gearBoxValue[i].checked = false;
  document.getElementById("State").checked = false;
  document.getElementById("Date").value = "";
  document.getElementById("Comment").value = "";
  }

  return (
    <div>
      <button onClick={addTableRow}>Отправить</button>
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
                <td>{car.carValue}</td>
                <td>{car.modelValue}</td>
                <td>{car.gearBoxValue}</td>
                <td>{car.stateValue}</td>
                <td>{car.dateValue}</td>
                <td>{car.commentValue}</td>
                <td><button onClick={() => {setState(cars.filter((car, i) => index != i))}}>Удалить</button></td>
              </tr>
            })} 
        </tbody>
      </table>
    </div>
  )
}
