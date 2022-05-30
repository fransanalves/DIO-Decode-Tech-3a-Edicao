let decrementCount = document.getElementById("decrement-count");
let incrementCount = document.getElementById("increment-count");
let countNumber = document.getElementById("count-number");
let containerCount = document.getElementById("container-count");
let titleCount = document.getElementById("title-count");
let count = 0;

function increment() {
    if(count < 10) {
        count++;
        countNumber.innerHTML = count;
        decrementCount.disabled = false;
        containerCount.style.backgroundColor = '#90E0EF';
        decrementCount.style.opacity = '1';
        titleCount.style.opacity = '1';
    } else {
        incrementCount.disabled = true;
        incrementCount.style.opacity = '0.5';
        titleCount.style.opacity = '0.5';
        containerCount.style.backgroundColor = '#CAF0F8';
    }
};

function decrement() {
    if(count > 0) {
        count--;
        countNumber.innerHTML = count;
        incrementCount.disabled = false;
        incrementCount.style.opacity = '1';
        titleCount.style.opacity = '1';
        containerCount.style.backgroundColor = '#FFB3C6';
    } else {
        decrementCount.disabled = true;
        decrementCount.style.opacity = '0.5';
        titleCount.style.opacity = '0.5';
        containerCount.style.backgroundColor = '#FFE5EC';
    }
};

incrementCount.addEventListener("click", increment);
decrementCount.addEventListener("click", decrement);
