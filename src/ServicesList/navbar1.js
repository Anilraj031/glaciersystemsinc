//var file=location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
var html='<nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-right">'+
	'<div class="container-fluid" style="padding:0 5%;">'+
	'<a class="navbar-brand" href="../index.html"><img src="../images/galcierlogopng.png" style="width:110px;" /></a>'+
	'<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">'+
		'<span class="navbar-toggler-icon"></span>'+
	'</button>'+
	'<div class="collapse navbar-collapse justify-content-end" id="main_nav">'+
		'<ul class="navbar-nav">'+
			'<li class="nav-item active"> <a class="nav-link" href="../index.html"><span class="navlink">Home </span></a> </li>'+
			'<li class="nav-item"><a class="nav-link" href="../about.html"><span class="navlink"> About</span> </a></li>'+
			'<li class="nav-item dropdown has-megamenu" style="position:static !important;">'+
				'<a class="dropdown-toggle navafter navlink" href="#" data-bs-toggle="dropdown" ><span style="font-weight:400;"> Services</span> </a>'+
				'<div class="dropdown-menu megamenu dropdown-menu-lg-end w-100" role="menu" style="border-radius:0px;background-color:gainsboro;margin-top:-2px;">'+
					'<div class="row col-lg-12 g-3 justify-content-end container-fluid" >'+
						'<div class="col-lg-4 col-12">'+
						'	<div class="col-megamenu">'+
						'		<a href="../ServicesList/Dynamics.html" style="text-decoration:none;color:black;"><h6 class="title"><u>Dynamics 365/CRM</u></h6></a>'+
                         '       <ul class="list-unstyled">'+
                          '            <li><a href="../DynamicsExperties/CRMInstallation.html">CRM Installation and Implementation</a></li>'+
                                   ' <li><a href="../DynamicsExperties/crmintegration.html">CRM Integration</a></li>'+
                                   ' <li><a href="../DynamicsExperties/crmplugins.html">CRM Plugins and Web Resource Development</a></li>'+
                                    '<li><a href="../DynamicsExperties/crmdatahandling.html">CRM Data Handling and Migration Services</a></li>'+
                                    '<li><a href="../DynamicsExperties/supportandmaintenance.html">Support and Maintenance</a></li>'+
                               ' </ul>'+
							'</div>  '+
						'</div>'+
						'<div class="col-lg-4 col-12">'+
							'<div class="col-megamenu">'+
								'<a href="../ServicesList/middleware.html" style="text-decoration:none;color:black;"><h6 ><u>Middleware Integration with EDI</u></h6></a>'+
                               ' <ul class="list-unstyled">'+
                                   ' <li><a href="../EDIExperties/Edi.html">EDI Standards including ANSI, EDIFACT, XML and other formats</a></li>'+
                                    '<li><a href="../EDIExperties/Edi Flow.html">EDI End-to-End flow</a></li>'+
                                   ' <li><a href="../EDIExperties/Support.html">EDI Support</a></li>'+
                                '</ul>'+
							'</div> '+
						'</div>'+
						'<div class="col-lg-4 col-12">'+
							'<div class="col-megamenu">'+
							'	<a href="../ServicesList/dataanalysis.html" style="text-decoration:none;color:black;"><h6><u>Data Analysis and Data Science</u></h6></a>'+
                             '   <ul class="list-unstyled">'+
                             '       <li><a href="../DataExperties/datamapping.html">Scope up Data Requirements</a></li>'+
                             '       <li><a href="../DataExperties/datamapping.html">Installation and Maintenance of Data Analysis Tool</a></li>'+
                              '      <li><a href="../DataExperties/datamapping.html">Data Mapping</a></li>'+
                              '      <li><a href="../DataExperties/datamapping.html">Data Migration and Maintenance</a></li>'+
                              '  </ul>'+
							'</div>  '+
						'</div>    '+
						'<div class="col-lg-4 col-12">'+
							'<div class="col-megamenu">'+
							'	<a href="../ServicesList/productdevelopment.html" style="text-decoration:none;color:black;"><h6 ><u>Product Development</u></h6></a>'+
                                '<ul class="list-unstyled">'+
                                    '<li><a href="../DevelopmentExperties/WebApp.html">Web Application Development</a></li>'+
                                    '<li><a href="../DevelopmentExperties/Api.html">API Development Services</a></li>'+
                                    '<li><a href="../DevelopmentExperties/Quality.html">Quality Assurance and Testing</a></li>'+
                                    '<li><a href="../DevelopmentExperties/WebAppTesting.html">Web Application Testing</a></li>'+
                                    '<li><a href="../DevelopmentExperties/ApiTesting.html">API Testing</a></li>'+
                                '</ul>'+
							'</div>  '+
					'	</div>'+
					'</div>'+
				'</div> '+
			'</li>'+
           ' <li class="nav-item"><a class="nav-link" href="../Careers.html"><span class="navlink"> Careers</span> </a></li>'+
          '  <li class="nav-item"><a class="nav-link" href="../Contact.html"> <span class="navlink">Contact Us</span> </a></li>'+
		'</ul>'+
	'</div> '+
'</div> '+
'</nav>';
document.write(html);




