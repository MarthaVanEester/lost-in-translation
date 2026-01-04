
      document.querySelectorAll('.accordion-btn').forEach(button => {
        button.addEventListener('click', () => {
          const content = button.nextElementSibling;

          content.classList.toggle('hidden');

          // Update + / -
          const icon = button.querySelector('span');
          icon.textContent = content.classList.contains('hidden') ? '+' : '-';
        });
      });

    const navToggle = document.getElementById("nav-toggle");
    const navMobile = document.getElementById("nav-mobile");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbar = document.getElementById("navbar");

    /* -------------------------
      1) SLIDE-DOWN MOBILE MENU
      ------------------------- */
    navToggle.addEventListener("click", () => {
      if (navMobile.classList.contains("hidden")) {
        navMobile.classList.remove("hidden");
        navMobile.style.maxHeight = navMobile.scrollHeight + "px";
      } else {
        navMobile.style.maxHeight = "0px";
        setTimeout(() => navMobile.classList.add("hidden"), 300);
      }
    });

    /* -------------------------
      2) ACTIVE LINK HIGHLIGHTING
      ------------------------- */
    function setActiveLink(name) {
      navLinks.forEach(link => {
        if (link.dataset.link === name) {
          link.classList.add("text-blue-600", "font-semibold");
        } else {
          link.classList.remove("text-blue-600", "font-semibold");
        }
      });
    }

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        const page = link.dataset.link;
        setActiveLink(page);
      });
    });

    /* -------------------------
      3) AUTO-HIDE ON SCROLL
      ------------------------- */
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPos > lastScrollTop && scrollPos > 50) {
        // scrolling down
        navbar.style.transform = "translateY(-100%)";
      } else {
        // scrolling up
        navbar.style.transform = "translateY(0)";
      }

      lastScrollTop = scrollPos <= 0 ? 0 : scrollPos;
    });
 
    