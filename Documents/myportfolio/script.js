document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.querySelector('.more-projects-btn');
    const extraProjects = document.querySelectorAll('.extra-project');

    console.log("Button found:", seeMoreBtn); // This should say 'button' in the console
    console.log("Hidden items found:", extraProjects.length); // Should say '1' (or more)

    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevents the page from jumping
            console.log("Button was clicked!");

            extraProjects.forEach(project => {
                project.classList.remove('d-none');
                project.classList.add('reveal-item');
            });

            // Hide the button container
            const wrapper = document.querySelector('.see-more-wrap');
            if (wrapper) {
                wrapper.style.display = 'none';
            }
        });
    }
});