document.addEventListener("DOMContentLoaded", function () {
  let bustOption = document.getElementById("bust");
  let waistOption = document.getElementById("waist");
  let hipOption = document.getElementById("hip");
  let highHipOption = document.getElementById("high-hip");

  for (let i = 30; i <= 120; i += 0.5) {
    let opt = document.createElement("option");
    opt.value = i.toString();
    opt.textContent = i.toString();
    bustOption.appendChild(opt);
  }
  for (let i = 30; i <= 120; i += 0.5) {
    let opt = document.createElement("option");
    opt.value = i.toString();
    opt.textContent = i.toString();
    waistOption.appendChild(opt);
  }
  for (let i = 30; i <= 120; i += 0.5) {
    let opt = document.createElement("option");
    opt.value = i.toString();
    opt.textContent = i.toString();
    hipOption.appendChild(opt);
  }
  for (let i = 30; i <= 120; i += 0.5) {
    let opt = document.createElement("option");
    opt.value = i.toString();
    opt.textContent = i.toString();
    highHipOption.appendChild(opt);
  }

  let calculateButton = document.getElementById("calculate");
  calculateButton.addEventListener("click", function () {
    let bust = parseFloat(bustOption.value);
    let waist = parseFloat(waistOption.value);
    let hip = parseFloat(hipOption.value);
    let highHip = parseFloat(highHipOption.value);

    let result = document.getElementById("result");
    result.textContent = "Your body shape is: ";

    // Bottom Hourglass
    if (
      hip - bust >= 3.6 * 2.54 &&
      hip - bust < 10 * 2.54 &&
      hip - waist >= 9 * 2.54 &&
      highHip / waist < 1.193
    ) {
      result.textContent += "Bottom Hourglass";
    }

    // Top Hourglass
    if (
      bust - hip > 1 * 2.54 &&
      bust - hip < 10 * 2.54 &&
      bust - waist >= 9 * 2.54
    ) {
      result.textContent += "Top Hourglass";
    }

    // Hourglass
    if (
      (bust - hip < 1 * 2.54 && bust - waist > 9 * 2.54) ||
      hip - waist >= 10 * 2.54
    ) {
      result.textContent += "Hourglass";
    }

    // Spoon
    if (
      hip - bust >= 2 * 2.54 &&
      hip - waist < 7 * 2.54 &&
      highHip / waist >= 1.93
    ) {
      result.textContent += "Spoon";
    }

    // Triangle
    if (
        hip - bust >= 3.6 * 2.54 && 
        hip - waist < 9 * 2.54
        ) {
      result.textContent += "Triangle";
    }

    // Inverted Triangle
    if (
        bust - hip >= 3.6 * 2.54 && 
        bust - waist < 9 * 2.54
        ) {
      result.textContent += "Inverted Triangle";
    }

    // Rectangle
    if (
      hip - bust < 3.6 * 2.54 &&
      bust - hip < 3.6 * 2.54 &&
      bust - waist < 9 * 2.54 &&
      hip - waist < 10 * 2.54
    ) {
      result.textContent += "Rectangle";
    }

    // if (bust > waist && bust > hip) {
    //     result.textContent += "Triangle";
    // } else if (waist > bust && waist > hip) {
    //     result.textContent += "Rectangle";
    // } else if (hip > bust && hip > waist) {
    //     result.textContent += "Pear";
    // } else if (highHip > bust && highHip > waist) {
    //     result.textContent += "Apple";
    // } else {
    //     result.textContent += "Hourglass";
    // }
  });
});
