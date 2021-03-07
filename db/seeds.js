use tryAtomic;

db.dropDatabase();


db.emissionFactors.insertMany([
    {
        transport: {
            car: "0.19",
            bus: "0.16",
            train: "0.14",
            plane: "0.28",
        },
        food:{
            highMeat: "7.19",
            mediumMeat: "5.63",
            lowMeat: "4.67",
            pescatarian: "3.91",
            vegetarian: "3.81",
            vegan: "2.89",
        },
        energy:{
            electricity: "0.309",
            gas: "0.203",
        }
    }
])
db.userData.insertMany([
    {
        bus:1000,
        electricity: 50,
        gas: 20, 
        highMeat: 7.19
        
    },
    {
        car: 500,
        electricity: 250,
        gas: 50,
        vegan: 2.89,
    },
    {
        electricity: 50,
        gas: 20,
        lowMeat: 4.67,
    },
])