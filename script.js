document.addEventListener("DOMContentLoaded", function() {
    // Fade in the page on load
    document.body.style.opacity = 1;

    // Attach click event listeners to all links
    const links = document.querySelectorAll("a");
    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent the default link behavior
            const destination = this.href; // Store the link's href

            // Fade out the body
            document.body.style.transition = 'opacity 0.5s ease-out';
            document.body.style.opacity = '0';

            // Redirect after the fade out
            setTimeout(function() {
                window.location.href = destination;
            }, 500); // Wait 500ms before redirecting
        });
    });
});

