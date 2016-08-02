var Time = require('./../js/alarm.js').timeModule;

$(document).ready(function(){

  setInterval(function clock(){
    $('#time').text(moment().format('hh:mm:ss a'));
    return clock;
  }(), 1000);

  $("#alarm_set_form").submit(function(event) {
    event.preventDefault();
    var alarmSet = $('#alarm_set').val();
    var alarmDisplay = new Time(alarmSet);
    alarmDisplay.alarmTime();
      $('#alarm_output').text("You set the alarm for " + alarmSet + ". Time displays in Military Time, yo!");
  });
});
