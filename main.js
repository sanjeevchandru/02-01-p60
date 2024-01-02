document.write("23. to create a new string from a given string by changing the position of the first and last characters."+"<br>");
function test23(str){
    var mid=str.substring(1,str.length-1);
    return str.charAt(str.length-1)+mid+str.charAt(0);
}
document.write("the String is :sanjeev"+"<br>")
document.write("ans : "+test23("sanjeev")+"<br><br>");