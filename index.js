$(document).ready(() => {

    
$("#submit").click(function(){
     
     let a=$("#idTextBox").val();
     let b=$("#titleTextBox").val();
     let c=$("#yearTextBox").val();

     $("#cardContainer").html("");
     
     if((a==="")&&(b===""))
        alert("Please enter atleast Id or Title");
    else{
        getAllData(a,b,c);
    }

 });
         

    

  


}); // end of document.ready()

let getAllData = (a,b,c) => {
    
    let d="";
    let urlLink="";
    d=b.split(" ").join("+");
    if(a!="")
    {
        urlLink="https://www.omdbapi.com/?i="+a+"&apikey=thewdb";
        console.log(urlLink); 
    }
        
    else{
        if(c!="")
            urlLink="https://www.omdbapi.com/?s="+d+"&y="+c+"&apikey=thewdb";
        else
            urlLink="https://www.omdbapi.com/?s="+d+"&apikey=thewdb";

            console.log(urlLink);
        }
    

    
    console.log("making request")

    $.ajax({
        type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        // url: 'http://www.omdbapi.com/?i=tt3896198&apikey=thewdb', // URL of getting data
        url:urlLink,
        success: (data) => { // in case of success response
            
            console.log(data);
            // let a=data["Poster"];
            // $(".image1").attr("src",a);
            
            
             let searchReult = data["Search"]

             for(movie of searchReult){

           
            let card=   `<div class="card col-8 col-sm-8 col-lg-4">
                            <img class="card-img-top image1" src="${movie.Poster}" alt="Card image cap">
                                <div class="card-body">
                                        <h5 class="card-title">${movie.Title}</h5>
                                        <p class="card-text">Type is ${movie.Type} and Year is ${movie.Year}</p>
                                        
                                </div>
                        </div> `

                    $("#cardContainer").append(card);
            }

         
            

        },
        error: (data) => { // in case of error response

            alert("some error occured")

        },

        // beforeSend: () => { // while request is processing.

        //     // you can use loader here.
        //     alert("request is being made. please wait")

        // },
        // complete: () => {

        //     // what you want to do while request is completed
        //     alert("data fetched success")

        // },

        // timeout:3000 // this is in milli seconds

    }); // end of AJAX request

} // end of getAllData

