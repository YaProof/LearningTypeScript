import User from "./comparable";

export function sortingArray1(): User[] {
  return [
    new User(5, "name 5", 5),
    new User(15, "name 15", 5),
    new User(10, "name 10", 5),
    new User(55, "name 55", 5),
    new User(35, "name 35", 5),
    new User(1, "name 1", 5),
    new User(4, "name 4", 5),
    new User(22, "name 2", 5),
    new User(24, "name 24", 5),
    new User(31, "name 31", 5)
  ];
}

export function sortingArray2(): User[] {
  return [
    new User(95, "name 95", 5),
    new User(15, "name 15", 5),
    new User(10, "name 10", 5),
    new User(55, "name 55", 5),
    new User(35, "name 35", 5),
    new User(71, "name 17", 5),
    new User(4, "name 4", 5),
    new User(22, "name 2", 5),
    new User(24, "name 24", 5),
    new User(1, "name 1", 5)
  ];
}
