// CodeGym Career Landing Page Interaction Scripts
$(document).ready(function () {
  // 1. Navbar background toggle on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled-nav shadow-sm bg-white navbar-light').removeClass('navbar-dark');
    } else {
      $('.navbar').removeClass('scrolled-nav shadow-sm bg-white navbar-light').addClass('navbar-dark');
    }
  });

  // 2. Smooth scrolling for internal anchor links
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 70
      }, 700);

      // Close mobile menu if open
      if ($('.navbar-collapse').hasClass('show')) {
        $('.navbar-toggler').click();
      }
    }
  });

  // 3. Simple Form submission handler
  $('#consultForm').on('submit', function (e) {
    e.preventDefault();
    var name = $('#formName').val();
    var phone = $('#formPhone').val();
    var email = $('#formEmail').val();

    if (!name || !phone || !email) {
      alert('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Email!');
      return;
    }

    alert('Cảm ơn bạn ' + name + '! Ban cố vấn tuyển dụng CodeGym Career sẽ liên hệ với bạn trong vòng 24 giờ làm việc.');
    $('#consultForm')[0].reset();
  });
});

