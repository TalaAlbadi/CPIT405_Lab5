
      // CPIT405 Lab 5 Make CV Interactive 


const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});



 // TASK 2 show more / less button 

const aboutBtn = document.getElementById("about-btn");
const moreAbout = document.getElementById("more-about");

aboutBtn.addEventListener("click", function() {
    moreAbout.hidden = !moreAbout.hidden;

    if (moreAbout.hidden) {
        aboutBtn.textContent = "Show More";
    } else {
        aboutBtn.textContent = "Show Less";
    }
});


// TASK 3  dynamic projects

const projects = [
    {
        title: "Personal CV Website",
        description: "Created a personal CV website with HTML, CSS, and JavaScript.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Restaurant Catering Management System",
        description: "Developed a Java application using object-oriented programming and design patterns.",
        category: "Programming",
        technologies: ["Java", "OOP", "Design Patterns"]
    },
    {
        title: "NAWA - AI Experience Planner",
        description: "Designed a Jeddah-focused mobile application concept for personalized outings and experiences.",
        category: "Programming",
        technologies: ["Flutter", "Firebase", "PostgreSQL"]
    }
];

const projectsContainer = document.getElementById("projects-container");

function displayProjects(projectList) {

    // Prevent duplicate cards
    projectsContainer.innerHTML = "";

    projectList.forEach(function(project) {

        const card = document.createElement("article");
        card.classList.add("project-card");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const category = document.createElement("p");
        category.textContent = "Category: " + project.category;

        const technologies = document.createElement("p");
        technologies.textContent = "Technologies: " + project.technologies.join(", ");

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(category);
        card.appendChild(technologies);

        projectsContainer.appendChild(card);
    });
}

// Display all projects when the page loads
displayProjects(projects);


// filtering projects - task 4

const allBtn = document.getElementById("all-btn");
const webBtn = document.getElementById("web-btn");
const programmingBtn = document.getElementById("programming-btn");

allBtn.addEventListener("click", function() {
    displayProjects(projects);
});

webBtn.addEventListener("click", function() {
    const webProjects = projects.filter(function(project) {
        return project.category === "Web";
    });

    displayProjects(webProjects);
});

programmingBtn.addEventListener("click", function() {
    const programmingProjects = projects.filter(function(project) {
        return project.category === "Programming";
    });

    displayProjects(programmingProjects);
});


// Task 5 Print , save PDF

const printBtn = document.getElementById("print-btn");

printBtn.addEventListener("click", function() {
    window.print();
});




