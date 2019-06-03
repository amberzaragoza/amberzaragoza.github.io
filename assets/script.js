$(document).ready(function() {
  var links = {
    about: $('#about').offset().top,
    education: $('#education').offset().top,
    skills: $('#skills').offset().top,
    projects: $('#projects').offset().top
  };
  $(window).scroll(function(e) {
    if ($(window).width() > 600) {
      if ($(window).scrollTop() >= $('#about').outerHeight() - 1) {
        console.log('black');
        $("#navbar").css('backgroundColor', 'rgba(240,255,255,0.8)');
        $(".nav-link").css('color', '#353839');
      } else {
        console.log('white');
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
  // About
  if (x < links.education) {
    $('html, body').animate({
      scrollTop: (key == 38) ? links.projects : links.education
    }, 500);
  // Education
  } else if (x < links.skills) {
    $('html, body').animate({
      scrollTop: (key == 38) ? links.about : links.skills
    }, 500);
  // Skills
  } else if (x < links.projects) {
    $('html, body').animate({
      scrollTop: (key == 38) ? links.education : links.projects
    }, 500);
  // Projects
  } else {
    $('html, body').animate({
      scrollTop: (key === 38) ? links.skills : links.about
    }, 500);
  }
}