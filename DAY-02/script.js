alert("Hello, World!");

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // Handle form submission
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("reset", function(event) {
        // Handle form reset
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        // Process the form data
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#myForm");

    form.addEventListener("submit", function (event) {

        // Stop page reload
        event.preventDefault();

        // Get all form data
        const formData = new FormData(form);

        console.log("===== FORM DATA =====");

        for (const [key, value] of formData.entries()) {
            console.log(key + ":", value);
        }

        console.log("====================");

    });

});
