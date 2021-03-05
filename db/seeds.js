use tryAtomic;

db.dropDatabase();

db.userData.insertMany([
    {
        transport: {
            bus:1000,
            car: 0,
            train: 0,
          },
        energy: {
            electricity: 50,
            gas: 20
        },
        food: {
            meat: 20,
            veg: 10
        }
    },
    {
        transport: {
            bus:0,
            car: 500,
            train: 0,
          },
        energy: {
            electricity: 250,
            gas: 50
        },
        food: {
            meat: 10,
            veg: 30
        }
    },
    {
        transport: {
            bus:0,
            car: 0,
            train: 0,
          },
        energy: {
            electricity: 50,
            gas: 20
        },
        food: {
            meat: 20,
            veg: 10
        }
    },
])