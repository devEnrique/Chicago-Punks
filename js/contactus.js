function popup() 
{
alert("Hello World")
}

function validateForm()
{
    var x = document.forms["ContactForm"]["name"].value;
    if (x == null || x == "") 
	{
        alert("What Is Your Name I SAY!");
        return false;
    }
}