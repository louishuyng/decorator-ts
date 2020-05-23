import { logMethod } from "./method";
import { logProperty } from "./property";

class Employee {
  @logProperty
  name: string;

  constructor(private firstName: string, private lastName: string) {}

  @logMethod
  greet(message: string): string {
    return `${this.firstName} ${this.lastName} says: ${message}`;
  }
}

const emp = new Employee("Mohan Ram", "Ratnakumar");

emp.greet("Hello");
