document.addEventListener("DOMContentLoaded", function () {
  // Toggle icon navbar
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  // Scroll sections
  let sections = document.querySelectorAll("section");
  let navlinks = document.querySelectorAll("nav a");
  console.log("Initialized Successfully:");

  window.addEventListener("scroll", () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
      let offset = sec.offsetTop - 100;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + sec.offsetHeight) {
        // Active navbar links
        navlinks.forEach((link) => {
          link.classList.remove("active");
        });

        document.querySelector(`nav a[href*="${id}"]`).classList.add("active");

        // Active sections for animation on scroll
        sec.classList.add("show-animate");
      } else {
        sec.classList.remove("show-animate");
      }
    });

    // Sticky header
    let header = document.querySelector("header");
    header.classList.toggle("sticky", top > 100);
  });

  // Click event for navbar links
  navlinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    });
  });

  var ldicon = document.getElementById("ldicon");

  ldicon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      ldicon.src = "of-bulb.png";
    } else {
      ldicon.src = "on-bulb.png";
    }
  };

  // JavaScript to scroll to projects section when "Projects" button is clicked
  document.getElementById("projects-button").addEventListener("click", function (event) {
    event.preventDefault();
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  });

  // Form validation
  const form = document.querySelector("form[action='https://formsubmit.co/jhaycole85@gmail.com']");

  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      event.preventDefault(); // Prevent form submission
      return false;
    }

    alert("Credentials received");
  });
});
