$(document).ready(function(){
	$('.menu-toggle').click(function(){
			$('.menu-toggle').toggleClass('active')
			$('nav').toggleClass('active')
	})
})


function sendEmail2()
{
	var mail = document.getElementById("sender").value;
	var subject=document.getElementById("subject").value;
	var body=document.getElementById("message").value;
	var company=document.getElementById("cname").value;
	var uname=document.getElementById("name").value;
	var contact=document.getElementById("contact").value;

	if(company =='')
	{
		alert("Please Enter Company Name");
	}
	else if(uname=="")
	{
		alert("Please Enter Name");
	}
	else if(subject=='')
	{
		alert('Please Enter Subject');
	}
	else if(mail =="")
	{
		alert('Please Enter Email');
	}

	else if(contact=="")
	{
		alert('Please Enter Contact Info');
	}
	else if(body=='')
	{
		alert('Plese Enter Your Message');
	}
	else{
		var x=document.getElementById("sender").value;
		var atposition=x.indexOf("@");  
		var dotposition=x.lastIndexOf(".");  
		if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
				alert("Please enter a valid e-mail address ");  
				return false;
				}
				else
				{
				sendEmail1();
				}  
	}
}
function sendEmail1() {
	var mail = document.getElementById("sender").value;
	var subject=document.getElementById("subject").value;
	var body=document.getElementById("message").value;
	var company=document.getElementById("cname").value;
	var uname=document.getElementById("name").value;
	var contact=document.getElementById("contact").value;
	
	var messageBody=`
			<article>
				<h3>Name: `+uname+`</h3>
				<h3>Company Name: `+company+`</h3>
				<h3>Email: `+mail+`</h3>
				<h3>Contact: `+contact+`</h3>
				<h3>Message: `+body+`</h3>
			</article>
			`;
	//alert(""+messageBody);
	//cc todd.schultz@imcoutdoorliving.com;justin.coliny@imcoutdoorliving.com

	Email.send({
		//Host: "smtpout.secureserver.net",
		Host: "smtppro.zoho.com",
		//Username : "anil@glaciersystemsinc.com",
		Username : "anil.rajbanshi@glaciersystemsinc.com",
		Password : "Yq9ung09bwEf",
		Port : 465,
		//Password : "Anil123",
		//To : 'info@glaciersystemsinc.com',
		To : 'anilrajbanshi31@gmail.com',
		//From : "anil@glaciersystemsinc.com",
		From : "anil.rajbanshi@glaciersystemsinc.com",
		Subject : ""+subject,
		Body : ""+messageBody,
		}).then(
			document.getElementById("sender").value='',
			document.getElementById("subject").value='',
			document.getElementById("message").value='Message Successfully Sent!',
			document.getElementById("cname").value='',
			document.getElementById("name").value='',
			document.getElementById("contact").value=''
		);
}
//form validator
$(function() {
$( document ).tooltip({
	position: {my: "left top", at: "right top"},
	items: "input[required=true], textarea[required=true]",
	content: function() { return $(this).attr( "title" ); }
});
});
