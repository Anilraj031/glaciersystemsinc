var file=location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
var html='<nav>'+
            '<ul class="myNav">';

                if(file=="index.html")
                {
                    html +='<li><a href = "index.html" onclick="checka()" class="active">Home</a></li>'
                }
                else{
                   html+= '<li><a href = "index.html" onclick="checka()" class="unave">Home</a></li>'
                }
                if(file=="services.html")
                {
                    html +='<li><a href = "services.html" id="ActiveService" class="active" >Services</a></li>'
                }
                else{
                   html+= '<li><a href = "services.html" id="ActiveService" class="unave" >Services</a></li>'
                }
                if(file=="aboutus.html")
                {
                    html+='<li><a href = "aboutus.html" class="active">About Us</a></li>'
                }
                else{
                    html+='<li><a href = "aboutus.html" class="unave">About Us</a></li>'
                }
                if(file=="careers.html")
                {
                    html+='<li><a href = "careers.html" class="active">Careers</a></li>'
                }
                else{
                    html+='<li><a href = "careers.html" class="unave">Careers</a></li>'
                }
                if(file=="contactus.html")
                {
                    html+='<li><a href = "contactus.html" class="active">Contact Us</a></li>'
                }
                else{
                    html+='<li><a href = "contactus.html" class="unave">Contact Us</a></li>'
                }
          html+='</ul>'+
                '</nav>';
document.write(html);




