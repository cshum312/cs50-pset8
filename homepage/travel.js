document.addEventListener('DOMContentLoaded', function() {

    // travel: Change content based on dropdown menu
    let travelSelect = document.getElementById('travelSelect');
    travelSelect.addEventListener('change', function() {

        // Set all display to none
        for (let otherDiv of document.querySelectorAll('#travel div')) {
            otherDiv.style.display = 'none';
        }

        // Return value from travelSelect option as Id for div element to display
        let selectDiv = document.getElementById(this.value);
        selectDiv.style.display = 'block';
    });

});