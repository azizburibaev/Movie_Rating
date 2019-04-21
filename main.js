$( document ).ready(function() {
    var myMovie = new Movie();
    var listOfMovies = [];

    $("#evalRating").click( function() {
        
         myMovie = new Movie($("#movieName").val(), parseInt( $("#movieRating").val()));

        if ( !myMovie.isValid() ) {
                $("#showSuccessEntry").text("Your need to enter name of a movie and 1-5 to rate the movie"); 
                $("#movieName").val( "" );
                $("#movieRating").val( "" );
                $("#movieName").focus();
            
        } else {
                    $("#showSuccessEntry").text('Valid entry');
                 //alert("good "+"job");
                  $("#movieName").val( "" );
                  $("#movieRating").val( "" );
                  $("#movieName").focus();
                  listOfMovies.push(myMovie);
        for (let index = 0; index < listOfMovies.length; index++) {
                const element = listOfMovies[index];
                 $("#justText").text(element.concat());  
            
        }
        
          
        }
        
    });
    
    $("#listMovies").click( function(){
     
        for (let index = 0; index < listOfMovies.length; index++) {
            const element = listOfMovies[index];
            var para = document.createElement("h4");
            var node = document.createTextNode(element.concat());
            para.appendChild(node);
            var divelement = document.getElementById("forOutput");
            divelement.appendChild(para);
           
        }
    }
    );
   
});
