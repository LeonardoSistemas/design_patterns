import Abstraction from "./Abstraction";

export default class ExtendedAbastraction extends Abstraction{
    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `ExtendedAbastraction: Extended operation with:\n${result}`;
    }
}