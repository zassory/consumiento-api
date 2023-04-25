$(document).ready(function() {
   
    $.ajax({        
        url: "https://digimon-api.vercel.app/api/digimon/",
        type: "GET",
        dataType: "json",
        success: function(data){
            
             for(let i = 0;i < data.length; i++){                
                 const $card = $("<div>", { class: "card" })
                 .append($("<img>", { src: data[i].img, class: "card-img-top" }))
                 .append($("<div>", { class: "card-body" }))
                 .append($("<h5>", { class: "card-title" }).text(data[i].name))
                 .append($("<p>", { class: "catd-text" }).text(data[i].level));
                
                const $col = $("<div>", { class: "col-md-3" })
                .append($card);

                $("#card-container").append($col);
                $(".card").css("margin-top","1rem");
                $(".card").css("margin-bottom","1rem");
                $(".card").css("text-align","center");
             }
        }
    });        
      $("#frmAcceso").on('submit', function(event) {         
          event.preventDefault();
          let buscar = $("#buscar").val();
          let apiUrl = "https://digimon-api.vercel.app/api/digimon/name/"+ buscar;          
          $.ajax({
            url: apiUrl,
            type: "GET",
            dataType: "json",
            success: function(data){                 
                const $card = $("<div>", {class: "card"})
                .append($("<img>", { src: data[0].img, class: "card-img-top" }))
                .append($("<div>", { class: "card-body" }))
                .append($("<h5>", { class: "card-title" }).text(data[0].name))
                .append($("<p>", { class: "catd-text" }).text(data[0].level));

                // const $col = $("<div>", { class: "col-md-3" })
                // .append($card);

                $("#card-container2").append($card);
                $(".card").css("margin-top","1rem");
                $(".card").css("margin-bottom","1rem");
                $(".card").css("text-align","center");
            },
            error: function(){
                alert("Error, no existe un digimon con ese termino");
            }
          })

     });    

});
