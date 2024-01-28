//const API_URL = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
const API_KEY = 'e885fd2c18d17ea805755f848fca8534';


 const imputValue = document.getElementById("contInput").addEventListener("submit",(event) => {
    event.preventDefault();

    const valorIngresado = document.getElementById("cityImput").value;


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${valorIngresado}&appid=${API_KEY}&lang=es&units=metric`;

    fetch(url)
    .then(respuesta=> respuesta.json())
    
    .then(segundaRespuesta => {
        //console.log(segundaRespuesta);

        const { name, main, weather }= segundaRespuesta;
        const {temp, humidity} = main;
        const {description,icon} = weather[0];
        

        const noCity =document.getElementById('noCity');
           //const noCityError = document.getElementById('noCityError')  h3
        
       

            /*const name = segundaRespuesta.name;
            const main = segundaRespuesta.main;
            const temp = segundaRespuesta.temp;
            const weather = segundaRespuesta.weather;*/


    
         if(valorIngresado){
            noCity.style.display = "none";

            const imagenFinal = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            
                // nombre de la ciudad
            document.getElementById('title').innerText = name ;

                    // húmedad
            document.getElementById('humidity').innerText = humidity + "%";
                  // console.log(humidity + "%");
    
                      // Temperatura
             document.getElementById('unit')
            .innerText= temp + "°" ;
               //console.log(temp + "°");
         
                          // Imagen
             document.getElementById('img').src = imagenFinal;
           
    
                         //  Descripción
             document.getElementById('description')
             .innerText =  description ;
               //console.log(weather[0].description);

         }
        
            
    
    })

    .catch((error) =>{
        
        console.log(error)

    })
});
