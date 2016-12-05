console.log('start js');
$( document ).ready(function() {
console.log('start jq');
// receiving the array from the website to the console

// pushing student data from JSON object into an array that I can manipulate.
var studentArray = [];

var displayOnDom = function(){
    console.log( 'studentArray', studentArray );
    // loop through cars and update outputText
    var outputText = '';
    for (var i = 0; i < studentArray.length; i++) {
      outputText += '<p>' + studentArray[i].first_name + ' ' + studentArray[i].last_name + ' ' + studentArray[i].info + '</p>';
      outputText += '<img src="' + studentArray[i].picURL + '" />';
}
};
var ajaxInfo = function(){
  console.log('in ajaxInfo');
  $.ajax({
      url: 'http://devjana.net/support/tau_students.json',
      dataType: 'JSON',
      success: function( data ){
        console.log( 'success, received:', data );
        console.log('data.tau: ', data.tau);
        for (var i = 0; i < data.tau.length; i++) {
          studentArray.push(data.tau[i]);
        }
      } // end console.log
    }); // end ajax call
  }; // end ajaxInfo function
  displayOnDom();
  ajaxInfo();
  console.log(studentArray);
}); // end document.ready
