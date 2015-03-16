//-- Initialization --

$( function() {
	
		$(document).ready(function(){
	  $.getJSON("/e",function(result){
/* 		   console.log(result) */
	console.log(JSON.stringify(result,null, 4));
		   if (result == 10)
	   {   
	   $("#DataFromESP").html("AC Running");
	 
	   }
	   else if (result == 21 )
	   {
		   $("#DataFromESP").html("HEAT Running");
		 
	   }
	   else if (result == 20)
	   {
		   $("#DataFromESP").html("OFF");
			/* $("#OFF").css("background","lightgreen"); */
	   }
	   else if (result == 11)
	   {
		   $("#DataFromESP").html("ERROR- both pins on");
		  
	   }
	   else 
	   {
		 $("#DataFromESP").html("ERROR- missing state");  
	   }   

	  });
	 	 
});

/* -------------------------------------------------- */
 $("#AC").click( function() {
/* 	 state = "10" */
	$.getJSON("/d",function(){
			$.getJSON("/a",function(){
			$("#DataFromESP").html("AC Running");
}
)}
)
});
/* -------------------------------------------------- */
 $("#HEAT").click( function() {
/* 	 state = "21" */
	$.getJSON("/b",function(){
			$.getJSON("/c",function(){
			$("#DataFromESP").html("HEAT Running");
}
)}
)
});
/* -------------------------------------------------- */

 $("#OFF").click( function() {
/* 	 state = "20" */
	$.getJSON("/b",function(){
			$.getJSON("/d",function(){
			$("#DataFromESP").html("OFF");
}
)}
)
});
		$(document).ready(function(){
}); 

});