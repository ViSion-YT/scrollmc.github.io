document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const pageContent = document.getElementById('page-content');
    const copyIpButtons = document.querySelectorAll('[id^="copy-ip-"]');
    const ipAddressElement = document.getElementById('ip-address');
    // Sprawdź czy element IP istnieje zanim odczytasz textContent
    const ipAddress = ipAddressElement ? ipAddressElement.textContent.trim() : 'scrollmc.pl';
    const currentYearSpan = document.getElementById('current-year');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNavLinks = document.querySelector('.mobile-nav-links'); // Zmieniono selektor na poprawny


    // Plik js/script.js - upewnij się, że selektor dla mobilnego menu jest poprawny
document.addEventListener('DOMContentLoaded', () => {
    // ... (reszta kodu: loader, copyIp, animations, currentYear) ...

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNavLinks = document.querySelector('.mobile-nav-links'); // Ten selektor jest kluczowy

    // --- Menu Mobilne ---
    if (mobileMenuToggle && mobileNavLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileNavLinks.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (mobileNavLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Zamknij menu po kliknięciu linku (ważne dla linków #)
        mobileNavLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                 if (mobileNavLinks.classList.contains('active')) {
                     // Nie zamykaj, jeśli to link do zewnętrznego sklepu
                     if (!link.classList.contains('mobile-shop-link') || !link.target === '_blank') {
                          mobileNavLinks.classList.remove('active');
                          mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                          mobileMenuToggle.querySelector('i').classList.add('fa-bars');
                     }
                 }
            });
        });
    }
    // ... (reszta kodu, np. chowanie headera) ...
});
    // --- Ekran Ładowania ---
    window.onload = () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            pageContent.classList.remove('hidden');
            pageContent.style.display = 'block';
            triggerVisibleAnimations();
            setupScrollAnimations();
        }, 500);
    };

    // --- Kopiowanie IP ---
    copyIpButtons.forEach(button => {
        // Sprawdź, czy elementy ikon istnieją
        const copyIcon = button.querySelector('.copy-icon');
        const copiedIcon = button.querySelector('.copied-icon');
        const feedbackElement = button.id === 'copy-ip-hero-btn'
            ? document.getElementById('copy-feedback-hero')
            : null;

        button.addEventListener('click', () => {
            navigator.clipboard.writeText(ipAddress)
                .then(() => {
                    button.classList.add('copied');
                    if (feedbackElement) {
                         feedbackElement.textContent = 'Skopiowano!';
                         feedbackElement.classList.add('show');
                    }
                    setTimeout(() => {
                        button.classList.remove('copied');
                        if (feedbackElement) {
                            feedbackElement.classList.remove('show');
                        }
                    }, 1500);
                })
                .catch(err => {
                    console.error('Nie udało się skopiować IP: ', err);
                    if (feedbackElement) {
                        feedbackElement.textContent = 'Błąd!';
                        feedbackElement.classList.add('show');
                         setTimeout(() => { feedbackElement.classList.remove('show'); }, 1500);
                    }
                    button.style.borderColor = '#ff6b6b';
                    setTimeout(() => { button.style.borderColor = ''; }, 1500);
                });
        });
    });

    // --- Animacje przy Scrollowaniu ---
     function setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        if (!animatedElements.length) return;
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
        animatedElements.forEach(el => { observer.observe(el); });
    }

    // --- Trigger animacji dla elementów widocznych na starcie ---
     function triggerVisibleAnimations() {
        const heroElements = document.querySelectorAll('.hero .animate-slide-in-bottom');
        // Animacja CSS sama się uruchamia, nie potrzeba dodatkowej logiki tutaj
     }

    // --- Aktualny Rok w Stopce ---
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Menu Mobilne ---
    if (mobileMenuToggle && mobileNavLinks) { // Upewnij się, że oba elementy istnieją
        mobileMenuToggle.addEventListener('click', () => {
            mobileNavLinks.classList.toggle('active'); // Pokaż/ukryj kontener z linkami
            const icon = mobileMenuToggle.querySelector('i');
            if (mobileNavLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Zamknij menu po kliknięciu linku w menu mobilnym
        mobileNavLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                 if (mobileNavLinks.classList.contains('active')) {
                     mobileNavLinks.classList.remove('active');
                     mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                     mobileMenuToggle.querySelector('i').classList.add('fa-bars');
                 }
            });
        });
    }

    // Opcjonalnie: Chowanie headera przy scrollowaniu w dół
    // let lastScrollTop = 0;
    // window.addEventListener("scroll", function(){
    //    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    //    if (currentScroll > lastScrollTop && currentScroll > 100){ // Scroll w dół i dalej niż 100px
    //       document.body.classList.add("scrolling-down");
    //    } else { // Scroll w górę
    //       document.body.classList.remove("scrolling-down");
    //    }
    //    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    // }, false);


});