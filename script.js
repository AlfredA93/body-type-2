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
    result.textContent = "";

    if (isNaN(bust) || isNaN(waist) || isNaN(hip) || isNaN(highHip)) {
      result.textContent =
        "Please select a number value for all the options provided";
    } else {
      result.textContent = "Your body shape is: ";
    }

    if (
      // Bottom Hourglass
      hip - bust >= 3.6 * 2.54 &&
      hip - bust < 10 * 2.54 &&
      hip - waist >= 9 * 2.54 &&
      highHip / waist < 1.193
    ) {
      result.textContent += "Bottom Hourglass";
    } else if (
      // Top Hourglass
      bust - hip > 1 * 2.54 &&
      bust - hip < 10 * 2.54 &&
      bust - waist >= 9 * 2.54
    ) {
      result.textContent += "Top Hourglass";
    } else if (
      // Hourglass
      bust - hip < 1 * 2.54 && 
      (bust - waist > 9 * 2.54 ||
      hip - waist >= 10 * 2.54)
    ) {
      result.textContent += "Hourglass";
    } else if (
      // Spoon
      hip - bust >= 2 * 2.54 &&
      hip - waist < 7 * 2.54 &&
      highHip / waist >= 1.93
    ) {
      result.textContent += "Spoon";
    } else if (
      // Triangle
      hip - bust >= 3.6 * 2.54 &&
      hip - waist < 9 * 2.54
    ) {
      result.textContent += "Triangle";
    } else if (
      // Inverted Triangle
      bust - hip >= 3.6 * 2.54 &&
      bust - waist < 9 * 2.54
    ) {
      result.textContent += "Inverted Triangle";
    } else if (
      // Rectangle
      hip - bust < 3.6 * 2.54 &&
      bust - hip < 3.6 * 2.54 &&
      bust - waist < 9 * 2.54 &&
      hip - waist < 10 * 2.54
    ) {
      result.textContent += "Rectangle";
    } else {
      // Unknown
      result.textContent += "The measurements seem to be outside the normal range for body shapes. Please check the measurements and try again.";
    }
  });
});
