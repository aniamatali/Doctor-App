var apiKey = require('./../.env').apiKey;
var Search = require('../js/doctor.js').healthSearch;

$(document).ready(function() {
  let healthSearch = new Search();

  $('#diseasesubmit').click(function() {
    event.preventDefault();
    $('#list').addClass("fadein");

    let disease = $('#disease').val();
    healthSearch.disease(disease);
    $('#rightoflist').addClass("slideright");
    $('#name').val("");
    $('#disease').val("");
    $('#results').empty();
    $('#listtitle').empty();
    $('#listtitle').text("Results found by keyword");

  });


  $('#namesubmit').click(function() {
    event.preventDefault();
    $('#list').show();

    let name = $('#name').val();
    healthSearch.doctorName(name);
    $('#name').val("");
    $('#disease').val("");
    $('#results').empty();
    $('#listtitle').empty();
    $('#listtitle').text("Results found by Doctor");

    });

  $('.blah').click(function() {
    event.preventDefault();
    setInterval(function() {
      $('#rightoflist').append("<img src='img/mario.jpg' width=100px>")
    }, 10);
  });

  });
