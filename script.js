// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('mainImage');
    
    // Handle image load event
    image.addEventListener('load', function() {
        console.log('Image loaded successfully');
    });
    
    // Handle image error event
    image.addEventListener('error', function() {
        console.error('Failed to load image');
        // You could add a fallback image here if needed
    });
    
    // Optional: Add click to zoom functionality
    image.addEventListener('click', function() {
        if (this.style.transform === 'scale(1.5)') {
            this.style.transform = 'scale(1)';
            this.style.position = 'static';
            this.style.zIndex = 'auto';
        } else {
            this.style.transform = 'scale(1.5)';
            this.style.position = 'relative';
            this.style.zIndex = '1000';
        }
    });
    
    // Optional: Handle window resize for better performance
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Handle resize if needed
            console.log('Window resized');
        }, 250);
    });
    
    // Prevent context menu on image (optional)
    image.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});