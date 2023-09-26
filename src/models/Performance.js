class Performance {
    kind = "";
    value = null;

    constructor(_kin, _val) {
        if (typeof _kin === "string" &&
            typeof _val === "number"
        ) {
            this.kind = _kin;
            this.value = _val;
        } else {
            console.error("Class Performance error : data no valid")
        }
    }
}

export default Performance;