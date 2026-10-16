// Elements
const form = document.getElementById('registerForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const termsCheck = document.getElementById('termsCheck');

const togglePasswordBtn = document.getElementById('togglePasswordBtn');
const toggleConfirmPasswordBtn = document.getElementById('toggleConfirmPasswordBtn');

const strengthBar = document.getElementById('strengthBar');
const strengthLabel = document.getElementById('strengthLabel');
const strengthHint = document.getElementById('strengthHint');

// Validation helper functions
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function setFieldStatus(input, isValid, errorElementId, message) {
  const group = input.closest('.form-group');
  const errorEl = document.getElementById(errorElementId);

  if (isValid) {
    group.classList.remove('has-error');
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  } else {
    group.classList.add('has-error');
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    if (message && errorEl) {
      errorEl.textContent = message;
    }
  }
}

// Check Password Strength
function evaluatePasswordStrength(password) {
  let score = 0;
  if (!password) return 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}

function updatePasswordStrengthMeter(val) {
  const score = evaluatePasswordStrength(val);
  let percent = 0;
  let color = '#e2e8f0';
  let label = 'Độ mạnh mật khẩu';

  if (!val) {
    percent = 0;
  } else if (score <= 1) {
    percent = 25;
    color = '#ef4444'; // Red
    label = 'Mật khẩu: Rất yếu';
  } else if (score === 2) {
    percent = 50;
    color = '#f59e0b'; // Amber
    label = 'Mật khẩu: Trung bình';
  } else if (score === 3) {
    percent = 75;
    color = '#3b82f6'; // Blue
    label = 'Mật khẩu: Khá mạnh';
  } else {
    percent = 100;
    color = '#10b981'; // Green
    label = 'Mật khẩu: Rất mạnh & An toàn';
  }

  strengthBar.style.width = percent + '%';
  strengthBar.style.backgroundColor = color;
  strengthLabel.textContent = label;
  strengthLabel.style.color = val ? color : 'var(--text-muted)';
}

// Realtime validation listeners
fullNameInput.addEventListener('input', () => {
  const val = fullNameInput.value.trim();
  const isValid = val.length >= 3 && val.includes(' ');
  setFieldStatus(fullNameInput, isValid, 'fullNameError', 'Vui lòng nhập họ và tên đầy đủ (tối thiểu 2 từ)');
});

emailInput.addEventListener('input', () => {
  const val = emailInput.value.trim();
  const isValid = isValidEmail(val);
  setFieldStatus(emailInput, isValid, 'emailError', 'Vui lòng nhập email hợp lệ (ví dụ: name@domain.com)');
});

passwordInput.addEventListener('input', () => {
  const val = passwordInput.value;
  updatePasswordStrengthMeter(val);
  const isValid = val.length >= 8;
  setFieldStatus(passwordInput, isValid, 'passwordError', 'Mật khẩu phải dài tối thiểu 8 ký tự');

  if (confirmPasswordInput.value) {
    const isMatch = val === confirmPasswordInput.value;
    setFieldStatus(confirmPasswordInput, isMatch, 'confirmPasswordError', 'Mật khẩu xác nhận không khớp');
  }
});

confirmPasswordInput.addEventListener('input', () => {
  const isMatch = confirmPasswordInput.value === passwordInput.value && confirmPasswordInput.value.length > 0;
  setFieldStatus(confirmPasswordInput, isMatch, 'confirmPasswordError', 'Mật khẩu xác nhận không khớp');
});

// Toggle password visibility (UI/UX enhancement)
function setupTogglePassword(btn, input) {
  btn.addEventListener('click', () => {
    const isPassword = input.getAttribute('type') === 'password';
    input.setAttribute('type', isPassword ? 'text' : 'password');
    btn.innerHTML = isPassword
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
  });
}

setupTogglePassword(togglePasswordBtn, passwordInput);
setupTogglePassword(toggleConfirmPasswordBtn, confirmPasswordInput);

// Form submit handler
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isNameValid = fullNameInput.value.trim().length >= 3;
  const isEmailValid = isValidEmail(emailInput.value.trim());
  const isPasswordValid = passwordInput.value.length >= 8;
  const isConfirmValid = confirmPasswordInput.value === passwordInput.value && confirmPasswordInput.value.length > 0;
  const isTermsChecked = termsCheck.checked;

  setFieldStatus(fullNameInput, isNameValid, 'fullNameError', 'Vui lòng nhập họ và tên của bạn');
  setFieldStatus(emailInput, isEmailValid, 'emailError', 'Email không hợp lệ');
  setFieldStatus(passwordInput, isPasswordValid, 'passwordError', 'Mật khẩu cần tối thiểu 8 ký tự');
  setFieldStatus(confirmPasswordInput, isConfirmValid, 'confirmPasswordError', 'Mật khẩu xác nhận không khớp');

  if (!isTermsChecked) {
    alert('Vui lòng đồng ý với Điều khoản sử dụng và Chính sách bảo mật.');
    termsCheck.focus();
    return;
  }

  if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
    // Lưu tạm vào sessionStorage để hiển thị ở Trang 2
    sessionStorage.setItem('reg_name', fullNameInput.value.trim());
    sessionStorage.setItem('reg_email', emailInput.value.trim());

    // Chuyển hướng sang Trang 2 (Xác nhận thành công)
    window.location.href = `success.html?name=${encodeURIComponent(fullNameInput.value.trim())}&email=${encodeURIComponent(emailInput.value.trim())}`;
  }
});
