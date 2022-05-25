export default class Singleton {
    private static intance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.intance) {
            Singleton.intance = new Singleton();
        }

        return Singleton.intance;
    }

    public someBusinessLogic() {

    }
}