        // Mobile menu toggle
        const toggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const bar1 = document.getElementById('bar1');
        const bar2 = document.getElementById('bar2');
        const bar3 = document.getElementById('bar3');

        toggle.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');

            if (!isOpen) {
                bar1.style.transform = 'translateY(7px) rotate(45deg)';
                bar2.style.opacity = '0';
                bar3.style.transform = 'translateY(-7px) rotate(-45deg)';
            } else {
                bar1.style.transform = '';
                bar2.style.opacity = '';
                bar3.style.transform = '';
            }
        });