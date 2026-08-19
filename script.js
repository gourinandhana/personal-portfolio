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


// 4. CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been validated successfully.`);

        contactForm.reset();
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
