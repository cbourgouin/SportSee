class Users {
    firstName = "";
    lastName = "";
    age = null;
    todayScore = null;
    caloriesCount = null;
    proteinCount = null;
    carbohydrateCount = null;
    lipidCount = null;

    constructor(_firName, _lasName, _age, _todSco, _calCount, _proCount, _carCount, _lipCount) {
        
        if (typeof _firName === "string" &&
            typeof _lasName === "string" &&
            typeof _age === "number" &&
            typeof _todSco === "number" &&
            typeof _calCount === "number" &&
            typeof _proCount === "number" &&
            typeof _carCount === "number" &&
            typeof _lipCount === "number"
        ) {
            this.firstName = _firName;
            this.lastName = _lasName;
            this.age = _age;
            this.todayScore = _todSco;
            this.caloriesCount = _calCount;
            this.proteinCount = _proCount;
            this.carbohydrateCount = _carCount;
            this.lipidCount = _lipCount;
        } else {
            console.error("Class Users error : data no valid")
        }
    }
}

export default Users;