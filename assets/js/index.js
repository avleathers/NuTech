/* Change style of navbar on scroll */

window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}
// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// MAA Calculator
function checkBrowser()
{
	var Brow = navigator.appName;
	var Ver = navigator.appVersion;
	if (Brow == "Netscape")
	{
		if (parseInt(Ver.substring(0,2)) < 3.0)
		{
			alert("You are using a stale version of Netscape - some parts of this calculator may not work correctly.  For best results download the latest version of Netscape.")
		}

	}
	
}

function maapart(form)
{
	var totalparticles;
	var totalactivity;
	var dose;
	var totalparticles = form.totalparticles.value
	var totalactivity = form.totalactivity.value
	var dose = form.dose.value
	form.tzero.value = totalparticles*dose/totalactivity;
	form.t1h.value = (Math.round(totalparticles*dose/totalactivity/0.891) + "");
	form.t2h.value = (Math.round(totalparticles*dose/totalactivity/0.794) + "");
	form.t3h.value = (Math.round(totalparticles*dose/totalactivity/0.708) + "");
	form.t4h.value = (Math.round(totalparticles*dose/totalactivity/0.631) + "");
	form.t5h.value = (Math.round(totalparticles*dose/totalactivity/0.562) + "");
	form.t6h.value = (Math.round(totalparticles*dose/totalactivity/0.501) + "");
	form.t7h.value = (Math.round(totalparticles*dose/totalactivity/0.447) + "");
	form.t8h.value = (Math.round(totalparticles*dose/totalactivity/0.398) + "");
	form.t9h.value = (Math.round(totalparticles*dose/totalactivity/0.355) + "");
	form.t10h.value = (Math.round(totalparticles*dose/totalactivity/0.316) + "");
	form.t11h.value = (Math.round(totalparticles*dose/totalactivity/0.282) + "");
	form.t12h.value = (Math.round(totalparticles*dose/totalactivity/0.251) + "");
	form.t18h.value = (Math.round(totalparticles*dose/totalactivity/0.126) + "");
	form.t24h.value = (Math.round(totalparticles*dose/totalactivity/0.063) + "");
}	