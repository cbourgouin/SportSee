class DailyActivity {
    day = "";
    kilogram = null;
    calories = null;

    constructor(_day, _kil, _cal) {
        if (typeof _day === "string" &&
            typeof _kil === "number" &&
            typeof _cal === "number"
        ) {
            this.day = _day;
            this.kilogram = _kil;
            this.calories = _cal;
        } else {
            console.error("Class DailyActivity error : data no valid")
        }
    }
}

export default DailyActivity;