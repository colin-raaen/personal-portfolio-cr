//Let forms load first before executing
document.addEventListener('DOMContentLoaded', function()
{
    // Scroll to the top of the page on load or refresh
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    // get and store menu toggle DOM item
    const hamMenu = document.querySelector('.ham-menu');
    // get and store off screen menu
    const offScreenMenu = document.querySelector('.off-screen-menu');

    // Event listener for ham menu
    hamMenu.addEventListener('click', () => {
        // toggle ham menu and off screen menu to active to show the menu
      hamMenu.classList.toggle('active');
      offScreenMenu.classList.toggle('active');

    });

    // create intersection observer, observes multiple elements at the same time,
    // runs everytime the visibility of one of the observed elements changes
    const observer = new IntersectionObserver((entries) => {
        // Loop over each entry
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                // if intersecting, add show which will make it visible
                entry.target.classList.add('show');
            }
            // else, rehide element to allow transitioning again
            else{
                entry.target.classList.remove('show');
            }

        });
    });

    // get and store all sections with "section"
    const sections = document.querySelectorAll('.hide');
    // observe each one of the elements
    sections.forEach((el) => observer.observe(el));
});
