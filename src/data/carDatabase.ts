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
  {
    name: "Audi",
    models: [
      {
        name: "A3",
        engines: [
          { name: "1.4 TFSI", year: "2012-2020", originalHP: 125, originalTorque: 200, stage1HP: 155, stage1Torque: 250, fuel: "Gasolina" },
          { name: "2.0 TFSI", year: "2012-2020", originalHP: 190, originalTorque: 320, stage1HP: 240, stage1Torque: 380, fuel: "Gasolina" },
          { name: "2.0 TDI", year: "2012-2020", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI CR", year: "2016-2020", originalHP: 184, originalTorque: 380, stage1HP: 225, stage1Torque: 450, fuel: "Diésel" },
        ],
      },
      {
        name: "A4 (B8/B9)",
        engines: [
          { name: "2.0 TFSI", year: "2015-2023", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 390, fuel: "Gasolina" },
          { name: "2.0 TFSI Quattro", year: "2015-2023", originalHP: 252, originalTorque: 370, stage1HP: 310, stage1Torque: 440, fuel: "Gasolina" },
          { name: "2.0 TDI", year: "2015-2023", originalHP: 150, originalTorque: 340, stage1HP: 195, stage1Torque: 420, fuel: "Diésel" },
          { name: "3.0 TDI Quattro", year: "2015-2023", originalHP: 272, originalTorque: 600, stage1HP: 330, stage1Torque: 680, fuel: "Diésel" },
        ],
      },
      {
        name: "RS3",
        engines: [
          { name: "2.5 TFSI", year: "2015-2020", originalHP: 367, originalTorque: 465, stage1HP: 430, stage1Torque: 530, fuel: "Gasolina" },
          { name: "2.5 TFSI (8Y)", year: "2021+", originalHP: 400, originalTorque: 500, stage1HP: 460, stage1Torque: 570, fuel: "Gasolina" },
        ],
      },
      {
        name: "S3",
        engines: [
          { name: "2.0 TFSI", year: "2013-2020", originalHP: 300, originalTorque: 380, stage1HP: 370, stage1Torque: 460, fuel: "Gasolina" },
          { name: "2.0 TFSI (8Y)", year: "2020+", originalHP: 310, originalTorque: 400, stage1HP: 380, stage1Torque: 480, fuel: "Gasolina" },
        ],
      },
    ],
  },
  {
    name: "BMW",
    models: [
      {
        name: "Serie 1 (F20/F40)",
        engines: [
          { name: "118i 1.5T", year: "2015-2019", originalHP: 136, originalTorque: 220, stage1HP: 175, stage1Torque: 280, fuel: "Gasolina" },
          { name: "120i 2.0T", year: "2015-2019", originalHP: 184, originalTorque: 270, stage1HP: 230, stage1Torque: 340, fuel: "Gasolina" },
          { name: "M135i (F40)", year: "2019+", originalHP: 306, originalTorque: 450, stage1HP: 370, stage1Torque: 520, fuel: "Gasolina" },
          { name: "120d 2.0d", year: "2015-2019", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
      {
        name: "Serie 3 (F30/G20)",
        engines: [
          { name: "320i 2.0T", year: "2015-2023", originalHP: 184, originalTorque: 270, stage1HP: 230, stage1Torque: 340, fuel: "Gasolina" },
          { name: "330i 2.0T", year: "2018+", originalHP: 258, originalTorque: 400, stage1HP: 310, stage1Torque: 460, fuel: "Gasolina" },
          { name: "340i 3.0T", year: "2015-2018", originalHP: 326, originalTorque: 450, stage1HP: 400, stage1Torque: 540, fuel: "Gasolina" },
          { name: "M340i 3.0T", year: "2019+", originalHP: 374, originalTorque: 500, stage1HP: 440, stage1Torque: 580, fuel: "Gasolina" },
          { name: "320d 2.0d", year: "2015-2023", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 470, fuel: "Diésel" },
          { name: "330d 3.0d", year: "2018+", originalHP: 286, originalTorque: 650, stage1HP: 340, stage1Torque: 720, fuel: "Diésel" },
        ],
      },
      {
        name: "Serie 5 (G30)",
        engines: [
          { name: "530i 2.0T", year: "2017+", originalHP: 252, originalTorque: 350, stage1HP: 300, stage1Torque: 420, fuel: "Gasolina" },
          { name: "540i 3.0T", year: "2017+", originalHP: 340, originalTorque: 450, stage1HP: 410, stage1Torque: 540, fuel: "Gasolina" },
          { name: "530d 3.0d", year: "2017+", originalHP: 286, originalTorque: 650, stage1HP: 340, stage1Torque: 720, fuel: "Diésel" },
        ],
      },
      {
        name: "M2 / M3 / M4",
        engines: [
          { name: "M2 3.0T (G87)", year: "2022+", originalHP: 460, originalTorque: 550, stage1HP: 530, stage1Torque: 630, fuel: "Gasolina" },
          { name: "M3/M4 3.0T (G80/G82)", year: "2021+", originalHP: 480, originalTorque: 550, stage1HP: 560, stage1Torque: 650, fuel: "Gasolina" },
          { name: "M3/M4 Competition", year: "2021+", originalHP: 510, originalTorque: 650, stage1HP: 590, stage1Torque: 730, fuel: "Gasolina" },
        ],
      },
    ],
  },
  {
    name: "Mercedes-Benz",
    models: [
      {
        name: "Clase A (W177)",
        engines: [
          { name: "A180 1.3T", year: "2018+", originalHP: 136, originalTorque: 200, stage1HP: 170, stage1Torque: 260, fuel: "Gasolina" },
          { name: "A200 1.3T", year: "2018+", originalHP: 163, originalTorque: 250, stage1HP: 195, stage1Torque: 300, fuel: "Gasolina" },
          { name: "A250 2.0T", year: "2018+", originalHP: 224, originalTorque: 350, stage1HP: 280, stage1Torque: 420, fuel: "Gasolina" },
          { name: "A35 AMG 2.0T", year: "2018+", originalHP: 306, originalTorque: 400, stage1HP: 370, stage1Torque: 480, fuel: "Gasolina" },
          { name: "A45 S AMG 2.0T", year: "2019+", originalHP: 421, originalTorque: 500, stage1HP: 480, stage1Torque: 560, fuel: "Gasolina" },
        ],
      },
      {
        name: "Clase C (W205/W206)",
        engines: [
          { name: "C200 1.5T", year: "2018+", originalHP: 184, originalTorque: 280, stage1HP: 225, stage1Torque: 340, fuel: "Gasolina" },
          { name: "C300 2.0T", year: "2018+", originalHP: 258, originalTorque: 370, stage1HP: 310, stage1Torque: 440, fuel: "Gasolina" },
          { name: "C43 AMG 3.0T V6", year: "2018-2021", originalHP: 390, originalTorque: 520, stage1HP: 450, stage1Torque: 600, fuel: "Gasolina" },
          { name: "C63 AMG 4.0T V8", year: "2015-2021", originalHP: 476, originalTorque: 650, stage1HP: 560, stage1Torque: 750, fuel: "Gasolina" },
          { name: "C220d 2.0d", year: "2018+", originalHP: 194, originalTorque: 400, stage1HP: 235, stage1Torque: 470, fuel: "Diésel" },
        ],
      },
      {
        name: "Clase E (W213)",
        engines: [
          { name: "E300 2.0T", year: "2016+", originalHP: 258, originalTorque: 370, stage1HP: 310, stage1Torque: 440, fuel: "Gasolina" },
          { name: "E53 AMG 3.0T", year: "2018+", originalHP: 435, originalTorque: 520, stage1HP: 500, stage1Torque: 600, fuel: "Gasolina" },
          { name: "E63 S AMG 4.0T V8", year: "2017+", originalHP: 612, originalTorque: 850, stage1HP: 700, stage1Torque: 950, fuel: "Gasolina" },
          { name: "E220d 2.0d", year: "2016+", originalHP: 194, originalTorque: 400, stage1HP: 240, stage1Torque: 480, fuel: "Diésel" },
        ],
      },
    ],
  },
  {
    name: "Volkswagen",
    models: [
      {
        name: "Golf (MK7/MK8)",
        engines: [
          { name: "1.0 TSI", year: "2017+", originalHP: 110, originalTorque: 200, stage1HP: 140, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.4 TSI", year: "2013-2020", originalHP: 125, originalTorque: 200, stage1HP: 155, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.5 TSI", year: "2017+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "GTI 2.0 TSI", year: "2013-2020", originalHP: 230, originalTorque: 350, stage1HP: 290, stage1Torque: 420, fuel: "Gasolina" },
          { name: "GTI 2.0 TSI (MK8)", year: "2020+", originalHP: 245, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },
          { name: "R 2.0 TSI", year: "2014-2020", originalHP: 300, originalTorque: 380, stage1HP: 370, stage1Torque: 460, fuel: "Gasolina" },
          { name: "R 2.0 TSI (MK8)", year: "2020+", originalHP: 320, originalTorque: 420, stage1HP: 390, stage1Torque: 490, fuel: "Gasolina" },
          { name: "2.0 TDI", year: "2013+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
        ],
      },
      {
        name: "Polo (AW)",
        engines: [
          { name: "1.0 TSI", year: "2017+", originalHP: 95, originalTorque: 175, stage1HP: 125, stage1Torque: 225, fuel: "Gasolina" },
          { name: "GTI 2.0 TSI", year: "2017+", originalHP: 200, originalTorque: 320, stage1HP: 260, stage1Torque: 400, fuel: "Gasolina" },
        ],
      },
      {
        name: "T-Roc",
        engines: [
          { name: "1.5 TSI", year: "2017+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI R", year: "2019+", originalHP: 300, originalTorque: 400, stage1HP: 370, stage1Torque: 470, fuel: "Gasolina" },
          { name: "2.0 TDI", year: "2017+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
        ],
      },
    ],
  },
  {
    name: "SEAT / CUPRA",
    models: [
      {
        name: "León",
        engines: [
          { name: "1.5 TSI", year: "2017+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI Cupra", year: "2014-2020", originalHP: 290, originalTorque: 380, stage1HP: 360, stage1Torque: 460, fuel: "Gasolina" },
          { name: "2.0 TDI", year: "2013+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
        ],
      },
      {
        name: "Cupra Formentor",
        engines: [
          { name: "1.5 TSI", year: "2020+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI", year: "2020+", originalHP: 245, originalTorque: 370, stage1HP: 305, stage1Torque: 440, fuel: "Gasolina" },
          { name: "2.0 TSI VZ5", year: "2021+", originalHP: 390, originalTorque: 480, stage1HP: 450, stage1Torque: 550, fuel: "Gasolina" },
        ],
      },
    ],
  },
  {
    name: "Ford",
    models: [
      {
        name: "Focus (MK3/MK4)",
        engines: [
          { name: "1.0 EcoBoost", year: "2014+", originalHP: 125, originalTorque: 170, stage1HP: 155, stage1Torque: 220, fuel: "Gasolina" },
          { name: "1.5 EcoBoost", year: "2014+", originalHP: 150, originalTorque: 240, stage1HP: 190, stage1Torque: 300, fuel: "Gasolina" },
          { name: "ST 2.3 EcoBoost", year: "2019+", originalHP: 280, originalTorque: 420, stage1HP: 330, stage1Torque: 490, fuel: "Gasolina" },
          { name: "RS 2.3 EcoBoost", year: "2016-2018", originalHP: 350, originalTorque: 440, stage1HP: 400, stage1Torque: 510, fuel: "Gasolina" },
        ],
      },
      {
        name: "Fiesta (MK8)",
        engines: [
          { name: "1.0 EcoBoost", year: "2017+", originalHP: 100, originalTorque: 170, stage1HP: 135, stage1Torque: 220, fuel: "Gasolina" },
          { name: "ST 1.5 EcoBoost", year: "2018+", originalHP: 200, originalTorque: 290, stage1HP: 240, stage1Torque: 350, fuel: "Gasolina" },
        ],
      },
      {
        name: "Mustang",
        engines: [
          { name: "2.3 EcoBoost", year: "2015+", originalHP: 317, originalTorque: 432, stage1HP: 370, stage1Torque: 500, fuel: "Gasolina" },
          { name: "5.0 V8 GT", year: "2018+", originalHP: 450, originalTorque: 529, stage1HP: 480, stage1Torque: 560, fuel: "Gasolina" },
        ],
      },
    ],
  },
  {
    name: "Renault",
    models: [
      {
        name: "Mégane RS",
        engines: [
          { name: "1.8T Trophy", year: "2018+", originalHP: 300, originalTorque: 420, stage1HP: 340, stage1Torque: 480, fuel: "Gasolina" },
          { name: "1.8T", year: "2018+", originalHP: 280, originalTorque: 390, stage1HP: 320, stage1Torque: 450, fuel: "Gasolina" },
        ],
      },
      {
        name: "Clio RS",
        engines: [
          { name: "1.6T", year: "2013-2019", originalHP: 200, originalTorque: 240, stage1HP: 230, stage1Torque: 280, fuel: "Gasolina" },
          { name: "1.8T Trophy", year: "2019+", originalHP: 220, originalTorque: 260, stage1HP: 250, stage1Torque: 310, fuel: "Gasolina" },
        ],
      },
    ],
  },
  {
    name: "Peugeot",
    models: [
      {
        name: "308",
        engines: [
          { name: "1.2 PureTech", year: "2014+", originalHP: 130, originalTorque: 230, stage1HP: 160, stage1Torque: 280, fuel: "Gasolina" },
          { name: "GTI 1.6T", year: "2015-2021", originalHP: 270, originalTorque: 330, stage1HP: 310, stage1Torque: 390, fuel: "Gasolina" },
          { name: "1.5 BlueHDi", year: "2017+", originalHP: 130, originalTorque: 300, stage1HP: 160, stage1Torque: 360, fuel: "Diésel" },
          { name: "2.0 BlueHDi", year: "2014+", originalHP: 180, originalTorque: 400, stage1HP: 215, stage1Torque: 470, fuel: "Diésel" },
        ],
      },
    ],
  },
  {
    name: "Toyota",
    models: [
      {
        name: "GR Yaris",
        engines: [
          { name: "1.6T AWD", year: "2020+", originalHP: 261, originalTorque: 360, stage1HP: 310, stage1Torque: 420, fuel: "Gasolina" },
        ],
      },
      {
        name: "Supra (A90)",
        engines: [
          { name: "2.0T", year: "2019+", originalHP: 258, originalTorque: 400, stage1HP: 310, stage1Torque: 460, fuel: "Gasolina" },
          { name: "3.0T", year: "2019+", originalHP: 340, originalTorque: 500, stage1HP: 420, stage1Torque: 580, fuel: "Gasolina" },
        ],
      },
    ],
  },
  {
    name: "Nissan",
    models: [
      {
        name: "GT-R (R35)",
        engines: [
          { name: "3.8 V6 Twin Turbo", year: "2017+", originalHP: 570, originalTorque: 637, stage1HP: 650, stage1Torque: 720, fuel: "Gasolina" },
          { name: "3.8 V6 TT Nismo", year: "2020+", originalHP: 600, originalTorque: 652, stage1HP: 680, stage1Torque: 740, fuel: "Gasolina" },
        ],
      },
      {
        name: "370Z",
        engines: [
          { name: "3.7 V6 NA", year: "2009-2020", originalHP: 328, originalTorque: 366, stage1HP: 345, stage1Torque: 380, fuel: "Gasolina" },
        ],
      },
    ],
  },
];
