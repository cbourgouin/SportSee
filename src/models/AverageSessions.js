class AverageSessions {
    sessionLength = null;
    day = "";

    constructor(_sesLen, _day) {
        if (typeof _sesLen === "number" && typeof _day === "string") {
            this.sessionLength = _sesLen;
            this.day = _day;
        } else {
            console.error("Class AverageSessions error : data no valid")
        }
    }
}

export default AverageSessions;