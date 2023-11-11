document.addEventListener('DOMContentLoaded', function() {

    // index: Change color when mouse over pride banner
    let lgbt = document.querySelector('#LGBT');
    let bodyColor = document.querySelector('#bodyColor');
    let lgbtClick = 0;

    lgbt.addEventListener('click', function() {
        lgbtClick = lgbtClick + 1;
        colorList = ['#E40303', '#FF8C00', '#FFED00', '#008026', '#24408E', '#732982'];

        // Reset to main color every 5 clicks
        if (lgbtClick % 5 != 0) {
            bodyColor.style.backgroundColor = colorList[Math.floor(Math.random() * colorList.length)];
        } else {
            bodyColor.style.backgroundColor = '#e7e7e7';
        }
    });

});