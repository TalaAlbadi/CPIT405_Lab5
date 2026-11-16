
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

