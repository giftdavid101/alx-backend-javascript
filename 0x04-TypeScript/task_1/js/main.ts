export interface TeacherAttributes {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  contract: false,
  [index:string]: any,
}

export interface Director extends TeacherAttributes {
  numberOfReport: number,
}
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

class Teacher implements TeacherAttributes {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    attributes?: TeacherAttributes
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (attributes) {
      Object.assign(this, attributes);
    }
  }
}
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}
