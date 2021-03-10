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
// db.userData.insertMany([
//     {
//         energy:{
//             electricity: 50,
//             gas: 20, 
//         } 
//     },
//     {
//         transport:{
//             car: 500,
//             bus: 100,
//             plane: 800,
//         }
//     },
//     {
//         diet:{
//           lowMeat: 4.67,
//         }
//     }
// ])
db.userData.insertMany([
   {
       label: "car",
       quantity: 500
   },
   {
       label: "gas",
       quantity: 10
   },
   {
     label: "bus",
     quantity: 20
   },
   {
    label: "electricity",
    quantity: 4
   },
   {
    label: "plane",
    quantity: 800
   },
   {
    label: "train",
    quantity: 202
   },

])