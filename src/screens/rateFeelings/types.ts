export enum FeelingsTypes {
  VOTE1 = 1,
  VOTE2 = 2,
  VOTE3 = 3,
  VOTE4 = 4,
  VOTE5 = 5,
}

export interface Feelings {
  [key: number]: string
}
