
    
    var flowers = 0;

    function flowerClick(number){
        flowers = flowers + number;
        document.getElementById("flowers").innerHTML =  cookies;
    };

    var cursors = 0;

    function buyCursor(){
        var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
        if(flowers >= cursorCost){
            cursors = cursors + 1;
            flowers = floweers - cursorCost;
            document.getElementById('cursors').innerHTML = cursors;
            document.getElementById('flowers').innerHTML = flowers;
        };

        var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
        document.getElementById('cursorCost').innerHTML = nextCost;
    };

    window.setInterval(function(){

        flowerClick(cursors);
    }, 1000);
