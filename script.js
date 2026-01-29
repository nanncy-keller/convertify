const inputValue = document.getElementById("valueInput");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const resultText = document.getElementById("resultValue");
const eduText = document.getElementById("eduText");

// Definir categorias de unidades
const unitCategories = {
  length: ['ft', 'cm', 'm', 'in', 'km', 'mi'],
  weight: ['lb', 'kg'],
  temperature: ['c', 'f']
};

// Função para verificar se duas unidades são compatíveis
function areUnitsCompatible(unit1, unit2) {
  for (let category in unitCategories) {
    if (unitCategories[category].includes(unit1) && unitCategories[category].includes(unit2)) {
      return true;
    }
  }
  return false;
}

function convertUnits() {
  const value = parseFloat(inputValue.value);

  if (isNaN(value)) {
    resultText.textContent = "Please enter a value";
    resultText.className = "result-placeholder";
    eduText.textContent = "";
    return;
  }

  // Verificar se as unidades são compatíveis
  if (!areUnitsCompatible(fromUnit.value, toUnit.value)) {
    resultText.textContent = "Incompatible units!";
    resultText.className = "result-placeholder";
    eduText.textContent = "You cannot convert between different types of measurements (e.g., temperature to length). Please select compatible units.";
    return;
  }

  resultText.className = "result-value";

  if (fromUnit.value === "ft" && toUnit.value === "cm") {
    const result = value * 30.48;
    resultText.textContent = `${result.toFixed(2)} cm`;
    eduText.textContent = "Feet is a unit of length commonly used in construction and engineering, for example to measure walls, rooms, or buildings. In technical contexts, feet are used as decimal values, just like meters. To convert feet to centimeters, multiply the value by 30.48.";
  }

  if (fromUnit.value === "cm" && toUnit.value === "ft") {
    const result = value / 30.48;
    resultText.textContent = `${result.toFixed(2)} ft`;
    eduText.textContent = "Centimeters belong to the metric system, which is based on multiples of ten and used worldwide. When converting centimeters to feet, the result is a decimal value, not feet and inches. To convert centimeters to feet, divide the value by 30.48.";
  }

  if (fromUnit.value === "cm" && toUnit.value === "in") {
    const totalInches = value / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12;
    resultText.textContent = `${totalInches.toFixed(2)} in (${feet}'${inches.toFixed(1)}")`;
    eduText.textContent = "Centimeters are part of the metric system and commonly used to measure human height worldwide. In the US, height is expressed as feet and inches (e.g., 5'9\"). To convert centimeters to inches, divide the value by 2.54.";
  }

  if (fromUnit.value === "in" && toUnit.value === "cm") {
    const result = value * 2.54;
    const feet = Math.floor(value / 12);
    const inches = value % 12;
    const heightFormat = value >= 12 ? ` (${feet}'${inches.toFixed(1)}")` : '';
    resultText.textContent = `${result.toFixed(2)} cm${heightFormat}`;
    eduText.textContent = "Inches are commonly used in the United States to measure human height and smaller dimensions. One inch equals exactly 2.54 centimeters. To convert inches to centimeters, multiply the value by 2.54.";
  }

  if (fromUnit.value === "lb" && toUnit.value === "kg") {
    const result = value * 0.453592;
    resultText.textContent = `${result.toFixed(2)} kg`;
    eduText.textContent = "Pounds are commonly used in the United States to measure body weight and everyday objects. Kilograms are part of the metric system and used internationally. To convert pounds to kilograms, multiply the value by 0.453592.";
  }

  if (fromUnit.value === "kg" && toUnit.value === "lb") {
    const result = value / 0.453592;
    resultText.textContent = `${result.toFixed(2)} lb`;
    eduText.textContent = "Kilograms are part of the metric system and are widely used around the world. Pounds are commonly used in the United States to measure weight. To convert kilograms to pounds, divide the value by 0.453592.";
  }

  if (fromUnit.value === "m" && toUnit.value === "ft") {
    const result = value * 3.28084;
    resultText.textContent = `${result.toFixed(2)} ft`;
    eduText.textContent = "Meters are part of the metric system and are used worldwide for technical and everyday measurements. When converting meters to feet, the result is a decimal value, commonly used in construction and engineering. To convert meters to feet, multiply the value by 3.28084.";
  }

  if (fromUnit.value === "ft" && toUnit.value === "m") {
    const result = value / 3.28084;
    resultText.textContent = `${result.toFixed(2)} m`;
    eduText.textContent = "Feet are a unit of length commonly used in technical measurements in the United States. When converting feet to meters, the value is expressed in the metric system. To convert feet to meters, divide the value by 3.28084.";
  }

  if (fromUnit.value === "in" && toUnit.value === "ft") {
    const result = value / 12;
    resultText.textContent = `${result.toFixed(2)} ft`;
    eduText.textContent = "There are 12 inches in one foot. This conversion is commonly used when working with measurements in the imperial system. To convert inches to feet, divide the value by 12.";
  }

  if (fromUnit.value === "ft" && toUnit.value === "in") {
    const result = value * 12;
    resultText.textContent = `${result.toFixed(2)} in`;
    eduText.textContent = "One foot equals exactly 12 inches. This is a fundamental conversion in the imperial measurement system. To convert feet to inches, multiply the value by 12.";
  }

  if (fromUnit.value === "m" && toUnit.value === "in") {
    const totalInches = value * 39.3701;
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12;
    resultText.textContent = `${totalInches.toFixed(2)} in (${feet}'${inches.toFixed(1)}")`;
    eduText.textContent = "Meters are part of the metric system used worldwide. One meter equals approximately 39.37 inches. In the US, height is commonly shown as feet and inches. To convert meters to inches, multiply the value by 39.3701.";
  }

  if (fromUnit.value === "in" && toUnit.value === "m") {
    const result = value / 39.3701;
    resultText.textContent = `${result.toFixed(2)} m`;
    eduText.textContent = "Inches are part of the imperial system commonly used in the United States. To convert inches to the metric system (meters), divide the value by 39.3701.";
  }

  if (fromUnit.value === "km" && toUnit.value === "mi") {
    const result = value * 0.621371;
    resultText.textContent = `${result.toFixed(2)} mi`;
    eduText.textContent = "Kilometers are part of the metric system used worldwide for measuring distances. Miles are commonly used in the United States and United Kingdom. To convert kilometers to miles, multiply the value by 0.621371.";
  }

  if (fromUnit.value === "mi" && toUnit.value === "km") {
    const result = value * 1.60934;
    resultText.textContent = `${result.toFixed(2)} km`;
    eduText.textContent = "Miles are commonly used in the United States and United Kingdom for measuring distances, especially for road trips and GPS navigation. To convert miles to kilometers, multiply the value by 1.60934.";
  }

  if (fromUnit.value === "c" && toUnit.value === "f") {
    const result = (value * 9/5) + 32;
    resultText.textContent = `${result.toFixed(1)} °F`;
    eduText.textContent = "Celsius is used worldwide for measuring temperature. Fahrenheit is commonly used in the United States. Water freezes at 0°C (32°F) and boils at 100°C (212°F). To convert Celsius to Fahrenheit, multiply by 9/5 and add 32.";
  }

  if (fromUnit.value === "f" && toUnit.value === "c") {
    const result = (value - 32) * 5/9;
    resultText.textContent = `${result.toFixed(1)} °C`;
    eduText.textContent = "Fahrenheit is commonly used in the United States for measuring temperature. Celsius is the standard in most countries worldwide. Room temperature is about 72°F (22°C). To convert Fahrenheit to Celsius, subtract 32 and multiply by 5/9.";
  }
}

inputValue.addEventListener("input", convertUnits);
fromUnit.addEventListener("change", convertUnits);
toUnit.addEventListener("change", convertUnits);
