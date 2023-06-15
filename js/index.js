var modalButtons = document.querySelectorAll('.modal-button');

modalButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modalId = button.dataset.modal; 
        var modal = document.querySelector(modalId); 
        modal.classList.add('active'); 
    });
});

var modals = document.querySelectorAll('.modal');

modals.forEach(function(modal) {
    modal.addEventListener('click', function(event) {
        if (event.target === modal || event.target.getAttribute('data-close') === 'true') {
            modal.classList.remove('active');
        }
    });
});

var modalCloseButtons = document.querySelectorAll('.modal-close-button');

modalCloseButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modal = button.closest('.modal'); 
        modal.classList.remove('active'); 
    });
});