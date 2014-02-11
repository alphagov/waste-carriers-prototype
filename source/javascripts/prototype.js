// Prototype javascript

// This code is not intended for the live service
// The functionality is creates should be recreated using producton-ready code

$(document).ready(function(){

  // CONDITIONAL PAGE FLOW

  $( ".form" ).submit(function( event ) {
    var page

    // GENERIC RADIO BUTTON REDIRECT

    if($("[name='page']").length !== 0){
      // Redirect to the page indicted by the value of the selected radio button
      page = $(this).find('input[name="page"]:checked').val();
    }

    // SPECIFIC PAGES

    if($("#page-3b").length !== 0){
      if($('#otherWaste:checked').length !== 0){
        page = $('#otherWaste').val();
      } else {
        page = $('#farmWaste').val();
      }
    }

    window.location.href = page;
    event.preventDefault();
  });

/*
  if($("[name='page']").length !== 0){
    $( ".form" ).submit(function( event ) {

      // Redirect to the page indicted by the value of the selected radio button
      var page = $(this).find('input[name="page"]:checked').val();

      window.location.href = page;
      event.preventDefault();

    });
  }

  if($("#page-3b").length !== 0){
    $( ".form" ).submit(function( event ) {

      if($('#otherWaste:checked').length !== 0){
        page = $('#otherWaste').val();
      } else {
        page = $('#farmWaste').val();
      }
      window.location.href = page;
      event.preventDefault();
    });
  }
*/




  // BACK BUTTON

  $(".back").click(function( event ) {
    history.back();
    return false;
  });


  // POSTCODE LOOKUP

  jQuery.fn.postcodeLookup = function() {
  
    // Add the control above the address fields
    $(this).before(
        '<div class="control">' +
        '<label for="postcode-lookup">Postcode</label> ' +
        '<input type="text" id="postcode-lookup" class="postcode"><span id="find-uk-address" class="button-secondary">Find UK address</span>' +    
        '</div>' +
        '<p id="enter-address-manually"><span class="link-style">Enter address manually</span></p>'
    );  
    // Hide the address fields by default
    $(this).hide();
    $('#select-address').hide();

    // 'Enter address manually' link
    $('#enter-address-manually span').click(function() {
      $('.js-address-finder').toggle();
      $(this).hide();
    });

    // Find addresses
    $('#find-uk-address').click(function() {
      $(this).after(
        '<div class="control" id="select-address"><label for="address-list">Select an address</label>' +
        '<select class="address-list" id="address-list" size="15">' + 
        '<option>1 Borough High Street, London, SE1 6PQ</option>' +
        '<option>2 Borough High Street, London, SE1 6PQ</option>' +
        '<option>3 Borough High Street, London, SE1 6PQ</option>' +
        '<option>4 Borough High Street, London, SE1 6PQ</option>' +
        '<option>5 Borough High Street, London, SE1 6PQ</option>' +
        '<option>6 Borough High Street, London, SE1 6PQ</option>' +
        '<option>7 Borough High Street, London, SE1 6PQ</option>' +
        '<option>8 Borough High Street, London, SE1 6PQ</option>' +
        '<option>9 Borough High Street, London, SE1 6PQ</option>' +
        '<option>10 Borough High Street, London, SE1 6PQ</option>' +
        '<option>11 Borough High Street, London, SE1 6PQ</option>' +
        '<option>12 Borough High Street, London, SE1 6PQ</option>' +
        '<option>13 Borough High Street, London, SE1 6PQ</option>' +
        '<option>14 Borough High Street, London, SE1 6PQ</option>' +
        '<option>15 Borough High Street, London, SE1 6PQ</option>' +
        '</select>' + 
        '</div>'
      );
    });

    // Select address
    $(document.body).on( "change", "#address-list", function() {
      var selectedAddress = $('#address-list').val();
      selectedAddress = selectedAddress.replace(/, /g, "\n")
      $('.js-address-finder').show();
      $('#enter-address-manually, #select-address').hide();
      $('#address-list').attr('size', '1');
      $('#address2').val(selectedAddress).focus();
    });
    
  };

  $('.js-address-finder').postcodeLookup();

});