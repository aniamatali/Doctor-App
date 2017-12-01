var apiKey = require('./../.env').apiKey;

var healthSearch = function() {

};

healthSearch.prototype.disease = function(disease) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${disease}&location=47.6080%2C-122.3351%2C20&user_location=47.6062%2C-122.3321&sort=best-match-asc&skip=0&limit=10&user_key=${apiKey}`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    response = JSON.parse(response);
    response = response.data;
    if (response.length === 0){
      $('#results').text("Please try a different search...");
    } else {
      for(let i = 0; i < response.length; i+=1) {
        $('#results').append(`<h4>${response[i].profile.first_name} ${response[i].profile.last_name}, ${response[i].profile.title}</h4>`);
        $('#results').append(`<li>Address: ${response[i].practices[0].visit_address.street} <br> ${response[i].practices[0].visit_address.city}, ${response[i].practices[0].visit_address.state}, ${response[i].practices[0].visit_address.zip}</li>`);
        $('#results').append(`<li>Phone: ${response[i].practices[0].phones[0].number}</li>`);

        if(response[i].practices[0].website !== undefined) {
          $('#results').append(`<li>Website: <a href="${response[i].practices[0].website}" target="_blank">${response[i].practices[0].website}</a></li>`);
        } else {
          $('#results').append(`<li>Website: N/A`);
        }

        if(`${response[i].practices[0].accepts_new_patients} = true`) {
          $('#results').append(`<li>${response[i].profile.first_name} is accepting new patients.</li><br>`);
        } else {
          $('#results').append(`<li>${response[i].profile.first_name} is not accepting new patients.</li><br>`);
        }
      }
    }

  }, function(error) {
    $('#results').text(`There was an error processing your request: ${error.message}`);
  });
};

healthSearch.prototype.doctorName = function(name) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=47.6080%2C-122.3351%2C20&user_location=47.6062%2C-122.3321&sort=best-match-asc&skip=0&limit=20&user_key=${apiKey}`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    response = JSON.parse(response);
    response = response.data;
    if (response.length === 0){
      $('#results').text("Please try a different search...");
    } else {
      for(let i = 0; i < response.length; i++) {

        $('#results').append(`<h4>${response[i].profile.first_name} ${response[i].profile.last_name}, ${response[i].profile.title}</h4>`);
        $('#results').append(`<li>Address: ${response[i].practices[0].visit_address.street} <br> ${response[i].practices[0].visit_address.city}, ${response[i].practices[0].visit_address.state}, ${response[i].practices[0].visit_address.zip}</li>`);
        $('#results').append(`<li>Phone: ${response[i].practices[0].phones[0].number}</li>`);
        if(response[i].practices[0].website !== undefined) {

          $('#results').append(`<li>Website: <a href="${response[i].practices[0].website}" target="_blank">${response[i].practices[0].website}</a></li>`);
        } else {

          $('#results').append(`<li>Website: N/A`);
        }

        if(`${response[i].practices[0].accepts_new_patients} = true`) {
          $('#results').append(`<li>${response[i].profile.first_name} is accepting new patients.</li><br>`);
        } else {

          $('#results').append(`<li>${response[i].profile.first_name} is not accepting new patients.</li><br>`);

        }
      }
    }
  }, function(error) {
    $('#results').text(`There was an error processing your request: ${error.message}`);
  });
};

exports.healthSearch = healthSearch;
