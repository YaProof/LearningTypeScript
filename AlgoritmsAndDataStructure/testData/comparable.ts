import { IComparable } from "../system/IComparable";

export default class User implements IComparable<User> {
  private _id: number;
  private _name: string;
  private _age: number;

  get id(): number { return this._id; }
  get name(): string { return this._name; }
  get age(): number { return this._age; }

  constructor(id: number, name: string, age: number) {
    this._id = id;
    this._name = name;
    this._age = age;
  }

  public compareTo(val: User): number {
    return this._id - val.id;
  };
}
