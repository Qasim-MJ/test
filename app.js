let car = {

    color : "Red",
    
    brand: "BMW",
    
    'make date' : 1990,
    
    engine : {
    
    Size : 3500,
    
    Cylinders : 6,
    
    Valve : 16 
    
    }
    
    }

    for(key in car.engine) {
        console.log(key, car.engine[key])
    }