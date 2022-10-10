import React from 'react'

export default function ApplyButton() {
  
    function addTableRow() {
        var table = document.getElementById("myTable");
        
        var tr = document.createElement("tr");
        var tBody = document.getElementById("tBody");
        tBody.appendChild(tr);
        
        var carValue = document.getElementById("Car").value;
          
        var modelValue = document.getElementById("Model").value;
          
        var gearBoxValue = document.getElementsByName('GearBox');
        var checkedGearBoxMethod;
        var isChecked;
        
        for ( var i = 0; i < gearBoxValue.length; i++) {
          if(gearBoxValue[i].checked) {
            checkedGearBoxMethod = gearBoxValue[i];
            isChecked = true;
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
          
        var dateValue = document.getElementById("Date").value;
          
        var commentValue = document.getElementById("Comment").value;
        
        var trBody = document.getElementById("trBody");
        
        var tdCar = document.createElement('td');
        tdCar.innerText = carValue;
        tr.appendChild(tdCar);
        
        var tdModel = document.createElement('td');
        tdModel.innerText = modelValue;
        tr.appendChild(tdModel);
        
        var tdGearBox = document.createElement('td'); 
        tr.appendChild(tdGearBox);
        if (!isChecked) {
          tdGearBox.innerText = "Не выбрано";
        }
        else {
          tdGearBox.innerText = checkedGearBoxMethod.value;
        }
        
        var tdState = document.createElement('td');
        tdState.innerText = checkedStateMethod;
        tr.appendChild(tdState);
        
        var tdDate = document.createElement('td');
        tdDate.innerText = dateValue;
        tr.appendChild(tdDate);
        
        var tdComment = document.createElement('td');
        tdComment.innerText = commentValue;
        tr.appendChild(tdComment);
        
        var removeButton = document.createElement("input");
        removeButton.type = "button";
        removeButton.value = "Удалить";
        removeButton.onclick = () => {
          tr.remove();
        };
        
        var td = document.createElement('td');
        td.appendChild(removeButton);
        tr.appendChild(td);
        
        document.getElementById("Car").selectedIndex = 0;
        document.getElementById("Model").selectedIndex = 0;
        checkedGearBoxMethod.checked = false;
        document.getElementById("State").checked = false;
        document.getElementById("Date").value = "";
        document.getElementById("Comment").value = "";
        
        
      }
    return <button onClick={addTableRow}>Отправить</button>;
}

