export {};

// クラス図 演習1
class Employee {
    private id: number;
    private name: string;
    private salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public work() {
        console.log(`${this.name} is working`);
    }

    protected getSalary(): number {
        return this.salary;
    }

    protected setSalary(salary: number): void {
        this.salary = salary;
    }
}