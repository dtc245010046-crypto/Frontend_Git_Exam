const form = document.querySelector("#registration-form");
const password = document.querySelector("#password");
const confirmation = document.querySelector("#confirmPassword");
const statusMessage = document.querySelector("#form-status");

function validatePasswordMatch() {
    if (confirmation.value && confirmation.value !== password.value) {
        confirmation.setCustomValidity("Mật khẩu xác nhận chưa khớp.");
    } else {
        confirmation.setCustomValidity("");
    }
}

password.addEventListener("input", validatePasswordMatch);
confirmation.addEventListener("input", validatePasswordMatch);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validatePasswordMatch();

    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        form.reportValidity();
        return;
    }

    statusMessage.classList.remove("d-none");
    statusMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
