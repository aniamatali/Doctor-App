var apiKey = require('./../.env').apiKey;
var Search = require('../js/doctor.js').healthSearch;

$(document).ready(function() {
  let healthSearch = new Search();

  $('#diseasesubmit').click(function() {
    event.preventDefault();
    $('.list').show();
    let disease = $('#disease').val();
    healthSearch.disease(disease);

    $('#name').val("");
    $('#disease').val("");
    $('#results').empty();

  });


  $('#namesubmit').click(function() {
    event.preventDefault();
    $('.list').show();
    let name = $('#name').val();
    healthSearch.doctorName(name);
    $('#name').val("");
    $('#disease').val("");
    $('#results').empty();
    });

  });
