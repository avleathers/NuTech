function calcdecay(form) {

    var act = parseInt(form.initact.value);
    var act2;
    var t = parseInt(form.decayt.value);
    if (form.decayu[0].checked) {
        if (document.isoform2.timeunit.value == "m")
            t = t * (1 / 60)
        else if (document.isoform2.timeunit.value == "h")
            t = t * (1 / 3600)
        else if (document.isoform2.timeunit.value == "d")
            t = t * (1 / 86400)
        else if (document.isoform2.timeunit.value == "y")
            t = t * (1 / 31557600)
    }
    else if (form.decayu[1].checked) {
        if (document.isoform2.timeunit.value == "s")
            t = t * 60
        else if (document.isoform2.timeunit.value == "h")
            t = t * (1 / 60)
        else if (document.isoform2.timeunit.value == "d")
            t = t * (1 / 1440)
        else if (document.isoform2.timeunit.value == "y")
            t = t * (1 / 525960)
    }
    else if (form.decayu[2].checked) {
        if (document.isoform2.timeunit.value == "s")
            t = (t * 3600)
        else if (document.isoform2.timeunit.value == "m")
            t = (t * 60)
        else if (document.isoform2.timeunit.value == "d")
            t = (t / 24)
        else if (document.isoform2.timeunit.value == "y")
            t = (t / 8766)
    }
    else if (form.decayu[3].checked) {
        if (document.isoform2.timeunit.value == "s")
            t = (t * 86400)
        else if (document.isoform2.timeunit.value == "m")
            t = (t * 1440)
        else if (document.isoform2.timeunit.value == "h")
            t = (t * 24)
        else if (document.isoform2.timeunit.value == "y")
            t = (t / 365.25)
    }
    else if (form.decayu[4].checked) {
        if (document.isoform2.timeunit.value == "s")
            t = (t * 31557600)
        else if (document.isoform2.timeunit.value == "m")
            t = (t * 525960)
        else if (document.isoform2.timeunit.value == "h")
            t = (t * 8766)
        else if (document.isoform2.timeunit.value == "d")
            t = (t * 365.25)
    }

    act2 = act * (Math.exp(-0.693147 * t / document.isoform2.halflife.value));
    if (act2 <= 0.000001)
        act2 = 0
    form.finact.value = act2;

}
function calcTdecay(form) {
    var isoform2 = parseFloat(document.isoform2.halflife.value);
    var temp;
    temp = (isoform2 / -0.693147) * Math.log(document.isoform.finact2.value / document.isoform.initact2.value)
    if (temp <= 0.00001)
        temp = 0;
    form.decayt2.value = temp;
    form.Tunit.value = document.isoform2.timeunit.value
}

function calcTdisposal(form) {
    debugger;

    var temp;

    if (document.isoform.disposalLimit.value == 0) {
        alert("You need to enter a solid disposal limit for the selected isotope. Refer to your licence or contact your radiation safety office.")
    }
    else {
        temp = (document.isoform2.halflife.value / -0.693147) * Math.log(document.isoform.disposalLimit.value / (document.isoform.initact3.value / document.isoform.mass.value))
        if (temp <= 0.00001)
            temp = 0;
        form.decayt3.value = temp;
        form.Tunit3.value = document.isoform2.timeunit.value
    }
}

function convertUnit(form) {
    activity1 = form.activity1.value
    if (form.unit1[0].checked) {
        if (form.unit2[0].checked)
            form.activity2.value = activity1
        else if (form.unit2[1].checked)
            form.activity2.value = activity1 / 1000
        else if (form.unit2[2].checked)
            form.activity2.value = activity1 / 1000000
        else if (form.unit2[3].checked)
            form.activity2.value = activity1 / 37
        else
            form.activity2.value = activity1 / 37000
    }
    else if (form.unit1[1].checked) {
        if (form.unit2[0].checked)
            form.activity2.value = activity1 * 1000
        else if (form.unit2[1].checked)
            form.activity2.value = activity1
        else if (form.unit2[2].checked)
            form.activity2.value = activity1 / 1000
        else if (form.unit2[3].checked)
            form.activity2.value = activity1 / 0.037
        else
            form.activity2.value = activity1 / 37
    }
    else if (form.unit1[2].checked) {
        if (form.unit2[0].checked)
            form.activity2.value = activity1 * 1000000
        else if (form.unit2[1].checked)
            form.activity2.value = activity1 * 1000
        else if (form.unit2[2].checked)
            form.activity2.value = activity1
        else if (form.unit2[3].checked)
            form.activity2.value = activity1 / 0.000037
        else
            form.activity2.value = activity1 / .037
    }
    else if (form.unit1[3].checked) {
        if (form.unit2[0].checked)
            form.activity2.value = activity1 * 37
        else if (form.unit2[1].checked)
            form.activity2.value = activity1 * 0.037
        else if (form.unit2[2].checked)
            form.activity2.value = activity1 * 0.000037
        else if (form.unit2[3].checked)
            form.activity2.value = activity1
        else
            form.activity2.value = activity1 / 1000
    }
    else if (form.unit1[4].checked) {
        if (form.unit2[0].checked)
            form.activity2.value = activity1 * 37000
        else if (form.unit2[1].checked)
            form.activity2.value = activity1 * 37
        else if (form.unit2[2].checked)
            form.activity2.value = activity1 * .037
        else if (form.unit2[3].checked)
            form.activity2.value = activity1 * 1000
        else
            form.activity2.value = activity1
    }
}

function deldate(form) {
    var date1;
    var date2;
    var diff;
    date1 = Date.parse(form.date1.value);
    date2 = Date.parse(form.date2.value);
    diff = Math.abs(date2 - date1);
    form.days1.value = parseInt(diff / 86400000);
}

function adddays(form) {
    var date3 = Date.parse(form.date3.value);
    var days2 = form.days2.value * 86400000;
    var added = date3 + days2;
    date4 = new Date();
    date4.setTime(added);
    var timestring = "";
    timestring += date4.getMonth() + 1;
    if (timestring == "1")
        timestring = "Jan"
    if (timestring == "2")
        timestring = "Feb"
    if (timestring == "3")
        timestring = "Mar"
    if (timestring == "4")
        timestring = "Apr"
    if (timestring == "5")
        timestring = "May"
    if (timestring == "6")
        timestring = "Jun"
    if (timestring == "7")
        timestring = "Jul"
    if (timestring == "8")
        timestring = "Aug"
    if (timestring == "9")
        timestring = "Sep"
    if (timestring == "10")
        timestring = "Oct"
    if (timestring == "11")
        timestring = "Nov"
    if (timestring == "12")
        timestring = "Dec";
    timestring += " ";
    timestring += date4.getDate();
    timestring += ", ";
    timestring += date4.getFullYear();
    document.dateadd2.date4.value = timestring;
}