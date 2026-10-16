(() => {
    const form = document.getElementById('signupForm');
    const password = document.getElementById('password');
    const confirmation = document.getElementById('confirmPassword');
    const feedback = document.getElementById('confirmPasswordFeedback');
    const success = document.getElementById('signupSuccess');

    const validateConfirmation = () => {
        if (confirmation.value && confirmation.value !== password.value) {
            confirmation.setCustomValidity('Mật khẩu xác nhận chưa khớp.');
            feedback.textContent = 'Mật khẩu xác nhận chưa khớp.';
        } else {
            confirmation.setCustomValidity('');
            feedback.textContent = 'Vui lòng nhập lại mật khẩu.';
        }
    };

    password.addEventListener('input', validateConfirmation);
    confirmation.addEventListener('input', validateConfirmation);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        validateConfirmation();
        form.classList.add('was-validated');
        success.classList.add('d-none');

        if (!form.checkValidity()) {
            event.stopPropagation();
            return;
        }

        success.classList.remove('d-none');
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
})();
