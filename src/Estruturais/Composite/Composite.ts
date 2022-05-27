import Component from "./Component";

export default class Composite extends Component {
    protected children: Component[] = [];

    public add(component: Component): void {
        this.children.push(component);
        component.setParent(this);
    }

    public remove(component: Component): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setParent(this);
    }

    public isComposite(): boolean {
        return true;
    }

    public operation(): string {
        const result = [];
        for (const child of this.children) {
            result.push(child.operation());
        }

        return `Branch(${result.join("+")})`;
    }

}