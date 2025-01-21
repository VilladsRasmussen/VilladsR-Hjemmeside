// Scroll funktion for header //

window.addEventListener('scroll', function() {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
  const omMigIndhold = document.querySelector('.om-mig-indhold');
  if (!omMigIndhold.classList.contains('fadeIn') && window.scrollY > 100) {
    omMigIndhold.classList.remove('hidden');
    omMigIndhold.classList.add('fadeIn');
  }
});

// Video optimization //

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('heroVideo');
    
    video.addEventListener('loadeddata', function() {
        video.play().catch(function(error) {
            console.log("Video play failed:", error);
        });
    });

    video.addEventListener('error', function(e) {
        console.log("Video error:", e);
    });

// Side menu //

    document.getElementById('menuBtn').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('sideMenu').classList.toggle('show');
    });
});
