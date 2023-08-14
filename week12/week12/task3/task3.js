let button = document.getElementById("wrapper-btn");

function calculateBMI(height, weight) {
  let result = parseFloat(document.getElementById("wrapper-result"));
  let heightInput = parseFloat(document.getElementById("wrapper-input1").value);
  let weightInput = parseFloat(document.getElementById("wrapper-input2").value);

  heightInput = Math.pow(height, 2);
  // ИМТ = вес (кг) / (рост (м) * рост (м))
  // weightInput = (weight / (height * 100), 2 );
  weightInput = `${weight / Math.pow(height / 100, 2).toFixed(1)}`;
  result.innerHTML = `Индекс массы тела:${weightInput}`;

  return weightInput;
}
calculateBMI();

document.getElementById("wrapper-btn").onclick = calculateBMI;

// Не пойму почему не отрабатывает! Отправляю в таком виде как есть (. Котик, надеюсь на твою помощь! Отправляю два варианта.

// let button = document.getElementById("wrapper-btn");

// function calculateBMI(height, weight) {
//   let result = document.getElementById("wrapper-result");

//   let heightInput = parseFloat(document.getElementById("wrapper-input1").value);
//   let weightInput = parseFloat(document.getElementById("wrapper-input2").value);

//   let bmi;
//   bmi = weight / Math.pow(height / 100, 2).toFixed(1);
//   result.innerHTML = `Индекс масы тела: ${bmi}`;
// }

// document.getElementById("wrapper-btn").onclick = calculateBMI;
