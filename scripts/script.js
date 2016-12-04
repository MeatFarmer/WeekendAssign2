console.log('start js');
$( document ).ready(function() {
console.log('start jq');
// receiving the array from the website to the console

// pushing student data from JSON object into an array that I can manipulate.
var studentArray = [];

$.ajax({
      url: 'http://devjana.net/support/tau_students.json',
      dataType: 'JSON',
      success: function( data ){
        console.log( 'success, received:', data );
      }    
  });
}); // end document.ready
