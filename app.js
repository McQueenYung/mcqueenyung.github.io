function check(a){

  var m,y,a;
  m=document.getElementById("getCMonth").value;
  y=document.getElementById("getCYear").value;

   switch (y+m) {
    
	case "202011":
    	case "202012":

//case "20212":
//case "20213":
//case "20214":
//case "20215":
//case "20216":
//case "20217":
//case "20218":
//case "20219":
//case "202110":
//case "202111":
//case "202112":

	     yyyy="updat";
	     mm="e/update.pdf";
	     window.open('./pdf/'+yyyy+mm,'_blank');
      break;


    default:
      yyyy=y;
      mm=m+"/"+a;

//      yyyy="updat";
//      mm="e/update.pdf";
      window.open('./pdf/'+yyyy+mm,'_blank');
  }

}

function Start(){
  readTextFile("./getMonth.txt") ;
  document.getElementById("Mon").innerHTML = get_month;
  //alert(get_month);
}

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks, tablink_s;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  tablink_s = document.getElementsByClassName("tablink_s");
  for (i = 0; i < tablink_s.length; i++) {
    tablink_s[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");
var elements_b = document.getElementsByClassName("tablink_s");
// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

function listView_b() {
  for (i = 0; i < elements.length; i++) {
    elements_b[i].style.width = "100%";
  }
}

// Grid View
function gridView_b() {
  for (i = 0; i < elements.length; i++) {
    elements_b[i].style.width = "50%";
  }
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                get_month= allText;
            }
        }
    }
    rawFile.send(null);
}

function MyToday(){
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = today.getMonth()+1; //January is 0!

document.getElementById("getCMonth").value = mm;
document.getElementById("getCYear").value = yyyy;
}
