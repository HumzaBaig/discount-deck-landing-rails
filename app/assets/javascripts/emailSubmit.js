function emailAddressInput(e) {
  e.preventDefault();

    var emailAddress = { emailaddress: document.getElementById('email-input').value };

    $.ajax({
      type: "POST",
      url: '/microinfluencers',
      data: {
        microinfluencer: emailAddress
      },
      success: function (res) {
        document.getElementById("email-form").reset();
        $('#email-submit').html('<span class="icon flaticon-check2"></span> Thank You');
      },
      error: function (err) {
        $('#email-submit').html('<span class="icon flaticon-error4"></span> ERROR');
        console.log("error: " + err);
      }
    });
}

$(document).ready(function() {
  $('#email-submit').click(emailAddressInput);
});
