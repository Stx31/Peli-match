document.addEventListener('DOMContentLoaded', function() {
    function setupDropdown(menuSelector, dropdownSelector) {
        var menu = document.querySelector(menuSelector);
        var dropdown = document.querySelector(dropdownSelector);

        menu.addEventListener('mouseover', function() {
            dropdown.classList.add('show');
        });

        menu.addEventListener('mouseout', function(event) {
            if (!menu.contains(event.relatedTarget)) {
                dropdown.classList.remove('show');
            }
        });

        dropdown.addEventListener('mouseover', function() {
            dropdown.classList.add('show');
        });

        dropdown.addEventListener('mouseout', function(event) {
            if (!menu.contains(event.relatedTarget)) {
                dropdown.classList.remove('show');
            }
        });
    }

    setupDropdown('.profile-menu', '.profile-menu .dropdown');
    setupDropdown('.friends-menu', '.friends-menu .dropdown');
});
