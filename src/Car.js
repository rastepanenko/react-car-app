import React from 'react'

export default function Car() {
    function clearModelsList(modelsElement) {
        var modelsElementLength = modelsElement.options.length;
        
        for(let i = 1; i <  modelsElement.options.length; i++) {
        console.log(modelsElement.options[i].remove());
          if (modelsElement[i] !== undefined) {
            console.log(modelsElement[i]);
            modelsElement[i].remove();
          }
          modelsElement.options[i].remove();
        }
      }
      
      function addCarModelsList(modelsElement) {
        var car = document.getElementById("Car");
        
        var models = {
          Audi: ["A3", "A4", "A5"],
          BMW: ["3-Series", "5-Series", "7-Series"],
          MercedesBenz: ["A-Class", "C-Class", "E-Class"]
        };
        
        for(let i = 0; i < models[car.value].length; i++) {
           var option = document.createElement("option");
            option.innerText = models[car.value][i];
            document.getElementById("Model").appendChild(option);
        }
      }

    function getCarModels() {
        var modelsElement = document.getElementById("Model");
        
        clearModelsList(modelsElement);
        addCarModelsList(modelsElement);
    }

  return (
    <div>
      <select name="Car" id="Car" onChange={getCarModels}>
	    <option disabled={true} value="МАРКА">МАРКА</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="MercedesBenz">MercedesBenz</option>
      </select>
    </div>
  )
}
