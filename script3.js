

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++)
{
   var firstLetter = names[i].charAt(0).toLowerCase();

   if (firstLetter === 'j') 

  {
    document.getElementById('output').innerHTML=("Good Bye "+names[i]);
    console.log("Good Bye "+names[i]);

  } 

  else 
  {
    document.getElementById('output').innerHTML=("Hello "+names[i]);
    console.log("Hello " + names[i]);
  
  }	
}
	
