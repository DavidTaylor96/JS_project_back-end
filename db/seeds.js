use tryAtomic;

db.dropDatabase();

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