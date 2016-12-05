console.log('start js');
$( document ).ready(function() {
console.log('start jq');
// receiving the array from the website to the console

// pushing student data from JSON object into an array that I can manipulate.
var studentArray = [];
var studentIndex = 0;

var displayOnDom = function(){
    console.log('in displayOnDom');
    console.log( 'studentArray', studentArray );
    // loop through students and update outputText
    var outputText = '';
    for (var i = 0; i < studentArray.length; i++) {
      outputText += '<p>' + studentArray[i].first_name + ' ' + studentArray[i].last_name + ' ' + studentArray[i].info + '</p>';
      outputText += '<img src="' + studentArray[i].picUrl + '" />';
}
 $( '#outputDiv' ).html( outputText );};

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
        displayOnDom();
      } // end console.log
    }); // end ajax call
  }; // end ajaxInfo function
  ajaxInfo();

  $('#nextButton').on('click', function() {
          i = i + 1;
          i = i % data.tau.length;
          outputText();
      });

}); // end document.ready
