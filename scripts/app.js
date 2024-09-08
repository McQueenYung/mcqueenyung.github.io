$(document).ready(function(){

  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $('[data-toggle="tooltip"]').tooltip();

});


function openfile(file) {
  let sp = file.split('#');
  
  var dayz = document.getElementById("myDate_"+ sp[0] ).value;

  if (!dayz) {
	alert('請輸入 [ 日期 ] 查詢');
	}else {

        // window.location = "./images/Query/" + dayz  + "/"+ sp[2] ;

	let a= document.createElement('a');
	a.target= '_blank';
	a.href= sp + "./" + dayz  + ".html" ;
	a.click();
  }
}



