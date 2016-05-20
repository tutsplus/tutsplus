window.addEventListener('load', function() { 

   // Get WebGL context,
   var canvas = document.getElementById("canvas");
   var context;
   try {
      context = canvas.getContext('2d');
   } catch (exception) {
      alert("Umm... sorry, no 2d contexts for you! " + exception.message);
      return ;
   }

   // Adjust the canvas size,
   canvas.width  = canvas.offsetWidth ;
   canvas.height = canvas.offsetHeight;

   // Draw the line,
   context.beginPath();
   context.moveTo(0, 0);
   context.lineTo(canvas.width, canvas.height);
   context.stroke(); 
});


