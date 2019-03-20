window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/2d2a3f18d3fdd6fdb35f0a05d8d7fa50/${lat},${long}`;
           
            fetch(api)
                .then(data => {
                return data.json();
                })
                .then(data => {
                console.log(data);
                const {temperature, summary, icon } = data.currently;
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
            
                setIcons(icon, document.querySelector(".icon"));
            });
        });
    }

    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "pink"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);

    }
});