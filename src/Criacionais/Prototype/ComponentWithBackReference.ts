import Prototype from "./Prototype";

export default class ComponetWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}