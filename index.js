//-- Initialization --

$( function() {
	

	  $.getJSON("‪D:\Program Files\nodejs\server.js",function(result){
		$.each(result, function(i, field){
/* 		  $("#DataFromESP").append(field + " "); */
		});
	  });

		    

	
    $("#ClearButton").click( function() {
/* 	  $("#DataFromESP").html(""); */
	  $("#LEDState").html("");
	  $("#LEDState2").html("");
	});
  
	$("#LedOnButton").click( function() { 
		 $("#LEDState").html("");
	  $.getJSON("/a",function(result){
		$.each(result, function(i, field){
			$("#LEDState").html("ON");		

			
		});
	  });
	
	});

	$("#LedOffButton").click( function() {
		$("#LEDState").html("");
	  $.getJSON("/b",function(result){
		$.each(result, function(i, field){
					$("#LEDState").html("OFF");	
		});
	  });
	});

	$("#LedOnButton2").click( function() {
		$("#LEDState2").html("");		
	  $.getJSON("/c",function(result){
		$.each(result, function(i, field){
		  $("#LEDState2").append(field + " ");
		});
	  });
	});

	$("#LedOffButton2").click( function() {
		$("#LEDState2").html("");		
	  $.getJSON("/d",function(result){
		$.each(result, function(i, field){
		  $("#LEDState2").append(field + " ");
		});
	  });
	});
  
});