
    // Get the current page's URL
    const currentPageUrl = window.location.href;
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.btn-nav');

    // Loop through each navigation link
    navLinks.forEach(link => {
        // Check if the link's href matches the current page's URL
        if (link.href === currentPageUrl) {
            // Add the 'active' class to the link
            link.classList.add('active');
        }
    });