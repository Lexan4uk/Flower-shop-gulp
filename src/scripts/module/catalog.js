const sortButtons = document.querySelectorAll('.sort-button');

sortButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (button.classList.contains('active')) { 
        var img = button.querySelector('img')
        if (img.classList.contains('flip'))
            img.classList.remove('flip') 
        else
            img.classList.add('flip')
    }
    else {
        sortButtons.forEach(button => {
            button.classList.remove('active')
            var img = button.querySelector('img')
            if (img.classList.contains('flip'))
                img.classList.remove('flip') 
        })
        button.classList.add('active')
    }
    });
});