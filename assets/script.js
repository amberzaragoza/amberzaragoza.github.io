$(document).ready(function() {
  var links = {
    about: $('#about').offset().top,
    experience: $('#experience').offset().top,
    education: $('#education').offset().top,
    skills: $('#skills').offset().top,
    projects: $('#projects').offset().top
  };
  $(window).scroll(function(e) {
    if ($(window).width() > 600) {
      if ($(window).scrollTop() >= $('#about').outerHeight() - 1) {
        $("#navbar").css('backgroundColor', 'rgba(240,255,255,0.8)');
        $(".nav-link").css('color', '#353839');
      } else {
        $(".nav-link").css('color', '#f0ffff');
        $("#navbar").css('backgroundColor', 'transparent');
      }
    }
  });
  $(document).keydown(function(e) {
    if (e.which === 38 || e.which === 40) {
      scrollToDiv(e.which, $(window).scrollTop(), links);
    }
  });
  $('.nav-link').click(function(e) {
    var link = $(this).attr('href');
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(link).offset().top
    }, 500);
  });
});

function scrollToDiv(key, x, links) {
  if (x < links.experience) {
    $('html, body').animate({
      scrollTop: (key == 38) ? links.projects : links.experience
    }, 500);
  } else if (x < links.education) {
    $('html, body').animate({
      scrollTop: (key == 38) ? links.about : links.education
    }, 500);
  } else if (x < links.skills) {
    $('html, body').animate({
      scrollTop: (key == 38) ? links.experience : links.skills
    }, 500);
  } else if (x < links.projects) {
    $('html, body').animate({
      scrollTop: (key == 38) ? links.education : links.projects
    }, 500);
  } else {
    $('html, body').animate({
      scrollTop: (key === 38) ? links.skills : links.about
    }, 500);
  }
}
