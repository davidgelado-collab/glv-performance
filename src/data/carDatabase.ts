export interface CarEngine {
  name: string;
  year: string;
  originalHP: number;
  originalTorque: number;
  stage1HP: number;
  stage1Torque: number;
  fuel: "Gasolina" | "Diésel";
}

export interface CarModel {
  name: string;
  engines: CarEngine[];
}

export interface CarBrand {
  name: string;
  models: CarModel[];
}

export const carDatabase: CarBrand[] = [
  // ─── AUDI ───────────────────────────────────────────────
  {
    name: "Audi",
    models: [
      {
        name: "80",
        engines: [
          { name: "1.9 TDI 90hp", year: "1991-1995", originalHP: 90, originalTorque: 202, stage1HP: 115, stage1Torque: 260, fuel: "Diesel" },
        ],
      },
      {
        name: "A1 (8X 2010-2014)",
        engines: [
          { name: "1.2 TFSI 86hp", year: "2010-2014", originalHP: 86, originalTorque: 160, stage1HP: 140, stage1Torque: 225, fuel: "Gasolina" },
          { name: "1.2 TFSI 105hp", year: "2010-2014", originalHP: 105, originalTorque: 175, stage1HP: 140, stage1Torque: 225, fuel: "Gasolina" },
          { name: "1.4 TFSI 122hp", year: "2010-2014", originalHP: 122, originalTorque: 200, stage1HP: 155, stage1Torque: 270, fuel: "Gasolina" },
          { name: "1.4 TFSI 140hp (CPTA)", year: "2010-2014", originalHP: 140, originalTorque: 250, stage1HP: 190, stage1Torque: 320, fuel: "Gasolina" },
          { name: "1.4 TFSI 185hp", year: "2010-2014", originalHP: 185, originalTorque: 250, stage1HP: 210, stage1Torque: 300, fuel: "Gasolina" },
          { name: "2.0 TFSI 256hp", year: "2010-2014", originalHP: 256, originalTorque: 350, stage1HP: 300, stage1Torque: 420, fuel: "Gasolina" },
          { name: "S1 2.0 TFSI 231hp", year: "2010-2014", originalHP: 231, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },
          { name: "1.6 TDI CR 90hp", year: "2010-2014", originalHP: 90, originalTorque: 230, stage1HP: 140, stage1Torque: 320, fuel: "Diésel" },
          { name: "1.6 TDI CR 105hp", year: "2010-2014", originalHP: 105, originalTorque: 250, stage1HP: 140, stage1Torque: 320, fuel: "Diésel" },
          { name: "2.0 TDI CR 136hp", year: "2010-2014", originalHP: 136, originalTorque: 320, stage1HP: 185, stage1Torque: 400, fuel: "Diésel" },
          { name: "2.0 TDI CR 143hp", year: "2010-2014", originalHP: 143, originalTorque: 320, stage1HP: 185, stage1Torque: 400, fuel: "Diésel" },
        ],
      },
      {
        name: "A1 (8X 2015-2017)",
        engines: [
          { name: "1.0 TFSI 82hp", year: "2015-2017", originalHP: 82, originalTorque: 160, stage1HP: 140, stage1Torque: 240, fuel: "Gasolina" },
          { name: "1.0 TFSI 95hp", year: "2015-2017", originalHP: 95, originalTorque: 160, stage1HP: 140, stage1Torque: 240, fuel: "Gasolina" },
          { name: "1.0 TFSI 110hp", year: "2015-2017", originalHP: 110, originalTorque: 200, stage1HP: 140, stage1Torque: 240, fuel: "Gasolina" },
          { name: "1.4 TFSI 125hp", year: "2015-2017", originalHP: 125, originalTorque: 200, stage1HP: 150, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.4 TFSI (COD) 150hp", year: "2015-2017", originalHP: 150, originalTorque: 200, stage1HP: 170, stage1Torque: 300, fuel: "Gasolina" },
          { name: "1.8 TFSI 192hp", year: "2015-2017", originalHP: 192, originalTorque: 250, stage1HP: 220, stage1Torque: 380, fuel: "Gasolina" },
          { name: "S1 2.0 TFSI 231hp", year: "2015-2017", originalHP: 231, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },
          { name: "1.4 TDI 90hp", year: "2015-2017", originalHP: 90, originalTorque: 230, stage1HP: 115, stage1Torque: 280, fuel: "Diésel" },
          { name: "1.6 TDI 116hp", year: "2015-2017", originalHP: 116, originalTorque: 250, stage1HP: 145, stage1Torque: 310, fuel: "Diésel" },
        ],
      },
      {name: "A1 (GB 2018→)",
        engines: [
          { name: "25 TFSI (1.0T) 95hp", year: "2018+", originalHP: 95, originalTorque: 175, stage1HP: 130, stage1Torque: 240, fuel: "Gasolina" },
          { name: "30 TFSI (1.0T) 116hp", year: "2018+", originalHP: 116, originalTorque: 200, stage1HP: 140, stage1Torque: 240, fuel: "Gasolina" },
          { name: "35 TFSI (1.5T) 150hp", year: "2018+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "40 TFSI (2.0T) 200hp", year: "2018+", originalHP: 200, originalTorque: 320, stage1HP: 245, stage1Torque: 430, fuel: "Gasolina" },
        ],
      },
    ],
  },


];
