//1.Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie{
    constructor(title="",studio="",rating=""){
           this.title=title;
           this.studio=studio;
           this.rating=rating;
    }
    printmovies(){
      console.log(`${this.title} is the movie that you created`);
     
     }
     
     }
      const movie1 = new movie('','','');
      console.log(movie1)
   
   //2.    The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
   
   class movie{
    constructor(title="",studio="",rating=""){
            this.title=title;
           this.studio=studio;
            this.rating=rating||"PG";
    }
    printmovies(){
      console.log(`${this.title} is the movie that you created`);
     
     }
     
     }
      const movie2 = new movie('PS2','LYCA','');
      console.log(movie2)
      
   //3.  Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
   
   class movies{
    constructor(title="",studio="",rating=""){
            this.title=title;
           this.studio=studio;
            this.rating=rating;
    }
    
     getPG(data=[]){
        return data.filter((d) => d.rating === 'PG');
       }
    }
     const movieutils = new movies()
     var movieList = [
       new movies('PS2','LYCA','PG'),
       new movies('Master','XB','PG13'),
       new movies('Thuppakki','V creation','PG'),
       new movies('Asuran','V creation','R'),
       new movies('Vikram','RKFI','PG'),
       new movies('casino Royale','EON production','PG13')
   ];
       console.log(movieutils.getPG(movieList))
     
     
   //4.  Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG13”
   
   class movie{
    constructor(title="",studio="",rating=""){
            this.title=title;
            this.studio=studio;
            this.rating=rating;
    }
    printmovies(){
     console.log(`${this.title} is the movie that you created`);
     
     }
     
     }
      const movie3 = new movie('Casino Royale','Eon Production','PG13');
      console.log(movie3)
   