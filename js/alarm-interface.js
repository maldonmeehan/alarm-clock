var Time = require('./../js/alarm.js').timeModule;

$(document).ready(function(){

  setInterval(function clock(){
    $('#time').text(moment().format('hh:mm:ss a'));
    return clock;
  }(), 1000);

});
