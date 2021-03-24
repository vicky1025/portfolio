function myFunction(){
  var skills =["C++","C","JAVA","HTML","CSS","JS"]
  var x="";
  var i;
  for(i = 0 ; i < skills.length ; i++)
  {
      x += skills[i] + "<br>";
  }
  document.getElementById("demo").innerHTML = x;

}