/**
 * function to tabularise and array for display 
 * @param Array 2D array
 * @return String
 */
function array2Table(array){
	buffer ="<table border=\"1\" style=\"border-collapse: collapse;\">";
	for(var i=0;i<array.length;i++){
  	buffer +="<tr>"
  	for(var n=0;n<array[i].length;n++){
    	buffer += "<td>" + array[i][n] + "</td>";
    }
    buffer +="</tr>";
  }
  buffer+="</table>";
  return buffer;
}