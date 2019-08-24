function mainScript() {
  (function() {
      [].slice.call(document.querySelectorAll('.tabs')).forEach(function(el) {
          new CBPFWTabs(el);
      });
  })();
  $('#main-nav').sidr();
  $('#fullpage').fullpage({
      'verticalCentered': true,
      'easing': 'easeInOutCirc',
      'css3': false,
      'scrollingSpeed': 900,
      'slidesNavigation': true,
      'slidesNavPosition': 'bottom',
      'easingcss3': 'ease',
      'navigation': true,
      'anchors': ['Home', 'Micro-Influencers', 'Influencer-Process', 'Sign-up', 'Contact'],
      'navigationPosition': 'left'
  });
  $('.screenshots-content, .clients-content').css('height', $(window).height());

  // CONTACT FORM

  $(document).mouseup(function (e) {
    if ($(".sidr-open ")[0]){
      var container = $("#sidr");

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        $(".sidr-open #main-nav").click();
      }
    }
  });


  $('#submit').click(function(){

  $.post("contact.php", $("#contact-form").serialize(),  function(response) {
  $('#success').fadeIn().html(response);
  $('#success').delay(2000).fadeOut();
  });
  return false;

  });

}

function emailAddressInput(e) {
  e.preventDefault();

    var emailAddress = { emailaddress: document.getElementById('application-email').value };

    $.ajax({
      type: "POST",
      url: '/microinfluencers',
      data: {
        microinfluencer: emailAddress
      },
      success: function (res) {
        document.getElementById("application-form").reset();
        $('#email-submit').html('<span class="icon flaticon-check2"></span> Thank You');
      },
      error: function (err) {
        $('#email-submit').html('<span class="icon flaticon-error4"></span> ERROR');
        console.log("error: " + err);
      }
    });
}


$(document).ready(mainScript);
$(document).ready(function() {
  $('#email-submit').click(emailAddressInput);
});

jQuery(window).load(function() {
  jQuery('#preloader').fadeOut();
});
