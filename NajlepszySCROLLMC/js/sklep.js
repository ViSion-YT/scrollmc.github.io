document.addEventListener('DOMContentLoaded', () => {

    // --- Aktualny Rok w Stopce ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Feedback przy kliknięciu przycisku zakupu ---
    const buyButtons = document.querySelectorAll('.shop-buy-btn');

    buyButtons.forEach(button => {
        const originalText = button.querySelector('span').textContent;

        button.addEventListener('click', (e) => {
            // Nie blokujemy przejścia do linku (bo to tylko link), ale dajemy feedback
            button.querySelector('span').textContent = 'Przekierowuję...';
            button.style.opacity = '0.8'; // Lekkie przygaszenie

            // Po chwili wróć do normalnego stanu (na wypadek, gdyby użytkownik nie przeszedł)
            setTimeout(() => {
                // Sprawdź, czy element nadal istnieje na stronie
                const currentButton = document.querySelector(`a[href="${button.href}"].shop-buy-btn`);
                if (currentButton) {
                     currentButton.querySelector('span').textContent = originalText;
                     currentButton.style.opacity = '1';
                }
            }, 1500); // Czas trwania feedbacku
        });
    });

    // --- Opcjonalnie: Dodatkowe animacje/interakcje ---

    // Przykład: Dodanie subtelnej animacji do ikon przedmiotów przy najechaniu na kartę
    const shopItems = document.querySelectorAll('.shop-item');
    shopItems.forEach(item => {
        const icon = item.querySelector('.item-icon i'); // Znajdź ikonę FontAwesome
        if (icon) {
            item.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.2) rotate(-5deg)';
                icon.style.transition = 'transform 0.3s ease';
            });
            item.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        }
    });

});