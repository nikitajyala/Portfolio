// Simple welcome message

console.log("Welcome to Nikita's Portfolio!");


// Smooth scroll for navigation

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const section = document.querySelector(
            this.getAttribute("href")
        );

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});
