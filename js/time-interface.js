$(document).ready(function(){
  // $('#time').text(moment().format('hh:mm:ss a'));

  setInterval(function clock(){
    $('#time').text(moment().format('hh:mm:ss a'));
    return clock;
  }(), 1000);

});
