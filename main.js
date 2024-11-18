const casas = [
    {   
        nombre:"Bonita",
        precio:2000,
        direccion:"2405 Barhamvillie Rd, Columbia, SC 29204",
        foto: "https://photos.zillowstatic.com/fp/ebeb81b2466ee7fcb931e12c17ac67ee-p_e.webp",
        estado:"venta",
        baño:2,
        cuartos:3,
        metros:1000,
        lugar:"Miami Beach"
    },
    {
        nombre:"Bonita",
        precio:2000,
        direccion:"2405 Barhamvillie Rd, Columbia, SC 29204",
        foto: "https://photos.zillowstatic.com/fp/c2889824d63d8a0d6080a40b57e8adf6-p_e.webp",
        estado:"venta",
        baño:2,
        cuartos:3,
        metros:1000,
        lugar:"Miami Beach"
       
    },
    {
        nombre:"Ohana",
        precio:2000,
        direccion:"2405 Barhamvillie Rd, Columbia, SC 29204",
        foto: "https://photos.zillowstatic.com/fp/4f353da240be397baeed43af6adf8664-p_e.webp",
        estado:"venta",
        baño:2,
        cuartos:3,
        metros:1000,
        lugar:"Miami Beach"
       
    },
    {
        nombre:"Ohana",
        precio:2000,
        direccion:"2405 Barhamvillie Rd, Columbia, SC 29204",
        foto: "https://photos.zillowstatic.com/fp/4f353da240be397baeed43af6adf8664-p_e.webp",
        estado:"venta",
        baño:2,
        cuartos:3,
        metros:1000,
        lugar:"Miami Beach"
       
    },
    {
        nombre:"Ohana",
        precio:2000,
        direccion:"2405 Barhamvillie Rd, Columbia, SC 29204",
        foto: "https://photos.zillowstatic.com/fp/4f353da240be397baeed43af6adf8664-p_e.webp",
        estado:"venta",
        baño:2,
        cuartos:3,
        metros:1000,
        lugar:"Miami Beach"
       
    },
    {
        nombre:"Ohana",
        precio:2000,
        direccion:"2405 Barhamvillie Rd, Columbia, SC 29204",
        foto: "https://photos.zillowstatic.com/fp/4f353da240be397baeed43af6adf8664-p_e.webp",
        estado:"venta",
        baño:2,
        cuartos:3,
        metros:1000,
        lugar:"Miami Beach"
       
    },
    
   
]
$("#popup").hide()


function Mostrarcasas(lista) {
    $("#casas").empty();
    for (let i = 0; i < casas.length; i++) {
        $("#casas").append(
            `<div class="cartas">
                <img src="${lista[i].foto}" >
                <div class="contorno">
                <h2>${lista[i].precio}</h2>
                <h2>${lista[i].nombre}</h2>
                <div class="descripcion">
                    <p>${lista[i].cuartos} beds| </p> 
                    <p>${lista[i].baño}  baths| </p> |
                    <p>${lista[i].direccion}</p> 
                    <p>${lista[i].estado} sqft</p> |
                   
                </div>
                <p>${lista[i].lugar}</p>
                </div>
            </div>`
        )
        
    }
    $(".cartas").click(function () {
        let indice = $(this).index()
        console.log(indice)
        $("#foto").attr("src", casas[indice].foto)
        $("#popup").show()
    })
}

$(document).ready(function () {
    Mostrarcasas(casas)
    $("#buscar").click(function () {
        let busquedad = $("#buscador").val().toLowerCase()
        let arraybusquedad = []
        if (busquedad === "") {
            Mostrarcasas(casas)

        } else {
            for (let i = 0; i < casas.length; i++) {
                if (busquedad === casas[i].nombre.toLowerCase()) {
                    arraybusquedad.push(casas[i])
                }
            }
        }

        Mostrarcasas(arraybusquedad)
        $("#buscador").val("")
    })
});