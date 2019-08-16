function getSelectedIndex() {
  return document.isoform.isolist.selectedIndex
}

var j;
var a;

function makearray(n) {
  this.length = n;
  for (var i = 1; i <= n; ++i)
    this[i] = 0;
}

function Isotope(name, thalf, tunit, DL) {
  this.name = name;
  this.thalf = thalf;
  this.tunit = tunit;
  this.DL = DL;
}

function getSelectedIndex() {
  return document.isoform2.isolist.selectedIndex
}

var topelist = new makearray(116);

topelist[1] = new Isotope("Ca-45", "162.61", "d", "37");
topelist[2] = new Isotope("C-14", "5730", "y", "370");
topelist[3] = new Isotope("Cr-51", "27.7025", "d", "37");
topelist[4] = new Isotope("H-3", "12.33", "y", "3700");
topelist[5] = new Isotope("I-125", "59.408", "d", "3.7");
topelist[6] = new Isotope("P-32", "14.262", "d", "37");
topelist[7] = new Isotope("P-33", "25.34", "d", "37");
topelist[8] = new Isotope("Na-22", "2.6019", "y", "37");
topelist[9] = new Isotope("S-35", "87.51", "d", "37");
topelist[10] = new Isotope("Ac-227", "21.773", "y", "0");
topelist[11] = new Isotope("Al-26", "717000", "y", "0");
topelist[12] = new Isotope("Al-29", "6.5", "m", "0");
topelist[13] = new Isotope("Am-241", "432.2", "y", "0");
topelist[14] = new Isotope("Sb-124", "60.20", "d", "0");
topelist[15] = new Isotope("As-74", "17.77", "d", "0");
topelist[16] = new Isotope("Ba-128", "2.43", "d", "0");
topelist[17] = new Isotope("Ba-133", "10.51", "y", "0");
topelist[18] = new Isotope("Ba-140", "12.752", "d", "0");
topelist[19] = new Isotope("Be-7", "53.29", "d", "0");
topelist[20] = new Isotope("Bi-207", "31.55", "y", "0");
topelist[21] = new Isotope("Bi-210", "5.013", "d", "0");
topelist[22] = new Isotope("Br-77", "57.036", "h", "0");
topelist[23] = new Isotope("Br-82", "35.30", "h", "0");
topelist[24] = new Isotope("Cd-109", "462.6", "d", "0");
topelist[25] = new Isotope("C-11", "20.39", "m", "0");
topelist[26] = new Isotope("Ce-141", "32.501", "d", "0");
topelist[27] = new Isotope("Ce-144", "284.893", "d", "0");
topelist[28] = new Isotope("Cs-134", "2.0648", "y", "0");
topelist[29] = new Isotope("Cs-137", "30.07", "y", "0");
topelist[30] = new Isotope("Cl-36", "301000", "y", "0");
topelist[31] = new Isotope("Co-57", "271.79", "d", "0");
topelist[32] = new Isotope("Co-58", "70.86", "d", "0");
topelist[33] = new Isotope("Co-60", "1925.1", "d", "0");
topelist[34] = new Isotope("Cu-61", "3.333", "h", "0");
topelist[35] = new Isotope("Cu-62", "9.74", "m", "0");
topelist[36] = new Isotope("Cu-64", "12.700", "h", "0");
topelist[37] = new Isotope("Cu-67", "61.83", "h", "0");
topelist[38] = new Isotope("Cm-244", "18.10", "y", "0");
topelist[39] = new Isotope("Eu-152", "13.537", "y", "0");
topelist[40] = new Isotope("F-18", "109.77", "m", "0");
topelist[41] = new Isotope("Gd-153", "240.4", "d", "0");
topelist[42] = new Isotope("Ga-67", "3.2612", "d", "0");
topelist[43] = new Isotope("Ge-68", "270.8", "d", "0");
topelist[44] = new Isotope("Au-198", "2.69517", "d", "0");
topelist[45] = new Isotope("Hf-181", "42.39", "d", "0");
topelist[46] = new Isotope("In-111", "2.8047", "d", "0");
topelist[47] = new Isotope("In-113m", "1.6582", "h", "0");
topelist[48] = new Isotope("In-114m", "49.51", "d", "0");
topelist[49] = new Isotope("I-123", "13.27", "h", "0");
topelist[50] = new Isotope("I-131", "8.0207", "d", "0");
topelist[51] = new Isotope("I-132", "2.295", "h", "0");
topelist[52] = new Isotope("Ir-192", "73.827", "d", "0");
topelist[53] = new Isotope("Fe-52", "8.275", "h", "0");
topelist[54] = new Isotope("Fe-55", "2.73", "y", "0");
topelist[55] = new Isotope("Fe-59", "44.503", "d", "0");
topelist[56] = new Isotope("Kr-85", "3934.4", "d", "0");
topelist[57] = new Isotope("La-140", "1.6781", "d", "0");
topelist[58] = new Isotope("Pb-210", "22.3", "y", "0");
topelist[59] = new Isotope("Mn-52m", "21.1", "m", "0");
topelist[60] = new Isotope("Mn-54", "312.3", "d", "0");
topelist[61] = new Isotope("Mn-56", "2.5785", "h", "0");
topelist[62] = new Isotope("Hg-197", "64.14", "h", "0");
topelist[63] = new Isotope("Hg-203", "46.612", "d", "0");
topelist[64] = new Isotope("Mo-99", "65.94", "h", "0");
topelist[65] = new Isotope("Nd-147", "10.98", "d", "0");
topelist[66] = new Isotope("Np-237", "2144000", "y", "0");
topelist[67] = new Isotope("Ni-63", "100.1", "y", "0");
topelist[68] = new Isotope("Nb-94", "20300", "y", "0");
topelist[69] = new Isotope("Nb-95", "34.975", "d", "0");
topelist[70] = new Isotope("N-13", "9.965", "m", "0");
topelist[71] = new Isotope("O-15", "122.24", "s", "0");
topelist[72] = new Isotope("Po-208", "2.9", "y", "0");
topelist[73] = new Isotope("Po-210", "138", "d", "0");
topelist[74] = new Isotope("K-38", "7.636", "m", "0");
topelist[75] = new Isotope("K-42", "12.360", "h", "0");
topelist[76] = new Isotope("Pm-147", "2.6234", "y", "0");
topelist[77] = new Isotope("Pu-238", "87.7", "y", "0");
topelist[78] = new Isotope("Pu-239", "24110", "y", "0");
topelist[79] = new Isotope("Pu-240", "6564", "y", "0");
topelist[80] = new Isotope("Pu-242", "373300", "y", "0");
topelist[81] = new Isotope("Ra-226", "1600", "y", "0");
topelist[82] = new Isotope("Rb-82", "1.273", "m", "0");
topelist[83] = new Isotope("Rb-86", "18.631", "d", "0");
topelist[84] = new Isotope("Ru-103", "39.26", "d", "0");
topelist[85] = new Isotope("Ru-106", "373.59", "d", "0");
topelist[86] = new Isotope("Sc-46", "83.79", "d", "0");
topelist[87] = new Isotope("Se-75", "119.79", "d", "0");
topelist[88] = new Isotope("Ag-110", "249.79", "d", "0");
topelist[89] = new Isotope("Ag-111", "7.45", "d", "0");
topelist[90] = new Isotope("Na-24", "14.9590", "h", "0");
topelist[91] = new Isotope("Sr-82", "25.55", "d", "0");
topelist[92] = new Isotope("Sr-85", "64.84", "d", "0");
topelist[93] = new Isotope("Sr-89", "50.53", "d", "0");
topelist[94] = new Isotope("Sr-90", "28.79", "y", "0");
topelist[95] = new Isotope("Tc-99m", "6.01", "h", "0");
topelist[96] = new Isotope("Tc-99", "211100", "y", "0");
topelist[97] = new Isotope("Tl-201", "72.912", "h", "0");
topelist[98] = new Isotope("Tl-204", "3.78", "y", "0");
topelist[99] = new Isotope("Th-228", "1.9116", "y", "0");
topelist[100] = new Isotope("Th-229", "7340", "y", "0");
topelist[101] = new Isotope("Th-230", "75380", "y", "0");
topelist[102] = new Isotope("Th-232", "14050000000", "y", "0");
topelist[103] = new Isotope("Sn-113", "115.09", "d", "0");
topelist[104] = new Isotope("Sn-119m", "293.1", "d", "0");
topelist[105] = new Isotope("U-233", "159200", "y", "0");
topelist[106] = new Isotope("U-234", "245500", "y", "0");
topelist[107] = new Isotope("U-235", "703800000", "y", "0");
topelist[108] = new Isotope("U-236", "23420000", "y", "0");
topelist[109] = new Isotope("U-238", "4468000000", "y", "0");
topelist[110] = new Isotope("V-48", "15.9735", "d", "0");
topelist[111] = new Isotope("Xe-133", "5.243", "d", "0");
topelist[112] = new Isotope("Xe-135", "9.14", "h", "0");
topelist[113] = new Isotope("Y-87", "79.8", "h", "0");
topelist[114] = new Isotope("Y-90", "64.00", "h", "0");
topelist[115] = new Isotope("Zn-62", "9.186", "h", "0");
topelist[116] = new Isotope("Zn-65", "244.26", "d", "");

function topechoose(form) {
  var a;
  a = getSelectedIndex() + 1;
  form.topename.value = topelist[a].name;
  form.halflife.value = topelist[a].thalf;
  form.timeunit.value = topelist[a].tunit;
  top.frames[1].document.isoform.solid.value = topelist[a].DL;
  top.frames[1].document.isoform.liquid.value = topelist[a].DL / 10;
  top.frames[1].document.isoform.gas.value = topelist[a].DL / 100;
}

function clearinput(form) {
  form.topename.value = "";
  form.halflife.value = "";
  form.timeunit.value = "";
  top.frames[1].document.isoform.solid.value = "";
  top.frames[1].document.isoform.liquid.value = "";
  top.frames[1].document.isoform.gas.value = "";
  top.frames[1].document.isoform.initact.value = "";
  top.frames[1].document.isoform.decayt.value = "";
  top.frames[1].document.isoform.decayu[0].checked = false;
  top.frames[1].document.isoform.decayu[1].checked = false;
  top.frames[1].document.isoform.decayu[2].checked = false;
  top.frames[1].document.isoform.finact.value = "";
  top.frames[1].document.isoform.initact2.value = "";
  top.frames[1].document.isoform.finact2.value = "";
  top.frames[1].document.isoform.decayt2.value = "";
  top.frames[1].document.isoform.initact3.value = "";
  top.frames[1].document.isoform.mass.value = "";
  top.frames[1].document.isoform.decayt3.value = "";
  top.frames[1].document.isoform.Tunit3.value = "";
  top.frames[1].document.isoform.Tunit.value = "";
}