import { solarConfig, type RoofType, type Direction } from "../config/solar.config";

export interface Result {
  power: number; // kWp
  totalCost: number; // zł
  subsidyCost: number; // zł
  monthlyInstallment: number; // zł
  savings25Years: number; // zł
}

export class SolarCalculatorModel {
  private monthlyCost: number;
  private roofType: RoofType;
  private direction: Direction;

  constructor(monthlyCost: number, roofType: RoofType, direction: Direction) {
    this.monthlyCost = monthlyCost;
    this.roofType = roofType;
    this.direction = direction;
  }

  calculate(): Result {
    const cfg = solarConfig;

    // 1. Oblicz moc instalacji
    let basePower = this.monthlyCost / 46;
    basePower *= cfg.roofMultipliers[this.roofType];
    basePower *= cfg.directionMultipliers[this.direction];
    const power = parseFloat(basePower.toFixed(1));

    // 2. Koszty
    const totalCost = Math.round(power * cfg.costPerkWp);
    const subsidyCost = Math.round(totalCost * cfg.subsidyRate);
    const monthlyInstallment = Math.round(
      (subsidyCost / cfg.loanMonths) * cfg.loanInterestMargin
    );

    // 3. Symulacja oszczędności
    const annualCostNow = this.monthlyCost * 12;
    let savings25Years = 0;
    let yearlyCost = annualCostNow;

    for (let i = 0; i < 25; i++) {
      savings25Years += yearlyCost;
      yearlyCost *= 1 + cfg.annualPriceIncrease;
    }

    savings25Years = Math.round(savings25Years * cfg.solarCoverage);

    return {
      power,
      totalCost,
      subsidyCost,
      monthlyInstallment,
      savings25Years,
    };
  }
}