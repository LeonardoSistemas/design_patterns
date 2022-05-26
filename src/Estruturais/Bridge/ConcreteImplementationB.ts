import Implementation from "./Implementation";

export default class ConcreteImplementationB implements Implementation {
    operationImplementation(): string {
        return "ConcreteImplementationA: Here is the result on the plataform B.";
    }

}