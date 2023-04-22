export enum FeelingsTypes {
  VOTE1 = 1,
  VOTE2 = 2,
  VOTE3 = 3,
  VOTE4 = 4,
  VOTE5 = 5,
}

export enum FeelingsNames {
  Slinghtly = "Slinghtly",
  ALittle = "A Little",
  Fairly = "Fairly",
  Very = "Very",
  Extremely = "Extremely",
}

export interface Feelings {
  [key: number]: string;
}
