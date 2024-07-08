(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            var form = document.getElementById("registrationForm");
            form.addEventListener(
                "submit",
                function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add("was-validated");
                },
                false
            );
        },
        false
    );
})();
document.forms.addEventListener("submit", function () {
    var inputs = document.getElementsByTagName("input");
    localStorage.setItem("firstName", inputs[0].value);
    localStorage.setItem("lastName", inputs[1].value);
    localStorage.setItem("password", inputs[2].value);
    location.href = "regester.html";
});
