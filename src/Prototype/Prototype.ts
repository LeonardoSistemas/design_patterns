import ComponetWithBackReference from "./ComponentWithBackReference";

export default class Prototype {
    public primitive : any;
    public component!: object;
    public circularReference!: ComponetWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        clone.circulatarReference = {
            ...this.circularReference,
            prorotype : {...this},
        };

        return clone;
    }
}