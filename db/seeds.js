use tryAtomic;

db.dropDatabase();


db.emissionFactors.insertMany([
    {
        transport: {
            car: 0.19,
            bus: 0.16,
            train: 0.14,
            plane: 0.28,
        },
        diet:{
            highMeat: 7.19,
            mediumMeat: 5.63,
            lowMeat: 4.67,
            pescatarian: 3.91,
            vegetarian: 3.81,
            vegan: 2.89,
        },
        energy:{
            electricity: 0.309,
            gas: 0.203,
        }
    }
])

db.userData.insertMany([
   {
       label: "car",
       quantity: 500,
       unit: 'mile(s)'
   },
   {
       label: "gas",
       quantity: 10,
       unit: 'kWh'
   },
   {
     label: "bus",
     quantity: 20,
     unit: 'mile(s)'
   },
   {
    label: "electricity",
    quantity: 4,
    unit: 'kWh'
   },
   {
    label: "plane",
    quantity: 800,
    unit: 'mile(s)'
   },
   {
    label: "train",
    quantity: 202,
    unit: 'mile(s)'
   },

])