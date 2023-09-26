class AverageSessions {
    sessionLength = null;
    day = null;

    constructor(_sesLen, _day) {
        if (typeof _sesLen === "number" && typeof _day === "number") {
            this.sessionLength = _sesLen;
            this.day = _day;
        } else {
            console.error("Class AverageSessions error : data no valid")
        }
    }
}

export default AverageSessions;