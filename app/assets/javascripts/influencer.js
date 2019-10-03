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

function sendBriandaRequest() {
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
      document.getElementById("influencer-form").reset();
      $('#successModal').modal('show');
    },
    error: function (err) {
      $('#errorModal').modal('show');
    }
  });
}

function sendJohnGillonRequest() {
  $.ajax({
    type: "POST",
    url: '/john_gillons',
    data: {
      "john_gillon": {
        "emailaddress": emailAddress,
        "age": ageRange,
        "gender": gender,
        "city": city,
        "state": state,
        "country": country
      }
    },
    success: function (res) {
      document.getElementById("influencer-form").reset();
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
    emailAddress = document.getElementById('influencer-email').value;
    ageRange = document.getElementById('influencer-age').value;
    gender = document.getElementById('influencer-gender').value;
    city = document.getElementById('influencer-city').value;
    state = document.getElementById('influencer-state').value;
    country = document.getElementById('influencer-country').value;

    influencerName = document.getElementById('influencer-form').dataset.name;

    if(influencerName == 'brianda'){
      sendBriandaRequest();
    }
    else if (influencerName == 'john-gillon') {
      sendJohnGillonRequest();
    }
    else {
      console.log("error: not an influencer");
    }
  } else {
    emailAddress = "";
    ageRange = "";
    gender = "";
    city = "";
    state = "";
    country = "";

    sendBriandaRequest();
  }
}

$(document).ready(function(){
  if (document.getElementById('influencer-button')) {
    document.getElementById('influencer-button').addEventListener('click', submitInfo);
  }
});
