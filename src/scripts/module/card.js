var leftButtons = document.querySelectorAll('button.left');
var rightButtons = document.querySelectorAll('button.right');
var counters = document.querySelectorAll('input.counter');

for (let i = 0; i < leftButtons.length; i++) {
    leftButtons[i].addEventListener('click', function () {
        let value = parseInt(counters[i].value);
        if (value > 1) {
            counters[i].value = value - 1;
        }
    });

    rightButtons[i].addEventListener('click', function () {
        counters[i].value = parseInt(counters[i].value) + 1;
    });
}
