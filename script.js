// ===============================
// PHASE 2 - PERSONAL PORTFOLIO
// ===============================


// 1. DYNAMIC GREETING
const greetingElement = document.querySelector("#greeting");

const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = "Good Morning!";
} else if (currentHour < 18) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

greetingElement.textContent = greeting;


// 2. DOM MANIPULATION
const welcomeMessage = document.getElementById("welcome-message");

welcomeMessage.textContent =
    "Welcome to my interactive personal portfolio!";


// 3. MOUSEOVER EVENT
const profileImage = document.querySelector(".profile-image");

profileImage.addEventListener("mouseover", () => {
    profileImage.style.transform = "scale(1.05)";
});

profileImage.addEventListener("mouseout", () => {
    profileImage.style.transform = "scale(1)";
});


// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Stop the form from submitting/reloading
        event.preventDefault();

        // Get values from the form
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Get span elements
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        // Clear previous messages
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        let valid = true;

        // Name validation
        if (name === "") {
            nameError.textContent = " Please enter your name.";
            nameError.style.color = "red";
            valid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailError.textContent = " Please enter your email.";
            emailError.style.color = "red";
            valid = false;
        }
        else if (!emailPattern.test(email)) {
            emailError.textContent = " Please enter a valid email address.";
            emailError.style.color = "red";
            valid = false;
        }

        // Message validation
        if (message === "") {
            messageError.textContent = " Please enter your message.";
            messageError.style.color = "red";
            valid = false;
        }

        // Successful submission
        if (valid) {

            successMessage.textContent =
                ` Thank you, ${name}! Your message has been validated successfully.`;

            successMessage.style.color = "green";
            successMessage.style.display = "block";

            contactForm.reset();
        }

    });

}


// 5. PROJECT DATA
const projects = [
    {
        title: "Pocket Budget",
        description: "A simple budgeting application designed to help users manage their daily expenses.",
        image: "profile.png"
    },
    {
        title: "Student Management System",
        description: "A system for managing student information and academic records.",
        image: "profile.png"
    },
    {
        title: "AI Career Decision Assistant",
        description: "An AI-based system that helps students explore suitable career options.",
        image: "profile.png"
    }
];


// 6. LOOP THROUGH PROJECTS
projects.forEach((project) => {
    console.log(`Project: ${project.title}`);
});
