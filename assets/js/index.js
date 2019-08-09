/* Change style of navbar on scroll */

window.onscroll = function () { myFunction() };
function myFunction() {
	var navbar = document.getElementById("myNavbar");
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-light-white";
	} else {
		navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-light-white", "");
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

// Parallax Responsive Background Image
/* resize the image(s) on page load */
$(document).ready(function () {
	resize_all_parallax();
});

/* resize the image(s) on page resize */
$(window).on('resize', function () {
	resize_all_parallax();
});

/* keep all of your resize function calls in one place so you don't have to edit them twice (on page load and resize) */
function resize_all_parallax() {
	var div_id = 'bgimg-1'; /* the ID of the div that you're resizing */
	var img_w = 1000; /* the width of your image, in pixels */
	var img_h = 864; /* the height of your image, in pixels */
	resize_parallax(div_id, img_w, img_h);
}

/* this resizes the parallax image down to an appropriate size for the viewport */
function resize_parallax(img_w, img_h) {
	var div = $('#' + bgimg - 1);
	var divwidth = div.width();
	if (divwidth < 769) { var pct = (img_h / img_w) * 105; } /* show full image, plus a little padding, if on static mobile view */
	else { var pct = 60; } /* this is the HEIGHT as percentage of the current div WIDTH. you can change it to show more (or less) of your image */
	var newheight = Math.round(divwidth * (pct / 100));
	newheight = newheight + 'px';
	div.height(newheight);
}

// MAA Calculator
function checkBrowser() {
	var Brow = navigator.appName;
	var Ver = navigator.appVersion;
	if (Brow == "Netscape") {
		if (parseInt(Ver.substring(0, 2)) < 3.0) {
			alert("You are using a stale version of Netscape - some parts of this calculator may not work correctly.  For best results download the latest version of Netscape.")
		}

	}

}

function maapart(form) {
	var totalparticles;
	var totalactivity;
	var dose;
	var totalparticles = form.totalparticles.value
	var totalactivity = form.totalactivity.value
	var dose = form.dose.value
	form.tzero.value = totalparticles * dose / totalactivity;
	form.t1h.value = (Math.round(totalparticles * dose / totalactivity / 0.891) + "");
	form.t2h.value = (Math.round(totalparticles * dose / totalactivity / 0.794) + "");
	form.t3h.value = (Math.round(totalparticles * dose / totalactivity / 0.708) + "");
	form.t4h.value = (Math.round(totalparticles * dose / totalactivity / 0.631) + "");
	form.t5h.value = (Math.round(totalparticles * dose / totalactivity / 0.562) + "");
	form.t6h.value = (Math.round(totalparticles * dose / totalactivity / 0.501) + "");
	form.t7h.value = (Math.round(totalparticles * dose / totalactivity / 0.447) + "");
	form.t8h.value = (Math.round(totalparticles * dose / totalactivity / 0.398) + "");
	form.t9h.value = (Math.round(totalparticles * dose / totalactivity / 0.355) + "");
	form.t10h.value = (Math.round(totalparticles * dose / totalactivity / 0.316) + "");
	form.t11h.value = (Math.round(totalparticles * dose / totalactivity / 0.282) + "");
	form.t12h.value = (Math.round(totalparticles * dose / totalactivity / 0.251) + "");
	form.t18h.value = (Math.round(totalparticles * dose / totalactivity / 0.126) + "");
	form.t24h.value = (Math.round(totalparticles * dose / totalactivity / 0.063) + "");
}


// Pediatric Dose Calculations

function peddose(form) {
	var wtlb;
	var wtkg;
	wt = form.wt.value
	if (form.unit1[0].checked) {
		wtkg = wt
		wtlb = wt * 2.2
	}
	else if (form.unit1[1].checked) {
		wtkg = wt / 2.2
		wtlb = wt
	}
	var dob;
	var dot;
	var adltdose = form.adltdose.value;
	var diff;
	var mos;
	var yrs;
	dob = Date.parse(form.dob.value);
	dot = Date.parse(form.dot.value);
	diff = Math.abs(dot - dob);
	mos = diff / 86400000 / 30;
	yrs = diff / 86400000 / 365;
	form.clark.value = wtlb / 150 * adltdose;
	form.webster.value = (yrs + 1) / (yrs + 7) * adltdose;
	form.bsa.value = (((Math.pow(wtkg, 0.7)) / 11) / 1.73) * adltdose;
	form.young.value = (yrs / (yrs + 12)) * adltdose;
	form.fried.value = (mos / 150) * adltdose;
}
