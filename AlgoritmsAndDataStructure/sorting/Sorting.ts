import { ISorting } from "../system/ISorting";
import { IComparable } from "../system/IComparable";

export default class Sorting<T extends IComparable<T>> {
  private _arr: T[];
  private _sort: ISorting<T>;

  constructor (arr: T[], sort: ISorting<T>) {
    this._arr = arr;
    this._sort = sort;
  }

  public sort(): T[] {
    return this._sort.sort(this._arr);
  }
}