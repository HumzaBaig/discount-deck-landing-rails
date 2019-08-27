function checkInfo() {
  var $userInputs = $('.user-input');
  var flag = false;

  for (var i = 0; i < $inputs.length; i++) {
    currentInput = $inputs[i];

    if(currentInput.value == undefined || currentInput.value == "Age" || currentInput.value == "Gender" || currentInput.value == "") {
      flag = true;
    }
  }
  return flag;
}

function sendUserRequest() {
  $.ajax({
    type: "POST",
    url: '/briandas',
    data: {
      "brianda": {
        "emailaddress": emailAddress,
        "age": ageRange,
        "gender": gender,
        "city": city,
        "state": state,
        "country": country
      }
    },
    success: function (res) {
      document.getElementById("brianda-form").reset();
      $('#successModal').modal('show');
    },
    error: function (err) {
      $('#errorModal').modal('show');
    }
  });
}

function submitInfo(e) {
  e.preventDefault();

  if(document.getElementById('agreement-checkbox').checked) {
    emailAddress = document.getElementById('brianda-email').value;
    ageRange = document.getElementById('brianda-age').value;
    gender = document.getElementById('brianda-gender').value;
    city = document.getElementById('brianda-city').value;
    state = document.getElementById('brianda-state').value;
    country = document.getElementById('brianda-country').value;

    sendUserRequest();
  } else {
    emailAddress = "";
    ageRange = "";
    gender = "";
    city = "";
    state = "";
    country = "";

    sendUserRequest();
  }
}

$(document).ready(function(){
  if (document.getElementById('brianda-button')) {
    document.getElementById('brianda-button').addEventListener('click', submitInfo);
  }
});
