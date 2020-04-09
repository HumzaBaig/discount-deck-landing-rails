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
        $('#email-submit').html('<i class="fas fa-check"></i> Got it!');
      },
      error: function (err) {
        $('#email-submit').html('<i class="fas fa-times"></i> Error');
        console.log("error: " + err);
      }
    });
}

$(document).ready(function() {
  $('#email-submit').click(emailAddressInput);
});
