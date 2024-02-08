document.addEventListener("DOMContentLoaded", function() {
    let bustOption = document.getElementById("bust");
    let waistOption = document.getElementById("waist");
    let hipOption = document.getElementById("hip");
    let highHipOption = document.getElementById("high-hip");

    for (let i =  30; i <=  120; i +=  0.5) {
        let opt = document.createElement('option');
        opt.value = i.toString();
        opt.textContent = i.toString();
        bustOption.appendChild(opt);
    }
    for (let i =  30; i <=  120; i +=  0.5) {
        let opt = document.createElement('option');
        opt.value = i.toString();
        opt.textContent = i.toString();
        waistOption.appendChild(opt);
    }
    for (let i =  30; i <=  120; i +=  0.5) {
        let opt = document.createElement('option');
        opt.value = i.toString();
        opt.textContent = i.toString();
        hipOption.appendChild(opt);
    }
    for (let i =  30; i <=  120; i +=  0.5) {
        let opt = document.createElement('option');
        opt.value = i.toString();
        opt.textContent = i.toString();
        highHipOption.appendChild(opt);
    }

})