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

function sendAkoyAgauRequest() {
  $.ajax({
    type: "POST",
    url: '/akoy_agaus',
    data: {
      "akoy_agau": {
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

function sendJohnJordanRequest() {
  $.ajax({
    type: "POST",
    url: '/john_jordans',
    data: {
      "john_jordan": {
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
    influencerName = document.getElementById('influencer-form').dataset.name;

    emailAddress = document.getElementById('influencer-email').value;
    ageRange = document.getElementById('influencer-age').value;
    gender = document.getElementById('influencer-gender').value;
    city = document.getElementById('influencer-city').value;
    state = document.getElementById('influencer-state').value;
    country = document.getElementById('influencer-country').value;

    if(influencerName == 'brianda'){
      sendBriandaRequest();
    }
    else if (influencerName == 'john-gillon') {
      sendJohnGillonRequest();
    }
    else if (influencerName == 'akoy-agau') {
      sendAkoyAgauRequest();
    }
    else if (influencerName == 'john-jordan') {
      sendJohnJordanRequest();
    }
    else {
      console.log("error: not an influencer");
    }
  } else {
    influencerName = document.getElementById('influencer-form').dataset.name;

    emailAddress = "";
    ageRange = "";
    gender = "";
    city = "";
    state = "";
    country = "";

    if(influencerName == 'brianda'){
      sendBriandaRequest();
    }
    else if (influencerName == 'john-gillon') {
      sendJohnGillonRequest();
    }
    else if (influencerName == 'akoy-agau') {
      sendAkoyAgauRequest();
    }
    else if (influencerName == 'john-jordan') {
      sendJohnJordanRequest();
    }
    else {
      console.log("error: not an influencer");
    }
  }
}

$(document).ready(function(){
  if (document.getElementById('influencer-button')) {
    document.getElementById('influencer-button').addEventListener('click', submitInfo);
  }
});
