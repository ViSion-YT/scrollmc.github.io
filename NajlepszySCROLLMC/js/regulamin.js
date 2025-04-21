document.addEventListener('DOMContentLoaded', () => {

    // --- Aktualny Rok w Stopce ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Animacje przy Scrollowaniu (Intersection Observer) ---
    function setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        if (!animatedElements.length) return; // Jeśli nie ma elementów, nic nie rób

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Przestań obserwować po animacji, aby się nie powtarzała
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Wystarczy 10% widoczności
            rootMargin: "0px 0px -30px 0px" // Triggeruj lekko wcześniej
        });

        animatedElements.forEach(el => { observer.observe(el); });
    }

    // Uruchom obserwatora animacji
    setupScrollAnimations();


    // --- Przycisk "Powrót na górę" ---
    const backToTopButton = document.getElementById('back-to-top-btn');

    if (backToTopButton) {
        // Pokaż/ukryj przycisk w zależności od pozycji scrolla
        window.addEventListener('scroll', () => {
            // Pokaż przycisk, gdy użytkownik przewinie np. 300px w dół
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        // Płynne przewijanie do góry po kliknięciu
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Płynna animacja przewijania
            });
        });
    }

});