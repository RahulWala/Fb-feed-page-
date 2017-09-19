//Portfolio text transform
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('#texts').css({
		'transform' : 'translate( 0px, '+wScroll/6.5+'%)'
	});
});

// Validation of contact form
function validate(){
 var first = document.getElementById("fname").value;
 var email = document.getElementById("email").value;
 var msg =  document.getElementById("subject").value;
 var validEmail =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

 if(first == ""){
 	alert("Please Enter your Name");
 	return false;
 }
 else if(email == ""){
 	alert("Please Enter your email Id");
 	return false;
 }
 else if(validEmail.test(email) == false){
 	alert("Please enter valid email Id");
 	return false;
 }
 else if(msg == ""){
 	alert("Please write some message");
 	return false;
 }
 else{
 	alert("Thank You for your feedback");
 	return true;
 }
}
