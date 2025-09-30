export type RoofType = "slanted" | "flat" | "ground";
export type Direction = "south" | "east-west";

export interface SolarConfig {
  costPerkWp: number;
  subsidyRate: number;
  loanMonths: number;
  loanInterestMargin: number; 
  annualPriceIncrease: number; 
  solarCoverage: number; 
  roofMultipliers: Record<RoofType, number>;
  directionMultipliers: Record<Direction, number>;
}

export const solarConfig: SolarConfig = {
  costPerkWp: 4580, 
  subsidyRate: 0.727, 
  loanMonths: 59,
  loanInterestMargin: 1.2,
  annualPriceIncrease: 0.07, 
  solarCoverage: 0.75,
  roofMultipliers: {
    slanted: 1,
    flat: 1.1,
    ground: 1.2,
  },
  directionMultipliers: {
    south: 1,
    "east-west": 0.9,
  },
};