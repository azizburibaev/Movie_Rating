
var Movie = function(aName, aRating) { //declaring constructor function with parametrs
	this.name = aName;
	this.rating = aRating;
    this.isValid = function() {
            if (isNaN(this.rating) ) { //checking if valid numbers are entered
                return false;
            } else if ( this.rating < 1 || this.rating > 5 ) 
                return false;
		else if ( this.name ==="") {
                return false;
            } else {
                return true;
            }
        }
        this.concat = function() {
            var x;
            x = this.name +" "+ this.rating;
            return x.toString();
            
        }
            
    };
