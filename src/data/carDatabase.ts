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
        name: "A1 (8X)",
        engines: [
          { name: "1.9 TDI 90hp", year: "1991-1995", originalHP: 90, originalTorque: 202, stage1HP: 115, stage1Torque: 260, fuel: "Diesel" },
        ],
      },
      {
        name: "A1 (8X)",
        engines: [
          { name: "1.2 TFSI 86hp", year: "2010-2014", originalHP: 86, originalTorque: 160, stage1HP: 140, stage1Torque: 225, fuel: "Gasolina" },
          { name: "1.2 TFSI 105hp", year: "2010-2014", originalHP: 105, originalTorque: 175, stage1HP: 140, stage1Torque: 225, fuel: "Gasolina" },
          { name: "1.4 TFSI 122hp", year: "2010-2014", originalHP: 122, originalTorque: 200, stage1HP: 155, stage1Torque: 270, fuel: "Gasolina" },
          { name: "1.4 TFSI 140hp (CPTA)", year: "2010-2014", originalHP: 140, originalTorque: 250, stage1HP: 190, stage1Torque: 320, fuel: "Gasolina" },
          { name: "1.4 TFSI 185hp", year: "2010-2014", originalHP: 185, originalTorque: 250, stage1HP: 210, stage1Torque: 300, fuel: "Gasolina" },
          { name: "2.0 TFSI 256hp", year: "2010-2014", originalHP: 256, originalTorque: 350, stage1HP: 300, stage1Torque: 420, fuel: "Gasolina" },
          { name: "S1 2.0 TFSI 256hp", year: "2010-2014", originalHP: 231, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },

          { name: "1.0 TFSI 95hp", year: "2015-2018", originalHP: 95, originalTorque: 160, stage1HP: 130, stage1Torque: 220, fuel: "Gasolina" },
          { name: "1.4 TFSI 125hp", year: "2014-2018", originalHP: 125, originalTorque: 200, stage1HP: 155, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.0 TSI 95hp", year: "2018+", originalHP: 95, originalTorque: 175, stage1HP: 130, stage1Torque: 230, fuel: "Gasolina" },
          { name: "1.0 TSI 116hp", year: "2018+", originalHP: 116, originalTorque: 200, stage1HP: 145, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.5 TFSI 150hp", year: "2018+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TFSI S1 231hp", year: "2014-2018", originalHP: 231, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },
          { name: "1.6 TDI 116hp", year: "2015-2018", originalHP: 116, originalTorque: 250, stage1HP: 145, stage1Torque: 310, fuel: "Diésel" },
        ],
      },
      {
        name: "A3 (8V)",
        engines: [
          { name: "1.2 TFSI 110hp", year: "2012-2016", originalHP: 110, originalTorque: 175, stage1HP: 140, stage1Torque: 225, fuel: "Gasolina" },
          { name: "1.4 TFSI 125hp", year: "2012-2016", originalHP: 125, originalTorque: 200, stage1HP: 155, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.4 TFSI 140hp", year: "2012-2016", originalHP: 140, originalTorque: 250, stage1HP: 170, stage1Torque: 300, fuel: "Gasolina" },
          { name: "1.4 TFSI 150hp", year: "2014-2020", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "1.8 TFSI 180hp", year: "2012-2016", originalHP: 180, originalTorque: 250, stage1HP: 230, stage1Torque: 330, fuel: "Gasolina" },
          { name: "2.0 TFSI 190hp", year: "2016-2020", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 380, fuel: "Gasolina" },
          { name: "2.0 TFSI 220hp", year: "2012-2016", originalHP: 220, originalTorque: 258, stage1HP: 300, stage1Torque: 380, fuel: "Gasolina" },
          { name: "S3 2.0 TFSI 300hp", year: "2013-2020", originalHP: 300, originalTorque: 380, stage1HP: 370, stage1Torque: 460, fuel: "Gasolina" },
          { name: "RS3 2.5 TFSI 367hp", year: "2015-2017", originalHP: 367, originalTorque: 465, stage1HP: 430, stage1Torque: 550, fuel: "Gasolina" },
          { name: "RS3 2.5 TFSI 400hp", year: "2017-2020", originalHP: 400, originalTorque: 480, stage1HP: 460, stage1Torque: 560, fuel: "Gasolina" },
          { name: "1.6 TDI 105hp", year: "2012-2016", originalHP: 105, originalTorque: 250, stage1HP: 140, stage1Torque: 310, fuel: "Diésel" },
          { name: "1.6 TDI 110hp", year: "2013-2020", originalHP: 110, originalTorque: 250, stage1HP: 145, stage1Torque: 310, fuel: "Diésel" },
          { name: "2.0 TDI CR 150hp", year: "2012-2020", originalHP: 150, originalTorque: 320, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI CR 184hp", year: "2013-2020", originalHP: 184, originalTorque: 380, stage1HP: 225, stage1Torque: 450, fuel: "Diésel" },
        ],
      },
      {
        name: "A3 (8Y)",
        engines: [
          { name: "1.0 TSI 110hp", year: "2020+", originalHP: 110, originalTorque: 200, stage1HP: 140, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.5 TFSI 150hp", year: "2020+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TFSI 200hp", year: "2020+", originalHP: 200, originalTorque: 320, stage1HP: 245, stage1Torque: 380, fuel: "Gasolina" },
          { name: "S3 2.0 TFSI 310hp", year: "2020+", originalHP: 310, originalTorque: 400, stage1HP: 380, stage1Torque: 480, fuel: "Gasolina" },
          { name: "RS3 2.5 TFSI 400hp", year: "2021+", originalHP: 400, originalTorque: 500, stage1HP: 460, stage1Torque: 570, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2020+", originalHP: 150, originalTorque: 360, stage1HP: 190, stage1Torque: 430, fuel: "Diésel" },
          { name: "2.0 TDI 200hp", year: "2020+", originalHP: 200, originalTorque: 400, stage1HP: 240, stage1Torque: 470, fuel: "Diésel" },
        ],
      },
      {
        name: "A4 (B8/B9)",
        engines: [
          { name: "1.4 TFSI 150hp", year: "2015-2019", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TFSI 190hp", year: "2015-2023", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 390, fuel: "Gasolina" },
          { name: "2.0 TFSI 252hp", year: "2015-2023", originalHP: 252, originalTorque: 370, stage1HP: 310, stage1Torque: 440, fuel: "Gasolina" },
          { name: "S4 3.0 TFSI 354hp", year: "2016+", originalHP: 354, originalTorque: 500, stage1HP: 420, stage1Torque: 580, fuel: "Gasolina" },
          { name: "RS4 2.9 TFSI 450hp", year: "2017+", originalHP: 450, originalTorque: 600, stage1HP: 510, stage1Torque: 680, fuel: "Gasolina" },
          { name: "2.0 TDI 122hp", year: "2015-2019", originalHP: 122, originalTorque: 290, stage1HP: 160, stage1Torque: 360, fuel: "Diésel" },
          { name: "2.0 TDI 150hp", year: "2015-2023", originalHP: 150, originalTorque: 340, stage1HP: 195, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 190hp", year: "2015-2023", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
          { name: "3.0 TDI 272hp", year: "2015-2023", originalHP: 272, originalTorque: 600, stage1HP: 330, stage1Torque: 680, fuel: "Diésel" },
        ],
      },
      {
        name: "A5",
        engines: [
          { name: "2.0 TFSI 190hp", year: "2016+", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 390, fuel: "Gasolina" },
          { name: "2.0 TFSI 252hp", year: "2016+", originalHP: 252, originalTorque: 370, stage1HP: 310, stage1Torque: 440, fuel: "Gasolina" },
          { name: "S5 3.0 TFSI 354hp", year: "2016+", originalHP: 354, originalTorque: 500, stage1HP: 420, stage1Torque: 580, fuel: "Gasolina" },
          { name: "RS5 2.9 TFSI 450hp", year: "2017+", originalHP: 450, originalTorque: 600, stage1HP: 510, stage1Torque: 680, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2016+", originalHP: 150, originalTorque: 340, stage1HP: 195, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 190hp", year: "2016+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
          { name: "3.0 TDI 286hp", year: "2016+", originalHP: 286, originalTorque: 620, stage1HP: 340, stage1Torque: 700, fuel: "Diésel" },
        ],
      },
      {
        name: "A6 (C7/C8)",
        engines: [
          { name: "2.0 TFSI 245hp", year: "2018+", originalHP: 245, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },
          { name: "3.0 TFSI 340hp", year: "2018+", originalHP: 340, originalTorque: 500, stage1HP: 400, stage1Torque: 570, fuel: "Gasolina" },
          { name: "S6 2.9 TFSI 450hp", year: "2019+", originalHP: 450, originalTorque: 600, stage1HP: 520, stage1Torque: 700, fuel: "Gasolina" },
          { name: "RS6 4.0 TFSI 600hp", year: "2019+", originalHP: 600, originalTorque: 800, stage1HP: 700, stage1Torque: 920, fuel: "Gasolina" },
          { name: "2.0 TDI 204hp", year: "2018+", originalHP: 204, originalTorque: 400, stage1HP: 245, stage1Torque: 470, fuel: "Diésel" },
          { name: "3.0 TDI 286hp", year: "2018+", originalHP: 286, originalTorque: 620, stage1HP: 340, stage1Torque: 700, fuel: "Diésel" },
        ],
      },
      {
        name: "Q3",
        engines: [
          { name: "1.5 TFSI 150hp", year: "2018+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TFSI 230hp", year: "2018+", originalHP: 230, originalTorque: 350, stage1HP: 285, stage1Torque: 420, fuel: "Gasolina" },
          { name: "RSQ3 2.5 TFSI 400hp", year: "2019+", originalHP: 400, originalTorque: 480, stage1HP: 460, stage1Torque: 560, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2018+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 200hp", year: "2018+", originalHP: 200, originalTorque: 400, stage1HP: 240, stage1Torque: 470, fuel: "Diésel" },
        ],
      },
      {
        name: "Q5",
        engines: [
          { name: "2.0 TFSI 252hp", year: "2016+", originalHP: 252, originalTorque: 370, stage1HP: 310, stage1Torque: 440, fuel: "Gasolina" },
          { name: "SQ5 3.0 TFSI 354hp", year: "2017+", originalHP: 354, originalTorque: 500, stage1HP: 420, stage1Torque: 580, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2016+", originalHP: 150, originalTorque: 340, stage1HP: 195, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 190hp", year: "2016+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
          { name: "3.0 TDI 286hp", year: "2016+", originalHP: 286, originalTorque: 620, stage1HP: 340, stage1Torque: 700, fuel: "Diésel" },
        ],
      },
      {
        name: "Q7 / Q8",
        engines: [
          { name: "Q7 3.0 TFSI 340hp", year: "2015+", originalHP: 340, originalTorque: 500, stage1HP: 400, stage1Torque: 570, fuel: "Gasolina" },
          { name: "Q8 3.0 TFSI 340hp", year: "2018+", originalHP: 340, originalTorque: 500, stage1HP: 400, stage1Torque: 580, fuel: "Gasolina" },
          { name: "RSQ8 4.0 TFSI 600hp", year: "2019+", originalHP: 600, originalTorque: 800, stage1HP: 700, stage1Torque: 920, fuel: "Gasolina" },
          { name: "Q7 3.0 TDI 272hp", year: "2015+", originalHP: 272, originalTorque: 600, stage1HP: 330, stage1Torque: 680, fuel: "Diésel" },
          { name: "SQ7 4.0 TDI 435hp", year: "2016+", originalHP: 435, originalTorque: 900, stage1HP: 490, stage1Torque: 980, fuel: "Diésel" },
          { name: "SQ8 4.0 TDI 435hp", year: "2018+", originalHP: 435, originalTorque: 900, stage1HP: 490, stage1Torque: 980, fuel: "Diésel" },
        ],
      },
      {
        name: "TT / TTS / TTRS",
        engines: [
          { name: "TT 2.0 TFSI 230hp", year: "2014+", originalHP: 230, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },
          { name: "TTS 2.0 TFSI 310hp", year: "2014+", originalHP: 310, originalTorque: 400, stage1HP: 380, stage1Torque: 480, fuel: "Gasolina" },
          { name: "TTRS 2.5 TFSI 400hp", year: "2016+", originalHP: 400, originalTorque: 480, stage1HP: 460, stage1Torque: 560, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── BMW ────────────────────────────────────────────────
  {
    name: "BMW",
    models: [
      {
        name: "Serie 1 (F20/F40)",
        engines: [
          { name: "116i 1.5T 109hp", year: "2015-2019", originalHP: 109, originalTorque: 180, stage1HP: 145, stage1Torque: 240, fuel: "Gasolina" },
          { name: "118i 1.5T 136hp", year: "2015-2019", originalHP: 136, originalTorque: 220, stage1HP: 175, stage1Torque: 280, fuel: "Gasolina" },
          { name: "120i 2.0T 184hp", year: "2015-2019", originalHP: 184, originalTorque: 270, stage1HP: 230, stage1Torque: 340, fuel: "Gasolina" },
          { name: "128ti 2.0T 265hp", year: "2020+", originalHP: 265, originalTorque: 400, stage1HP: 310, stage1Torque: 460, fuel: "Gasolina" },
          { name: "M135i 2.0T 306hp", year: "2019+", originalHP: 306, originalTorque: 450, stage1HP: 370, stage1Torque: 520, fuel: "Gasolina" },
          { name: "M140i 3.0T 340hp", year: "2016-2019", originalHP: 340, originalTorque: 500, stage1HP: 400, stage1Torque: 580, fuel: "Gasolina" },
          { name: "116d 1.5d 116hp", year: "2015-2019", originalHP: 116, originalTorque: 270, stage1HP: 150, stage1Torque: 330, fuel: "Diésel" },
          { name: "118d 2.0d 150hp", year: "2015-2019", originalHP: 150, originalTorque: 320, stage1HP: 190, stage1Torque: 400, fuel: "Diésel" },
          { name: "120d 2.0d 190hp", year: "2015-2019", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
      {
        name: "Serie 2 (F22/F44/G42)",
        engines: [
          { name: "220i 2.0T 184hp", year: "2014+", originalHP: 184, originalTorque: 270, stage1HP: 230, stage1Torque: 340, fuel: "Gasolina" },
          { name: "230i 2.0T 252hp", year: "2016+", originalHP: 252, originalTorque: 350, stage1HP: 300, stage1Torque: 420, fuel: "Gasolina" },
          { name: "M235i 3.0T 326hp", year: "2014-2016", originalHP: 326, originalTorque: 450, stage1HP: 400, stage1Torque: 540, fuel: "Gasolina" },
          { name: "M240i 3.0T 374hp", year: "2021+", originalHP: 374, originalTorque: 500, stage1HP: 440, stage1Torque: 580, fuel: "Gasolina" },
          { name: "220d 2.0d 190hp", year: "2014+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
      {
        name: "Serie 3 (F30/G20)",
        engines: [
          { name: "318i 156hp", year: "2019+", originalHP: 156, originalTorque: 250, stage1HP: 200, stage1Torque: 320, fuel: "Gasolina" },
          { name: "320i 2.0T 184hp", year: "2015-2023", originalHP: 184, originalTorque: 270, stage1HP: 230, stage1Torque: 340, fuel: "Gasolina" },
          { name: "330i 2.0T 258hp", year: "2018+", originalHP: 258, originalTorque: 400, stage1HP: 287, stage1Torque: 450, fuel: "Gasolina" },
          { name: "340i 3.0T 326hp", year: "2015-2018", originalHP: 326, originalTorque: 450, stage1HP: 400, stage1Torque: 540, fuel: "Gasolina" },
          { name: "M340i 3.0T 374hp", year: "2019+", originalHP: 374, originalTorque: 500, stage1HP: 440, stage1Torque: 580, fuel: "Gasolina" },
          { name: "316d 122hp", year: "2019+", originalHP: 122, originalTorque: 280, stage1HP: 155, stage1Torque: 340, fuel: "Diésel" },
          { name: "318d 2.0d 150hp", year: "2015-2023", originalHP: 150, originalTorque: 320, stage1HP: 190, stage1Torque: 400, fuel: "Diésel" },
          { name: "320d 2.0d 190hp", year: "2015-2023", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 470, fuel: "Diésel" },
          { name: "330d 3.0d 265hp", year: "2019+", originalHP: 265, originalTorque: 580, stage1HP: 320, stage1Torque: 660, fuel: "Diésel" },
          { name: "330d 3.0d 286hp", year: "2019+", originalHP: 286, originalTorque: 650, stage1HP: 340, stage1Torque: 720, fuel: "Diésel" },
          { name: "M340d 3.0d 340hp", year: "2020+", originalHP: 340, originalTorque: 700, stage1HP: 390, stage1Torque: 780, fuel: "Diésel" },
        ],
      },
      {
        name: "Serie 4 (F32/G22)",
        engines: [
          { name: "420i 2.0T 184hp", year: "2014+", originalHP: 184, originalTorque: 270, stage1HP: 230, stage1Torque: 340, fuel: "Gasolina" },
          { name: "430i 2.0T 258hp", year: "2017+", originalHP: 258, originalTorque: 400, stage1HP: 310, stage1Torque: 460, fuel: "Gasolina" },
          { name: "440i 3.0T 326hp", year: "2016-2020", originalHP: 326, originalTorque: 450, stage1HP: 400, stage1Torque: 540, fuel: "Gasolina" },
          { name: "M440i 3.0T 374hp", year: "2020+", originalHP: 374, originalTorque: 500, stage1HP: 440, stage1Torque: 580, fuel: "Gasolina" },
          { name: "420d 2.0d 190hp", year: "2014+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 470, fuel: "Diésel" },
          { name: "430d 3.0d 286hp", year: "2020+", originalHP: 286, originalTorque: 650, stage1HP: 340, stage1Torque: 720, fuel: "Diésel" },
        ],
      },
      {
        name: "Serie 5 (F10/G30)",
        engines: [
          { name: "520i 2.0T 184hp", year: "2017+", originalHP: 184, originalTorque: 290, stage1HP: 230, stage1Torque: 350, fuel: "Gasolina" },
          { name: "530i 2.0T 252hp", year: "2017+", originalHP: 252, originalTorque: 350, stage1HP: 300, stage1Torque: 420, fuel: "Gasolina" },
          { name: "540i 3.0T 340hp", year: "2017+", originalHP: 340, originalTorque: 450, stage1HP: 410, stage1Torque: 540, fuel: "Gasolina" },
          { name: "M550i 4.4T 530hp", year: "2017+", originalHP: 530, originalTorque: 750, stage1HP: 620, stage1Torque: 860, fuel: "Gasolina" },
          { name: "520d 2.0d 190hp", year: "2017+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 470, fuel: "Diésel" },
          { name: "530d 3.0d 286hp", year: "2017+", originalHP: 286, originalTorque: 650, stage1HP: 340, stage1Torque: 720, fuel: "Diésel" },
          { name: "540d 3.0d 320hp", year: "2017+", originalHP: 320, originalTorque: 680, stage1HP: 370, stage1Torque: 760, fuel: "Diésel" },
        ],
      },
      {
        name: "M2 / M3 / M4",
        engines: [
          { name: "M2 3.0T 370hp (F87)", year: "2016-2018", originalHP: 370, originalTorque: 465, stage1HP: 430, stage1Torque: 540, fuel: "Gasolina" },
          { name: "M2 Competition 410hp", year: "2018-2020", originalHP: 410, originalTorque: 550, stage1HP: 480, stage1Torque: 640, fuel: "Gasolina" },
          { name: "M2 3.0T 460hp (G87)", year: "2022+", originalHP: 460, originalTorque: 550, stage1HP: 530, stage1Torque: 630, fuel: "Gasolina" },
          { name: "M3 3.0T 480hp (G80)", year: "2021+", originalHP: 480, originalTorque: 550, stage1HP: 560, stage1Torque: 650, fuel: "Gasolina" },
          { name: "M3 Competition 510hp", year: "2021+", originalHP: 510, originalTorque: 650, stage1HP: 590, stage1Torque: 730, fuel: "Gasolina" },
          { name: "M4 3.0T 480hp (G82)", year: "2021+", originalHP: 480, originalTorque: 550, stage1HP: 560, stage1Torque: 650, fuel: "Gasolina" },
          { name: "M4 Competition 510hp", year: "2021+", originalHP: 510, originalTorque: 650, stage1HP: 590, stage1Torque: 730, fuel: "Gasolina" },
        ],
      },
      {
        name: "M5 / M8",
        engines: [
          { name: "M5 4.4T 600hp (F90)", year: "2018+", originalHP: 600, originalTorque: 750, stage1HP: 700, stage1Torque: 870, fuel: "Gasolina" },
          { name: "M5 Competition 625hp", year: "2018+", originalHP: 625, originalTorque: 750, stage1HP: 720, stage1Torque: 870, fuel: "Gasolina" },
          { name: "M8 4.4T 600hp", year: "2019+", originalHP: 600, originalTorque: 750, stage1HP: 700, stage1Torque: 870, fuel: "Gasolina" },
          { name: "M8 Competition 625hp", year: "2019+", originalHP: 625, originalTorque: 750, stage1HP: 720, stage1Torque: 880, fuel: "Gasolina" },
        ],
      },
      {
        name: "X3 / X4",
        engines: [
          { name: "X3 20i 2.0T 184hp", year: "2017+", originalHP: 184, originalTorque: 290, stage1HP: 230, stage1Torque: 350, fuel: "Gasolina" },
          { name: "X3 30i 2.0T 252hp", year: "2017+", originalHP: 252, originalTorque: 350, stage1HP: 300, stage1Torque: 420, fuel: "Gasolina" },
          { name: "X3 M40i 3.0T 360hp", year: "2018+", originalHP: 360, originalTorque: 500, stage1HP: 430, stage1Torque: 580, fuel: "Gasolina" },
          { name: "X3 M 510hp", year: "2019+", originalHP: 510, originalTorque: 600, stage1HP: 580, stage1Torque: 700, fuel: "Gasolina" },
          { name: "X3 20d 2.0d 190hp", year: "2017+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 470, fuel: "Diésel" },
          { name: "X3 30d 3.0d 286hp", year: "2017+", originalHP: 286, originalTorque: 650, stage1HP: 340, stage1Torque: 720, fuel: "Diésel" },
        ],
      },
      {
        name: "X5 / X6 / X7",
        engines: [
          { name: "X5 40i 3.0T 340hp", year: "2018+", originalHP: 340, originalTorque: 450, stage1HP: 410, stage1Torque: 540, fuel: "Gasolina" },
          { name: "X5 M50i 4.4T 530hp", year: "2019+", originalHP: 530, originalTorque: 750, stage1HP: 620, stage1Torque: 860, fuel: "Gasolina" },
          { name: "X5 M 600hp", year: "2020+", originalHP: 600, originalTorque: 750, stage1HP: 700, stage1Torque: 870, fuel: "Gasolina" },
          { name: "X5 30d 3.0d 286hp", year: "2018+", originalHP: 286, originalTorque: 650, stage1HP: 340, stage1Torque: 720, fuel: "Diésel" },
          { name: "X5 40d 3.0d 340hp", year: "2018+", originalHP: 340, originalTorque: 700, stage1HP: 390, stage1Torque: 780, fuel: "Diésel" },
          { name: "X6 M50d 400hp", year: "2014-2019", originalHP: 400, originalTorque: 760, stage1HP: 450, stage1Torque: 850, fuel: "Diésel" },
        ],
      },
      {
        name: "Z4 (G29)",
        engines: [
          { name: "20i 2.0T 197hp", year: "2019+", originalHP: 197, originalTorque: 320, stage1HP: 245, stage1Torque: 390, fuel: "Gasolina" },
          { name: "30i 2.0T 258hp", year: "2019+", originalHP: 258, originalTorque: 400, stage1HP: 310, stage1Torque: 460, fuel: "Gasolina" },
          { name: "M40i 3.0T 340hp", year: "2019+", originalHP: 340, originalTorque: 500, stage1HP: 410, stage1Torque: 580, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── MERCEDES-BENZ ──────────────────────────────────────
  {
    name: "Mercedes-Benz",
    models: [
      {
        name: "Clase A (W177)",
        engines: [
          { name: "A180 1.3T 136hp", year: "2018+", originalHP: 136, originalTorque: 200, stage1HP: 170, stage1Torque: 260, fuel: "Gasolina" },
          { name: "A200 1.3T 163hp", year: "2018+", originalHP: 163, originalTorque: 250, stage1HP: 195, stage1Torque: 300, fuel: "Gasolina" },
          { name: "A250 2.0T 224hp", year: "2018+", originalHP: 224, originalTorque: 350, stage1HP: 280, stage1Torque: 420, fuel: "Gasolina" },
          { name: "A35 AMG 2.0T 306hp", year: "2018+", originalHP: 306, originalTorque: 400, stage1HP: 370, stage1Torque: 480, fuel: "Gasolina" },
          { name: "A45 S AMG 2.0T 421hp", year: "2019+", originalHP: 421, originalTorque: 500, stage1HP: 480, stage1Torque: 560, fuel: "Gasolina" },
          { name: "A180d 1.5d 116hp", year: "2018+", originalHP: 116, originalTorque: 260, stage1HP: 145, stage1Torque: 320, fuel: "Diésel" },
          { name: "A200d 2.0d 150hp", year: "2018+", originalHP: 150, originalTorque: 320, stage1HP: 190, stage1Torque: 400, fuel: "Diésel" },
          { name: "A220d 2.0d 190hp", year: "2018+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
      {
        name: "Clase C (W205/W206)",
        engines: [
          { name: "C180 1.5T 156hp", year: "2018+", originalHP: 156, originalTorque: 250, stage1HP: 195, stage1Torque: 310, fuel: "Gasolina" },
          { name: "C200 1.5T 184hp", year: "2018+", originalHP: 184, originalTorque: 280, stage1HP: 225, stage1Torque: 340, fuel: "Gasolina" },
          { name: "C300 2.0T 258hp", year: "2018+", originalHP: 258, originalTorque: 370, stage1HP: 310, stage1Torque: 440, fuel: "Gasolina" },
          { name: "C43 AMG 3.0T V6 390hp", year: "2018-2021", originalHP: 390, originalTorque: 520, stage1HP: 450, stage1Torque: 600, fuel: "Gasolina" },
          { name: "C63 AMG 4.0T V8 476hp", year: "2015-2021", originalHP: 476, originalTorque: 650, stage1HP: 560, stage1Torque: 750, fuel: "Gasolina" },
          { name: "C63 S AMG 4.0T V8 510hp", year: "2015-2021", originalHP: 510, originalTorque: 700, stage1HP: 600, stage1Torque: 800, fuel: "Gasolina" },
          { name: "C200d 1.6d 160hp", year: "2018+", originalHP: 160, originalTorque: 360, stage1HP: 195, stage1Torque: 420, fuel: "Diésel" },
          { name: "C220d 2.0d 194hp", year: "2018+", originalHP: 194, originalTorque: 400, stage1HP: 235, stage1Torque: 470, fuel: "Diésel" },
          { name: "C300d 2.0d 245hp", year: "2018+", originalHP: 245, originalTorque: 500, stage1HP: 290, stage1Torque: 570, fuel: "Diésel" },
        ],
      },
      {
        name: "CLA (C117/C118)",
        engines: [
          { name: "CLA200 1.3T 163hp", year: "2019+", originalHP: 163, originalTorque: 250, stage1HP: 195, stage1Torque: 300, fuel: "Gasolina" },
          { name: "CLA250 2.0T 224hp", year: "2019+", originalHP: 224, originalTorque: 350, stage1HP: 280, stage1Torque: 420, fuel: "Gasolina" },
          { name: "CLA35 AMG 2.0T 306hp", year: "2019+", originalHP: 306, originalTorque: 400, stage1HP: 370, stage1Torque: 480, fuel: "Gasolina" },
          { name: "CLA45 S AMG 2.0T 421hp", year: "2019+", originalHP: 421, originalTorque: 500, stage1HP: 480, stage1Torque: 560, fuel: "Gasolina" },
          { name: "CLA200d 2.0d 150hp", year: "2019+", originalHP: 150, originalTorque: 320, stage1HP: 190, stage1Torque: 400, fuel: "Diésel" },
          { name: "CLA220d 2.0d 190hp", year: "2019+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
      {
        name: "Clase E (W213)",
        engines: [
          { name: "E200 2.0T 197hp", year: "2016+", originalHP: 197, originalTorque: 320, stage1HP: 245, stage1Torque: 390, fuel: "Gasolina" },
          { name: "E300 2.0T 258hp", year: "2016+", originalHP: 258, originalTorque: 370, stage1HP: 310, stage1Torque: 440, fuel: "Gasolina" },
          { name: "E43 AMG 3.0T 401hp", year: "2016-2020", originalHP: 401, originalTorque: 520, stage1HP: 470, stage1Torque: 600, fuel: "Gasolina" },
          { name: "E53 AMG 3.0T 435hp", year: "2018+", originalHP: 435, originalTorque: 520, stage1HP: 500, stage1Torque: 600, fuel: "Gasolina" },
          { name: "E63 S AMG 4.0T V8 612hp", year: "2017+", originalHP: 612, originalTorque: 850, stage1HP: 700, stage1Torque: 950, fuel: "Gasolina" },
          { name: "E220d 2.0d 194hp", year: "2016+", originalHP: 194, originalTorque: 400, stage1HP: 240, stage1Torque: 480, fuel: "Diésel" },
          { name: "E300d 2.0d 245hp", year: "2018+", originalHP: 245, originalTorque: 500, stage1HP: 290, stage1Torque: 570, fuel: "Diésel" },
          { name: "E400d 3.0d 340hp", year: "2018+", originalHP: 340, originalTorque: 700, stage1HP: 390, stage1Torque: 780, fuel: "Diésel" },
        ],
      },
      {
        name: "GLA / GLB",
        engines: [
          { name: "GLA200 1.3T 163hp", year: "2020+", originalHP: 163, originalTorque: 250, stage1HP: 195, stage1Torque: 300, fuel: "Gasolina" },
          { name: "GLA250 2.0T 224hp", year: "2020+", originalHP: 224, originalTorque: 350, stage1HP: 280, stage1Torque: 420, fuel: "Gasolina" },
          { name: "GLA35 AMG 306hp", year: "2020+", originalHP: 306, originalTorque: 400, stage1HP: 370, stage1Torque: 480, fuel: "Gasolina" },
          { name: "GLA45 S AMG 421hp", year: "2020+", originalHP: 421, originalTorque: 500, stage1HP: 480, stage1Torque: 560, fuel: "Gasolina" },
          { name: "GLA200d 2.0d 150hp", year: "2020+", originalHP: 150, originalTorque: 320, stage1HP: 190, stage1Torque: 400, fuel: "Diésel" },
        ],
      },
      {
        name: "GLC / GLE / GLS",
        engines: [
          { name: "GLC300 2.0T 258hp", year: "2019+", originalHP: 258, originalTorque: 370, stage1HP: 310, stage1Torque: 440, fuel: "Gasolina" },
          { name: "GLC43 AMG 3.0T 390hp", year: "2016-2022", originalHP: 390, originalTorque: 520, stage1HP: 450, stage1Torque: 600, fuel: "Gasolina" },
          { name: "GLC63 AMG 4.0T 476hp", year: "2017-2022", originalHP: 476, originalTorque: 650, stage1HP: 560, stage1Torque: 750, fuel: "Gasolina" },
          { name: "GLE400d 3.0d 330hp", year: "2019+", originalHP: 330, originalTorque: 700, stage1HP: 380, stage1Torque: 780, fuel: "Diésel" },
          { name: "GLE53 AMG 3.0T 435hp", year: "2019+", originalHP: 435, originalTorque: 520, stage1HP: 500, stage1Torque: 600, fuel: "Gasolina" },
          { name: "GLE63 S AMG 4.0T 612hp", year: "2019+", originalHP: 612, originalTorque: 850, stage1HP: 700, stage1Torque: 950, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── VOLKSWAGEN ─────────────────────────────────────────
  {
    name: "Volkswagen",
    models: [
      {
        name: "Polo (AW)",
        engines: [
          { name: "1.0 TSI 95hp", year: "2017+", originalHP: 95, originalTorque: 175, stage1HP: 125, stage1Torque: 225, fuel: "Gasolina" },
          { name: "1.0 TSI 115hp", year: "2017+", originalHP: 115, originalTorque: 200, stage1HP: 145, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.5 TSI 150hp", year: "2017+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "GTI 2.0 TSI 200hp", year: "2017+", originalHP: 200, originalTorque: 320, stage1HP: 260, stage1Torque: 400, fuel: "Gasolina" },
          { name: "GTI 2.0 TSI 207hp", year: "2021+", originalHP: 207, originalTorque: 320, stage1HP: 270, stage1Torque: 410, fuel: "Gasolina" },
        ],
      },
      {
        name: "Golf MK7 / MK7.5",
        engines: [
          { name: "1.0 TSI 110hp", year: "2017-2020", originalHP: 110, originalTorque: 200, stage1HP: 140, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.4 TSI 125hp", year: "2013-2020", originalHP: 125, originalTorque: 200, stage1HP: 155, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.5 TSI 130hp", year: "2017-2020", originalHP: 130, originalTorque: 200, stage1HP: 160, stage1Torque: 260, fuel: "Gasolina" },
          { name: "1.5 TSI 150hp", year: "2017-2020", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "GTI 2.0 TSI 230hp", year: "2013-2020", originalHP: 230, originalTorque: 350, stage1HP: 290, stage1Torque: 420, fuel: "Gasolina" },
          { name: "GTI Performance 245hp", year: "2017-2020", originalHP: 245, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },
          { name: "GTI TCR 290hp", year: "2019-2020", originalHP: 290, originalTorque: 380, stage1HP: 350, stage1Torque: 450, fuel: "Gasolina" },
          { name: "R 2.0 TSI 300hp", year: "2014-2020", originalHP: 300, originalTorque: 380, stage1HP: 370, stage1Torque: 460, fuel: "Gasolina" },
          { name: "R 2.0 TSI 310hp", year: "2017-2020", originalHP: 310, originalTorque: 400, stage1HP: 380, stage1Torque: 480, fuel: "Gasolina" },
          { name: "1.6 TDI 115hp", year: "2013-2020", originalHP: 115, originalTorque: 250, stage1HP: 145, stage1Torque: 310, fuel: "Diésel" },
          { name: "2.0 TDI 150hp", year: "2013-2020", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 184hp", year: "2013-2020", originalHP: 184, originalTorque: 380, stage1HP: 225, stage1Torque: 450, fuel: "Diésel" },
        ],
      },
      {
        name: "Golf MK8",
        engines: [
          { name: "1.0 TSI 110hp", year: "2020+", originalHP: 110, originalTorque: 200, stage1HP: 140, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.5 TSI 130hp", year: "2020+", originalHP: 130, originalTorque: 200, stage1HP: 160, stage1Torque: 260, fuel: "Gasolina" },
          { name: "1.5 TSI 150hp", year: "2020+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "GTI 2.0 TSI 245hp", year: "2020+", originalHP: 245, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },
          { name: "GTI Clubsport 300hp", year: "2020+", originalHP: 300, originalTorque: 400, stage1HP: 365, stage1Torque: 470, fuel: "Gasolina" },
          { name: "R 2.0 TSI 320hp", year: "2020+", originalHP: 320, originalTorque: 420, stage1HP: 390, stage1Torque: 490, fuel: "Gasolina" },
          { name: "2.0 TDI 115hp", year: "2020+", originalHP: 115, originalTorque: 300, stage1HP: 150, stage1Torque: 370, fuel: "Diésel" },
          { name: "2.0 TDI 150hp", year: "2020+", originalHP: 150, originalTorque: 360, stage1HP: 190, stage1Torque: 430, fuel: "Diésel" },
          { name: "2.0 TDI 200hp", year: "2020+", originalHP: 200, originalTorque: 400, stage1HP: 240, stage1Torque: 470, fuel: "Diésel" },
        ],
      },
      {
        name: "T-Roc",
        engines: [
          { name: "1.0 TSI 115hp", year: "2017+", originalHP: 115, originalTorque: 200, stage1HP: 145, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.5 TSI 150hp", year: "2017+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI 190hp", year: "2017+", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "R 2.0 TSI 300hp", year: "2019+", originalHP: 300, originalTorque: 400, stage1HP: 370, stage1Torque: 470, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2017+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 190hp", year: "2017+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
      {
        name: "Tiguan",
        engines: [
          { name: "1.4 TSI 150hp", year: "2016+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "1.5 TSI 150hp", year: "2020+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI 190hp", year: "2016+", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "2.0 TSI 230hp", year: "2016+", originalHP: 230, originalTorque: 350, stage1HP: 290, stage1Torque: 420, fuel: "Gasolina" },
          { name: "R 2.0 TSI 320hp", year: "2020+", originalHP: 320, originalTorque: 420, stage1HP: 390, stage1Torque: 490, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2016+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 190hp", year: "2016+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
          { name: "2.0 TDI 240hp", year: "2016+", originalHP: 240, originalTorque: 500, stage1HP: 280, stage1Torque: 570, fuel: "Diésel" },
        ],
      },
      {
        name: "Passat (B8)",
        engines: [
          { name: "1.4 TSI 150hp", year: "2015+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI 190hp", year: "2015+", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "2.0 TSI 272hp", year: "2015+", originalHP: 272, originalTorque: 350, stage1HP: 330, stage1Torque: 430, fuel: "Gasolina" },
          { name: "1.6 TDI 120hp", year: "2015+", originalHP: 120, originalTorque: 250, stage1HP: 155, stage1Torque: 320, fuel: "Diésel" },
          { name: "2.0 TDI 150hp", year: "2015+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 190hp", year: "2015+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
          { name: "2.0 TDI 240hp", year: "2015+", originalHP: 240, originalTorque: 500, stage1HP: 280, stage1Torque: 570, fuel: "Diésel" },
        ],
      },
      {
        name: "Arteon",
        engines: [
          { name: "1.5 TSI 150hp", year: "2017+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI 190hp", year: "2017+", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "2.0 TSI 272hp", year: "2017+", originalHP: 272, originalTorque: 350, stage1HP: 330, stage1Torque: 430, fuel: "Gasolina" },
          { name: "R 2.0 TSI 320hp", year: "2020+", originalHP: 320, originalTorque: 420, stage1HP: 390, stage1Torque: 490, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2017+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 200hp", year: "2017+", originalHP: 200, originalTorque: 400, stage1HP: 240, stage1Torque: 470, fuel: "Diésel" },
        ],
      },
      {
        name: "Touareg (CR)",
        engines: [
          { name: "3.0 TSI 340hp", year: "2018+", originalHP: 340, originalTorque: 450, stage1HP: 400, stage1Torque: 530, fuel: "Gasolina" },
          { name: "3.0 TDI 231hp", year: "2018+", originalHP: 231, originalTorque: 500, stage1HP: 280, stage1Torque: 580, fuel: "Diésel" },
          { name: "3.0 TDI 286hp", year: "2018+", originalHP: 286, originalTorque: 600, stage1HP: 340, stage1Torque: 680, fuel: "Diésel" },
          { name: "4.0 TDI V8 421hp", year: "2018+", originalHP: 421, originalTorque: 900, stage1HP: 480, stage1Torque: 990, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── CUPRA ──────────────────────────────────────────────
  {
    name: "Cupra",
    models: [
      {
        name: "León",
        engines: [
          { name: "1.5 TSI 150hp", year: "2020+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI 245hp", year: "2020+", originalHP: 245, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },
          { name: "VZ 2.0 TSI 300hp", year: "2020+", originalHP: 300, originalTorque: 400, stage1HP: 365, stage1Torque: 470, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2020+", originalHP: 150, originalTorque: 360, stage1HP: 190, stage1Torque: 430, fuel: "Diésel" },
        ],
      },
      {
        name: "Formentor",
        engines: [
          { name: "1.5 TSI 150hp", year: "2020+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI 190hp", year: "2020+", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "2.0 TSI 245hp", year: "2020+", originalHP: 245, originalTorque: 370, stage1HP: 305, stage1Torque: 440, fuel: "Gasolina" },
          { name: "VZ 2.0 TSI 310hp", year: "2020+", originalHP: 310, originalTorque: 400, stage1HP: 380, stage1Torque: 480, fuel: "Gasolina" },
          { name: "VZ5 2.5 TFSI 390hp", year: "2021+", originalHP: 390, originalTorque: 480, stage1HP: 450, stage1Torque: 560, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2020+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
        ],
      },
      {
        name: "Ateca",
        engines: [
          { name: "1.5 TSI 150hp", year: "2020+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI 300hp", year: "2020+", originalHP: 300, originalTorque: 400, stage1HP: 365, stage1Torque: 470, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2020+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 190hp", year: "2020+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
      {
        name: "Born",
        engines: [
          { name: "1.5 TSI 150hp", year: "2022+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── SEAT ───────────────────────────────────────────────
  {
    name: "SEAT",
    models: [
      {
        name: "León (MK3)",
        engines: [
          { name: "1.0 TSI 115hp", year: "2017-2020", originalHP: 115, originalTorque: 200, stage1HP: 145, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.4 TSI 150hp", year: "2013-2020", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "1.5 TSI 150hp", year: "2017-2020", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "FR 2.0 TSI 190hp", year: "2013-2020", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "Cupra 2.0 TSI 290hp", year: "2014-2020", originalHP: 290, originalTorque: 380, stage1HP: 360, stage1Torque: 460, fuel: "Gasolina" },
          { name: "1.6 TDI 115hp", year: "2013-2020", originalHP: 115, originalTorque: 250, stage1HP: 145, stage1Torque: 310, fuel: "Diésel" },
          { name: "2.0 TDI 150hp", year: "2013-2020", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 184hp", year: "2013-2020", originalHP: 184, originalTorque: 380, stage1HP: 225, stage1Torque: 450, fuel: "Diésel" },
        ],
      },
      {
        name: "Ibiza (6F)",
        engines: [
          { name: "1.0 TSI 95hp", year: "2017+", originalHP: 95, originalTorque: 175, stage1HP: 125, stage1Torque: 225, fuel: "Gasolina" },
          { name: "1.0 TSI 115hp", year: "2017+", originalHP: 115, originalTorque: 200, stage1HP: 145, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.5 TSI 150hp", year: "2018+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
        ],
      },
      {
        name: "Ateca",
        engines: [
          { name: "1.0 TSI 115hp", year: "2016+", originalHP: 115, originalTorque: 200, stage1HP: 145, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.5 TSI 150hp", year: "2016+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI 190hp", year: "2016+", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2016+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 190hp", year: "2016+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── FORD ───────────────────────────────────────────────
  {
    name: "Ford",
    models: [
      {
        name: "Fiesta (MK8)",
        engines: [
          { name: "1.0 EcoBoost 100hp", year: "2017+", originalHP: 100, originalTorque: 170, stage1HP: 135, stage1Torque: 220, fuel: "Gasolina" },
          { name: "1.0 EcoBoost 125hp", year: "2017+", originalHP: 125, originalTorque: 170, stage1HP: 155, stage1Torque: 225, fuel: "Gasolina" },
          { name: "1.0 EcoBoost 155hp", year: "2017+", originalHP: 155, originalTorque: 240, stage1HP: 190, stage1Torque: 290, fuel: "Gasolina" },
          { name: "ST 1.5 EcoBoost 200hp", year: "2018+", originalHP: 200, originalTorque: 290, stage1HP: 240, stage1Torque: 350, fuel: "Gasolina" },
          { name: "1.5 TDCi 85hp", year: "2017+", originalHP: 85, originalTorque: 215, stage1HP: 115, stage1Torque: 270, fuel: "Diésel" },
        ],
      },
      {
        name: "Focus (MK3/MK4)",
        engines: [
          { name: "1.0 EcoBoost 100hp", year: "2014+", originalHP: 100, originalTorque: 170, stage1HP: 135, stage1Torque: 220, fuel: "Gasolina" },
          { name: "1.0 EcoBoost 125hp", year: "2014+", originalHP: 125, originalTorque: 170, stage1HP: 155, stage1Torque: 220, fuel: "Gasolina" },
          { name: "1.0 EcoBoost 155hp", year: "2018+", originalHP: 155, originalTorque: 240, stage1HP: 190, stage1Torque: 290, fuel: "Gasolina" },
          { name: "1.5 EcoBoost 150hp", year: "2014+", originalHP: 150, originalTorque: 240, stage1HP: 190, stage1Torque: 300, fuel: "Gasolina" },
          { name: "1.5 EcoBoost 182hp", year: "2018+", originalHP: 182, originalTorque: 240, stage1HP: 220, stage1Torque: 310, fuel: "Gasolina" },
          { name: "ST 2.3 EcoBoost 280hp", year: "2019+", originalHP: 280, originalTorque: 420, stage1HP: 330, stage1Torque: 490, fuel: "Gasolina" },
          { name: "RS 2.3 EcoBoost 350hp", year: "2016-2018", originalHP: 350, originalTorque: 440, stage1HP: 400, stage1Torque: 510, fuel: "Gasolina" },
          { name: "1.5 TDCi 120hp", year: "2014+", originalHP: 120, originalTorque: 270, stage1HP: 150, stage1Torque: 330, fuel: "Diésel" },
          { name: "2.0 TDCi 150hp", year: "2014+", originalHP: 150, originalTorque: 370, stage1HP: 190, stage1Torque: 430, fuel: "Diésel" },
        ],
      },
      {
        name: "Puma",
        engines: [
          { name: "1.0 EcoBoost 125hp", year: "2019+", originalHP: 125, originalTorque: 170, stage1HP: 155, stage1Torque: 225, fuel: "Gasolina" },
          { name: "1.0 EcoBoost 155hp", year: "2019+", originalHP: 155, originalTorque: 240, stage1HP: 190, stage1Torque: 290, fuel: "Gasolina" },
          { name: "ST 1.5 EcoBoost 200hp", year: "2020+", originalHP: 200, originalTorque: 320, stage1HP: 240, stage1Torque: 380, fuel: "Gasolina" },
        ],
      },
      {
        name: "Mustang",
        engines: [
          { name: "2.3 EcoBoost 317hp", year: "2015+", originalHP: 317, originalTorque: 432, stage1HP: 370, stage1Torque: 500, fuel: "Gasolina" },
          { name: "5.0 V8 GT 450hp", year: "2018+", originalHP: 450, originalTorque: 529, stage1HP: 480, stage1Torque: 560, fuel: "Gasolina" },
          { name: "5.0 V8 Mach 1 460hp", year: "2021+", originalHP: 460, originalTorque: 529, stage1HP: 490, stage1Torque: 565, fuel: "Gasolina" },
        ],
      },
      {
        name: "Kuga",
        engines: [
          { name: "1.5 EcoBoost 150hp", year: "2020+", originalHP: 150, originalTorque: 240, stage1HP: 190, stage1Torque: 300, fuel: "Gasolina" },
          { name: "2.5 PHEV 225hp", year: "2020+", originalHP: 225, originalTorque: 200, stage1HP: 255, stage1Torque: 240, fuel: "Gasolina" },
          { name: "1.5 EcoBlue 120hp", year: "2020+", originalHP: 120, originalTorque: 300, stage1HP: 155, stage1Torque: 360, fuel: "Diésel" },
          { name: "2.0 EcoBlue 150hp", year: "2020+", originalHP: 150, originalTorque: 370, stage1HP: 190, stage1Torque: 430, fuel: "Diésel" },
          { name: "2.0 EcoBlue 190hp", year: "2020+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── RENAULT ────────────────────────────────────────────
  {
    name: "Renault",
    models: [
      {
        name: "Clio (V)",
        engines: [
          { name: "1.0 TCe 100hp", year: "2019+", originalHP: 100, originalTorque: 160, stage1HP: 125, stage1Torque: 210, fuel: "Gasolina" },
          { name: "1.3 TCe 130hp", year: "2019+", originalHP: 130, originalTorque: 240, stage1HP: 160, stage1Torque: 290, fuel: "Gasolina" },
          { name: "1.5 dCi 85hp", year: "2019+", originalHP: 85, originalTorque: 220, stage1HP: 115, stage1Torque: 280, fuel: "Diésel" },
          { name: "1.5 dCi 115hp", year: "2019+", originalHP: 115, originalTorque: 260, stage1HP: 145, stage1Torque: 320, fuel: "Diésel" },
        ],
      },
      {
        name: "Mégane (IV)",
        engines: [
          { name: "1.3 TCe 140hp", year: "2018+", originalHP: 140, originalTorque: 240, stage1HP: 170, stage1Torque: 300, fuel: "Gasolina" },
          { name: "1.3 TCe 160hp", year: "2018+", originalHP: 160, originalTorque: 270, stage1HP: 195, stage1Torque: 320, fuel: "Gasolina" },
          { name: "RS 1.8T 280hp", year: "2018+", originalHP: 280, originalTorque: 390, stage1HP: 320, stage1Torque: 450, fuel: "Gasolina" },
          { name: "RS Trophy 1.8T 300hp", year: "2018+", originalHP: 300, originalTorque: 420, stage1HP: 340, stage1Torque: 480, fuel: "Gasolina" },
          { name: "1.5 dCi 115hp", year: "2016+", originalHP: 115, originalTorque: 260, stage1HP: 145, stage1Torque: 320, fuel: "Diésel" },
          { name: "1.7 dCi 150hp", year: "2018+", originalHP: 150, originalTorque: 340, stage1HP: 185, stage1Torque: 400, fuel: "Diésel" },
        ],
      },
      {
        name: "Captur",
        engines: [
          { name: "1.0 TCe 100hp", year: "2019+", originalHP: 100, originalTorque: 160, stage1HP: 125, stage1Torque: 210, fuel: "Gasolina" },
          { name: "1.3 TCe 130hp", year: "2019+", originalHP: 130, originalTorque: 240, stage1HP: 160, stage1Torque: 290, fuel: "Gasolina" },
          { name: "1.3 TCe 155hp", year: "2019+", originalHP: 155, originalTorque: 270, stage1HP: 190, stage1Torque: 320, fuel: "Gasolina" },
          { name: "1.5 dCi 95hp", year: "2019+", originalHP: 95, originalTorque: 240, stage1HP: 125, stage1Torque: 300, fuel: "Diésel" },
          { name: "1.5 dCi 115hp", year: "2019+", originalHP: 115, originalTorque: 260, stage1HP: 145, stage1Torque: 320, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── PEUGEOT ────────────────────────────────────────────
  {
    name: "Peugeot",
    models: [
      {
        name: "208",
        engines: [
          { name: "1.2 PureTech 100hp", year: "2019+", originalHP: 100, originalTorque: 205, stage1HP: 130, stage1Torque: 255, fuel: "Gasolina" },
          { name: "1.2 PureTech 130hp", year: "2019+", originalHP: 130, originalTorque: 230, stage1HP: 160, stage1Torque: 280, fuel: "Gasolina" },
          { name: "1.5 BlueHDi 100hp", year: "2019+", originalHP: 100, originalTorque: 250, stage1HP: 130, stage1Torque: 310, fuel: "Diésel" },
        ],
      },
      {
        name: "308 (MK2/MK3)",
        engines: [
          { name: "1.2 PureTech 110hp", year: "2014+", originalHP: 110, originalTorque: 205, stage1HP: 140, stage1Torque: 255, fuel: "Gasolina" },
          { name: "1.2 PureTech 130hp", year: "2014+", originalHP: 130, originalTorque: 230, stage1HP: 160, stage1Torque: 280, fuel: "Gasolina" },
          { name: "1.6 PureTech 225hp", year: "2021+", originalHP: 225, originalTorque: 300, stage1HP: 270, stage1Torque: 360, fuel: "Gasolina" },
          { name: "GTI 1.6T 270hp", year: "2015-2021", originalHP: 270, originalTorque: 330, stage1HP: 310, stage1Torque: 390, fuel: "Gasolina" },
          { name: "1.5 BlueHDi 130hp", year: "2017+", originalHP: 130, originalTorque: 300, stage1HP: 160, stage1Torque: 360, fuel: "Diésel" },
          { name: "2.0 BlueHDi 150hp", year: "2014+", originalHP: 150, originalTorque: 370, stage1HP: 190, stage1Torque: 430, fuel: "Diésel" },
          { name: "2.0 BlueHDi 180hp", year: "2014+", originalHP: 180, originalTorque: 400, stage1HP: 215, stage1Torque: 470, fuel: "Diésel" },
        ],
      },
      {
        name: "3008 / 5008",
        engines: [
          { name: "1.2 PureTech 130hp", year: "2017+", originalHP: 130, originalTorque: 230, stage1HP: 160, stage1Torque: 280, fuel: "Gasolina" },
          { name: "1.6 PureTech 180hp", year: "2017+", originalHP: 180, originalTorque: 250, stage1HP: 215, stage1Torque: 310, fuel: "Gasolina" },
          { name: "1.5 BlueHDi 130hp", year: "2017+", originalHP: 130, originalTorque: 300, stage1HP: 160, stage1Torque: 360, fuel: "Diésel" },
          { name: "2.0 BlueHDi 150hp", year: "2017+", originalHP: 150, originalTorque: 370, stage1HP: 190, stage1Torque: 430, fuel: "Diésel" },
          { name: "2.0 BlueHDi 180hp", year: "2017+", originalHP: 180, originalTorque: 400, stage1HP: 215, stage1Torque: 470, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── CITROËN ────────────────────────────────────────────
  {
    name: "Citroën",
    models: [
      {
        name: "C3",
        engines: [
          { name: "1.2 PureTech 83hp", year: "2020+", originalHP: 83, originalTorque: 118, stage1HP: 105, stage1Torque: 155, fuel: "Gasolina" },
          { name: "1.2 PureTech 110hp", year: "2016+", originalHP: 110, originalTorque: 205, stage1HP: 140, stage1Torque: 255, fuel: "Gasolina" },
          { name: "1.5 BlueHDi 100hp", year: "2018+", originalHP: 100, originalTorque: 250, stage1HP: 130, stage1Torque: 310, fuel: "Diésel" },
        ],
      },
      {
        name: "C4 / C4 X",
        engines: [
          { name: "1.2 PureTech 100hp", year: "2020+", originalHP: 100, originalTorque: 205, stage1HP: 130, stage1Torque: 255, fuel: "Gasolina" },
          { name: "1.2 PureTech 130hp", year: "2020+", originalHP: 130, originalTorque: 230, stage1HP: 160, stage1Torque: 280, fuel: "Gasolina" },
          { name: "1.5 BlueHDi 130hp", year: "2020+", originalHP: 130, originalTorque: 300, stage1HP: 160, stage1Torque: 360, fuel: "Diésel" },
        ],
      },
      {
        name: "C5 Aircross",
        engines: [
          { name: "1.2 PureTech 130hp", year: "2018+", originalHP: 130, originalTorque: 230, stage1HP: 160, stage1Torque: 280, fuel: "Gasolina" },
          { name: "1.6 PureTech 180hp", year: "2018+", originalHP: 180, originalTorque: 250, stage1HP: 215, stage1Torque: 310, fuel: "Gasolina" },
          { name: "1.5 BlueHDi 130hp", year: "2018+", originalHP: 130, originalTorque: 300, stage1HP: 160, stage1Torque: 360, fuel: "Diésel" },
          { name: "2.0 BlueHDi 180hp", year: "2018+", originalHP: 180, originalTorque: 400, stage1HP: 215, stage1Torque: 470, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── OPEL ───────────────────────────────────────────────
  {
    name: "Opel",
    models: [
      {
        name: "Corsa (F)",
        engines: [
          { name: "1.2 Turbo 100hp", year: "2019+", originalHP: 100, originalTorque: 205, stage1HP: 130, stage1Torque: 255, fuel: "Gasolina" },
          { name: "1.2 Turbo 130hp", year: "2019+", originalHP: 130, originalTorque: 230, stage1HP: 160, stage1Torque: 280, fuel: "Gasolina" },
          { name: "1.5 Diesel 100hp", year: "2019+", originalHP: 100, originalTorque: 250, stage1HP: 130, stage1Torque: 310, fuel: "Diésel" },
        ],
      },
      {
        name: "Astra (K/L)",
        engines: [
          { name: "1.2 Turbo 110hp", year: "2019+", originalHP: 110, originalTorque: 205, stage1HP: 140, stage1Torque: 255, fuel: "Gasolina" },
          { name: "1.2 Turbo 130hp", year: "2019+", originalHP: 130, originalTorque: 230, stage1HP: 160, stage1Torque: 280, fuel: "Gasolina" },
          { name: "1.4 Turbo 150hp", year: "2015-2019", originalHP: 150, originalTorque: 245, stage1HP: 185, stage1Torque: 300, fuel: "Gasolina" },
          { name: "1.6 Turbo 200hp", year: "2015-2019", originalHP: 200, originalTorque: 300, stage1HP: 235, stage1Torque: 360, fuel: "Gasolina" },
          { name: "OPC 1.6T 280hp", year: "2013-2019", originalHP: 280, originalTorque: 400, stage1HP: 320, stage1Torque: 450, fuel: "Gasolina" },
          { name: "1.5 Diesel 105hp", year: "2018+", originalHP: 105, originalTorque: 260, stage1HP: 135, stage1Torque: 320, fuel: "Diésel" },
          { name: "1.5 Diesel 122hp", year: "2018+", originalHP: 122, originalTorque: 300, stage1HP: 155, stage1Torque: 360, fuel: "Diésel" },
          { name: "1.6 CDTi 136hp", year: "2015-2019", originalHP: 136, originalTorque: 320, stage1HP: 170, stage1Torque: 380, fuel: "Diésel" },
        ],
      },
      {
        name: "Insignia",
        engines: [
          { name: "1.5 Turbo 165hp", year: "2017+", originalHP: 165, originalTorque: 250, stage1HP: 200, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 Turbo 260hp", year: "2017+", originalHP: 260, originalTorque: 400, stage1HP: 310, stage1Torque: 460, fuel: "Gasolina" },
          { name: "1.6 CDTi 136hp", year: "2017+", originalHP: 136, originalTorque: 320, stage1HP: 170, stage1Torque: 380, fuel: "Diésel" },
          { name: "2.0 CDTi 170hp", year: "2017+", originalHP: 170, originalTorque: 400, stage1HP: 210, stage1Torque: 460, fuel: "Diésel" },
          { name: "2.0 CDTi BiTurbo 210hp", year: "2017+", originalHP: 210, originalTorque: 480, stage1HP: 250, stage1Torque: 540, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── SKODA ──────────────────────────────────────────────
  {
    name: "Škoda",
    models: [
      {
        name: "Octavia (MK3/MK4)",
        engines: [
          { name: "1.0 TSI 115hp", year: "2017+", originalHP: 115, originalTorque: 200, stage1HP: 145, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.5 TSI 150hp", year: "2017+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI 190hp", year: "2017+", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "RS 2.0 TSI 245hp", year: "2020+", originalHP: 245, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },
          { name: "RS 2.0 TSI 245hp (MK3)", year: "2017-2020", originalHP: 245, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },
          { name: "1.6 TDI 115hp", year: "2013+", originalHP: 115, originalTorque: 250, stage1HP: 145, stage1Torque: 310, fuel: "Diésel" },
          { name: "2.0 TDI 150hp", year: "2013+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 200hp", year: "2020+", originalHP: 200, originalTorque: 400, stage1HP: 240, stage1Torque: 470, fuel: "Diésel" },
        ],
      },
      {
        name: "Superb",
        engines: [
          { name: "1.5 TSI 150hp", year: "2019+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI 190hp", year: "2015+", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "2.0 TSI 272hp", year: "2015+", originalHP: 272, originalTorque: 350, stage1HP: 330, stage1Torque: 430, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2015+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 190hp", year: "2015+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
      {
        name: "Kodiaq",
        engines: [
          { name: "1.5 TSI 150hp", year: "2017+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "2.0 TSI 190hp", year: "2017+", originalHP: 190, originalTorque: 320, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "RS 2.0 TSI 245hp", year: "2019+", originalHP: 245, originalTorque: 370, stage1HP: 300, stage1Torque: 440, fuel: "Gasolina" },
          { name: "2.0 TDI 150hp", year: "2017+", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI 190hp", year: "2017+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── PORSCHE ────────────────────────────────────────────
  {
    name: "Porsche",
    models: [
      {
        name: "718 Cayman / Boxster",
        engines: [
          { name: "2.0T 300hp", year: "2016+", originalHP: 300, originalTorque: 380, stage1HP: 350, stage1Torque: 440, fuel: "Gasolina" },
          { name: "GTS 2.5T 365hp", year: "2018+", originalHP: 365, originalTorque: 430, stage1HP: 420, stage1Torque: 500, fuel: "Gasolina" },
          { name: "GTS 4.0 400hp", year: "2020+", originalHP: 400, originalTorque: 420, stage1HP: 420, stage1Torque: 440, fuel: "Gasolina" },
        ],
      },
      {
        name: "911 (991/992)",
        engines: [
          { name: "Carrera 3.0T 385hp", year: "2016+", originalHP: 385, originalTorque: 450, stage1HP: 440, stage1Torque: 520, fuel: "Gasolina" },
          { name: "Carrera S 3.0T 450hp", year: "2016+", originalHP: 450, originalTorque: 530, stage1HP: 510, stage1Torque: 600, fuel: "Gasolina" },
          { name: "GTS 3.0T 480hp (992)", year: "2021+", originalHP: 480, originalTorque: 570, stage1HP: 540, stage1Torque: 640, fuel: "Gasolina" },
          { name: "Turbo 3.7T 580hp (992)", year: "2020+", originalHP: 580, originalTorque: 750, stage1HP: 660, stage1Torque: 850, fuel: "Gasolina" },
          { name: "Turbo S 3.7T 650hp (992)", year: "2020+", originalHP: 650, originalTorque: 800, stage1HP: 720, stage1Torque: 890, fuel: "Gasolina" },
        ],
      },
      {
        name: "Macan",
        engines: [
          { name: "2.0T 265hp", year: "2019+", originalHP: 265, originalTorque: 400, stage1HP: 310, stage1Torque: 460, fuel: "Gasolina" },
          { name: "S 2.9T 380hp", year: "2019+", originalHP: 380, originalTorque: 520, stage1HP: 440, stage1Torque: 600, fuel: "Gasolina" },
          { name: "GTS 2.9T 440hp", year: "2021+", originalHP: 440, originalTorque: 550, stage1HP: 500, stage1Torque: 630, fuel: "Gasolina" },
          { name: "S Diesel 3.0d 258hp", year: "2014-2018", originalHP: 258, originalTorque: 580, stage1HP: 310, stage1Torque: 660, fuel: "Diésel" },
        ],
      },
      {
        name: "Cayenne",
        engines: [
          { name: "3.0T 340hp", year: "2018+", originalHP: 340, originalTorque: 450, stage1HP: 400, stage1Torque: 530, fuel: "Gasolina" },
          { name: "S 2.9T 440hp", year: "2018+", originalHP: 440, originalTorque: 550, stage1HP: 510, stage1Torque: 640, fuel: "Gasolina" },
          { name: "GTS 4.0T 460hp", year: "2020+", originalHP: 460, originalTorque: 620, stage1HP: 530, stage1Torque: 710, fuel: "Gasolina" },
          { name: "Turbo 4.0T 550hp", year: "2018+", originalHP: 550, originalTorque: 770, stage1HP: 640, stage1Torque: 880, fuel: "Gasolina" },
          { name: "Turbo GT 4.0T 640hp", year: "2021+", originalHP: 640, originalTorque: 850, stage1HP: 720, stage1Torque: 950, fuel: "Gasolina" },
        ],
      },
      {
        name: "Panamera",
        engines: [
          { name: "2.9T 330hp", year: "2016+", originalHP: 330, originalTorque: 450, stage1HP: 390, stage1Torque: 530, fuel: "Gasolina" },
          { name: "GTS 4.0T 480hp", year: "2020+", originalHP: 480, originalTorque: 620, stage1HP: 550, stage1Torque: 710, fuel: "Gasolina" },
          { name: "Turbo 4.0T 550hp", year: "2016+", originalHP: 550, originalTorque: 770, stage1HP: 640, stage1Torque: 880, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── TOYOTA ─────────────────────────────────────────────
  {
    name: "Toyota",
    models: [
      {
        name: "GR Yaris",
        engines: [
          { name: "1.6T AWD 261hp", year: "2020+", originalHP: 261, originalTorque: 360, stage1HP: 310, stage1Torque: 420, fuel: "Gasolina" },
        ],
      },
      {
        name: "Supra (A90)",
        engines: [
          { name: "2.0T 258hp", year: "2019+", originalHP: 258, originalTorque: 400, stage1HP: 310, stage1Torque: 460, fuel: "Gasolina" },
          { name: "3.0T 340hp", year: "2019+", originalHP: 340, originalTorque: 500, stage1HP: 420, stage1Torque: 580, fuel: "Gasolina" },
          { name: "3.0T 387hp (2021+)", year: "2021+", originalHP: 387, originalTorque: 500, stage1HP: 450, stage1Torque: 590, fuel: "Gasolina" },
        ],
      },
      {
        name: "Yaris Cross",
        engines: [
          { name: "1.5 130hp", year: "2021+", originalHP: 130, originalTorque: 185, stage1HP: 145, stage1Torque: 210, fuel: "Gasolina" },
        ],
      },
      {
        name: "Corolla",
        engines: [
          { name: "1.2T 116hp", year: "2018+", originalHP: 116, originalTorque: 185, stage1HP: 140, stage1Torque: 225, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── NISSAN ─────────────────────────────────────────────
  {
    name: "Nissan",
    models: [
      {
        name: "GT-R (R35)",
        engines: [
          { name: "3.8 V6 Twin Turbo 570hp", year: "2017+", originalHP: 570, originalTorque: 637, stage1HP: 650, stage1Torque: 720, fuel: "Gasolina" },
          { name: "3.8 V6 TT Nismo 600hp", year: "2020+", originalHP: 600, originalTorque: 652, stage1HP: 680, stage1Torque: 740, fuel: "Gasolina" },
        ],
      },
      {
        name: "370Z",
        engines: [
          { name: "3.7 V6 NA 328hp", year: "2009-2020", originalHP: 328, originalTorque: 366, stage1HP: 345, stage1Torque: 380, fuel: "Gasolina" },
        ],
      },
      {
        name: "Qashqai (J11/J12)",
        engines: [
          { name: "1.3 DIG-T 140hp", year: "2019+", originalHP: 140, originalTorque: 240, stage1HP: 170, stage1Torque: 290, fuel: "Gasolina" },
          { name: "1.3 DIG-T 160hp", year: "2019+", originalHP: 160, originalTorque: 270, stage1HP: 195, stage1Torque: 320, fuel: "Gasolina" },
          { name: "1.5 dCi 115hp", year: "2014-2021", originalHP: 115, originalTorque: 260, stage1HP: 145, stage1Torque: 320, fuel: "Diésel" },
          { name: "1.7 dCi 150hp", year: "2019-2021", originalHP: 150, originalTorque: 340, stage1HP: 185, stage1Torque: 400, fuel: "Diésel" },
        ],
      },
      {
        name: "Juke",
        engines: [
          { name: "1.0 DIG-T 114hp", year: "2019+", originalHP: 114, originalTorque: 200, stage1HP: 140, stage1Torque: 250, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── HYUNDAI ────────────────────────────────────────────
  {
    name: "Hyundai",
    models: [
      {
        name: "i20 N",
        engines: [
          { name: "1.6T 204hp", year: "2021+", originalHP: 204, originalTorque: 275, stage1HP: 240, stage1Torque: 330, fuel: "Gasolina" },
        ],
      },
      {
        name: "i30 / i30 N",
        engines: [
          { name: "1.0T 120hp", year: "2017+", originalHP: 120, originalTorque: 172, stage1HP: 145, stage1Torque: 220, fuel: "Gasolina" },
          { name: "1.4T 140hp", year: "2017+", originalHP: 140, originalTorque: 242, stage1HP: 170, stage1Torque: 300, fuel: "Gasolina" },
          { name: "i30 N 2.0T 250hp", year: "2018+", originalHP: 250, originalTorque: 353, stage1HP: 295, stage1Torque: 420, fuel: "Gasolina" },
          { name: "i30 N Performance 275hp", year: "2018+", originalHP: 275, originalTorque: 378, stage1HP: 320, stage1Torque: 440, fuel: "Gasolina" },
          { name: "i30 N 2.0T 280hp (FL)", year: "2021+", originalHP: 280, originalTorque: 392, stage1HP: 330, stage1Torque: 450, fuel: "Gasolina" },
          { name: "1.6 CRDi 115hp", year: "2017+", originalHP: 115, originalTorque: 280, stage1HP: 145, stage1Torque: 340, fuel: "Diésel" },
          { name: "1.6 CRDi 136hp", year: "2017+", originalHP: 136, originalTorque: 320, stage1HP: 170, stage1Torque: 380, fuel: "Diésel" },
        ],
      },
      {
        name: "Tucson (NX4)",
        engines: [
          { name: "1.6T 150hp", year: "2020+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "1.6T 180hp", year: "2020+", originalHP: 180, originalTorque: 265, stage1HP: 215, stage1Torque: 330, fuel: "Gasolina" },
          { name: "1.6 CRDi 136hp", year: "2020+", originalHP: 136, originalTorque: 320, stage1HP: 170, stage1Torque: 380, fuel: "Diésel" },
        ],
      },
      {
        name: "Kona N",
        engines: [
          { name: "2.0T 280hp", year: "2021+", originalHP: 280, originalTorque: 392, stage1HP: 330, stage1Torque: 450, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── KIA ────────────────────────────────────────────────
  {
    name: "Kia",
    models: [
      {
        name: "Ceed / ProCeed / XCeed",
        engines: [
          { name: "1.0T 120hp", year: "2018+", originalHP: 120, originalTorque: 172, stage1HP: 145, stage1Torque: 220, fuel: "Gasolina" },
          { name: "1.4T 140hp", year: "2018+", originalHP: 140, originalTorque: 242, stage1HP: 170, stage1Torque: 300, fuel: "Gasolina" },
          { name: "ProCeed GT 1.6T 204hp", year: "2019+", originalHP: 204, originalTorque: 265, stage1HP: 240, stage1Torque: 330, fuel: "Gasolina" },
          { name: "1.6 CRDi 136hp", year: "2018+", originalHP: 136, originalTorque: 320, stage1HP: 170, stage1Torque: 380, fuel: "Diésel" },
        ],
      },
      {
        name: "Stinger",
        engines: [
          { name: "2.0T 245hp", year: "2017+", originalHP: 245, originalTorque: 353, stage1HP: 290, stage1Torque: 420, fuel: "Gasolina" },
          { name: "3.3T V6 370hp", year: "2017+", originalHP: 370, originalTorque: 510, stage1HP: 430, stage1Torque: 590, fuel: "Gasolina" },
          { name: "2.2 CRDi 200hp", year: "2017+", originalHP: 200, originalTorque: 440, stage1HP: 240, stage1Torque: 510, fuel: "Diésel" },
        ],
      },
      {
        name: "Sportage (NQ5)",
        engines: [
          { name: "1.6T 150hp", year: "2021+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "1.6T HEV 230hp", year: "2021+", originalHP: 230, originalTorque: 350, stage1HP: 265, stage1Torque: 410, fuel: "Gasolina" },
          { name: "1.6 CRDi 136hp", year: "2021+", originalHP: 136, originalTorque: 320, stage1HP: 170, stage1Torque: 380, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── ALFA ROMEO ─────────────────────────────────────────
  {
    name: "Alfa Romeo",
    models: [
      {
        name: "Giulia",
        engines: [
          { name: "2.0T 200hp", year: "2016+", originalHP: 200, originalTorque: 330, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "2.0T 280hp", year: "2016+", originalHP: 280, originalTorque: 400, stage1HP: 330, stage1Torque: 470, fuel: "Gasolina" },
          { name: "Quadrifoglio 2.9T V6 510hp", year: "2016+", originalHP: 510, originalTorque: 600, stage1HP: 580, stage1Torque: 680, fuel: "Gasolina" },
          { name: "2.2 JTDm 160hp", year: "2016+", originalHP: 160, originalTorque: 450, stage1HP: 200, stage1Torque: 520, fuel: "Diésel" },
          { name: "2.2 JTDm 190hp", year: "2016+", originalHP: 190, originalTorque: 470, stage1HP: 230, stage1Torque: 540, fuel: "Diésel" },
          { name: "2.2 JTDm 210hp", year: "2016+", originalHP: 210, originalTorque: 470, stage1HP: 250, stage1Torque: 550, fuel: "Diésel" },
        ],
      },
      {
        name: "Stelvio",
        engines: [
          { name: "2.0T 200hp", year: "2017+", originalHP: 200, originalTorque: 330, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "2.0T 280hp", year: "2017+", originalHP: 280, originalTorque: 400, stage1HP: 330, stage1Torque: 470, fuel: "Gasolina" },
          { name: "Quadrifoglio 2.9T V6 510hp", year: "2018+", originalHP: 510, originalTorque: 600, stage1HP: 580, stage1Torque: 680, fuel: "Gasolina" },
          { name: "2.2 JTDm 190hp", year: "2017+", originalHP: 190, originalTorque: 470, stage1HP: 230, stage1Torque: 540, fuel: "Diésel" },
          { name: "2.2 JTDm 210hp", year: "2017+", originalHP: 210, originalTorque: 470, stage1HP: 250, stage1Torque: 550, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── MINI ───────────────────────────────────────────────
  {
    name: "MINI",
    models: [
      {
        name: "Cooper / One (F56)",
        engines: [
          { name: "One 1.5T 102hp", year: "2014+", originalHP: 102, originalTorque: 180, stage1HP: 140, stage1Torque: 235, fuel: "Gasolina" },
          { name: "Cooper 1.5T 136hp", year: "2014+", originalHP: 136, originalTorque: 220, stage1HP: 175, stage1Torque: 280, fuel: "Gasolina" },
          { name: "Cooper S 2.0T 192hp", year: "2014+", originalHP: 192, originalTorque: 280, stage1HP: 240, stage1Torque: 350, fuel: "Gasolina" },
          { name: "JCW 2.0T 231hp", year: "2014+", originalHP: 231, originalTorque: 320, stage1HP: 280, stage1Torque: 400, fuel: "Gasolina" },
          { name: "JCW 2.0T 306hp (GP)", year: "2020+", originalHP: 306, originalTorque: 450, stage1HP: 365, stage1Torque: 520, fuel: "Gasolina" },
          { name: "Cooper D 1.5d 116hp", year: "2014+", originalHP: 116, originalTorque: 270, stage1HP: 150, stage1Torque: 330, fuel: "Diésel" },
          { name: "Cooper SD 2.0d 170hp", year: "2014+", originalHP: 170, originalTorque: 360, stage1HP: 210, stage1Torque: 420, fuel: "Diésel" },
        ],
      },
      {
        name: "Countryman (F60)",
        engines: [
          { name: "Cooper 1.5T 136hp", year: "2017+", originalHP: 136, originalTorque: 220, stage1HP: 175, stage1Torque: 280, fuel: "Gasolina" },
          { name: "Cooper S 2.0T 192hp", year: "2017+", originalHP: 192, originalTorque: 280, stage1HP: 240, stage1Torque: 350, fuel: "Gasolina" },
          { name: "JCW 2.0T 306hp", year: "2020+", originalHP: 306, originalTorque: 450, stage1HP: 365, stage1Torque: 520, fuel: "Gasolina" },
          { name: "Cooper D 1.5d 116hp", year: "2017+", originalHP: 116, originalTorque: 270, stage1HP: 150, stage1Torque: 330, fuel: "Diésel" },
          { name: "Cooper SD 2.0d 190hp", year: "2017+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── JAGUAR ─────────────────────────────────────────────
  {
    name: "Jaguar",
    models: [
      {
        name: "F-Type",
        engines: [
          { name: "2.0T 300hp", year: "2017+", originalHP: 300, originalTorque: 400, stage1HP: 350, stage1Torque: 470, fuel: "Gasolina" },
          { name: "3.0 V6 SC 380hp", year: "2013+", originalHP: 380, originalTorque: 460, stage1HP: 420, stage1Torque: 530, fuel: "Gasolina" },
          { name: "5.0 V8 SC R 575hp", year: "2017+", originalHP: 575, originalTorque: 700, stage1HP: 640, stage1Torque: 780, fuel: "Gasolina" },
        ],
      },
      {
        name: "XE / XF",
        engines: [
          { name: "2.0T 200hp", year: "2015+", originalHP: 200, originalTorque: 320, stage1HP: 245, stage1Torque: 390, fuel: "Gasolina" },
          { name: "2.0T 300hp", year: "2017+", originalHP: 300, originalTorque: 400, stage1HP: 350, stage1Torque: 470, fuel: "Gasolina" },
          { name: "2.0d 180hp", year: "2015+", originalHP: 180, originalTorque: 430, stage1HP: 215, stage1Torque: 500, fuel: "Diésel" },
          { name: "2.0d 240hp", year: "2017+", originalHP: 240, originalTorque: 500, stage1HP: 280, stage1Torque: 570, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── LAND ROVER ─────────────────────────────────────────
  {
    name: "Land Rover",
    models: [
      {
        name: "Range Rover Evoque",
        engines: [
          { name: "2.0T 200hp", year: "2019+", originalHP: 200, originalTorque: 340, stage1HP: 245, stage1Torque: 400, fuel: "Gasolina" },
          { name: "2.0T 249hp", year: "2019+", originalHP: 249, originalTorque: 365, stage1HP: 295, stage1Torque: 430, fuel: "Gasolina" },
          { name: "2.0d 150hp", year: "2019+", originalHP: 150, originalTorque: 380, stage1HP: 190, stage1Torque: 440, fuel: "Diésel" },
          { name: "2.0d 180hp", year: "2019+", originalHP: 180, originalTorque: 430, stage1HP: 215, stage1Torque: 500, fuel: "Diésel" },
          { name: "2.0d 204hp", year: "2019+", originalHP: 204, originalTorque: 430, stage1HP: 240, stage1Torque: 500, fuel: "Diésel" },
        ],
      },
      {
        name: "Range Rover Velar",
        engines: [
          { name: "2.0T 250hp", year: "2017+", originalHP: 250, originalTorque: 365, stage1HP: 295, stage1Torque: 430, fuel: "Gasolina" },
          { name: "3.0 V6 SC 380hp", year: "2017+", originalHP: 380, originalTorque: 450, stage1HP: 430, stage1Torque: 520, fuel: "Gasolina" },
          { name: "2.0d 180hp", year: "2017+", originalHP: 180, originalTorque: 430, stage1HP: 215, stage1Torque: 500, fuel: "Diésel" },
          { name: "2.0d 240hp", year: "2017+", originalHP: 240, originalTorque: 500, stage1HP: 280, stage1Torque: 570, fuel: "Diésel" },
          { name: "3.0d 300hp", year: "2017+", originalHP: 300, originalTorque: 700, stage1HP: 350, stage1Torque: 780, fuel: "Diésel" },
        ],
      },
      {
        name: "Range Rover Sport",
        engines: [
          { name: "3.0 V6 SC 340hp", year: "2013+", originalHP: 340, originalTorque: 450, stage1HP: 390, stage1Torque: 520, fuel: "Gasolina" },
          { name: "5.0 V8 SC 525hp", year: "2013+", originalHP: 525, originalTorque: 625, stage1HP: 580, stage1Torque: 700, fuel: "Gasolina" },
          { name: "SVR 5.0 V8 SC 575hp", year: "2015+", originalHP: 575, originalTorque: 700, stage1HP: 640, stage1Torque: 780, fuel: "Gasolina" },
          { name: "3.0 SDV6 306hp", year: "2013+", originalHP: 306, originalTorque: 700, stage1HP: 355, stage1Torque: 780, fuel: "Diésel" },
          { name: "4.4 SDV8 339hp", year: "2013+", originalHP: 339, originalTorque: 740, stage1HP: 390, stage1Torque: 830, fuel: "Diésel" },
        ],
      },
      {
        name: "Defender",
        engines: [
          { name: "2.0T 300hp", year: "2020+", originalHP: 300, originalTorque: 400, stage1HP: 350, stage1Torque: 470, fuel: "Gasolina" },
          { name: "V8 5.0 SC 525hp", year: "2021+", originalHP: 525, originalTorque: 625, stage1HP: 580, stage1Torque: 700, fuel: "Gasolina" },
          { name: "2.0d 200hp", year: "2020+", originalHP: 200, originalTorque: 430, stage1HP: 240, stage1Torque: 500, fuel: "Diésel" },
          { name: "2.0d 240hp", year: "2020+", originalHP: 240, originalTorque: 430, stage1HP: 280, stage1Torque: 510, fuel: "Diésel" },
          { name: "3.0d 300hp", year: "2020+", originalHP: 300, originalTorque: 650, stage1HP: 350, stage1Torque: 730, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── MASERATI ───────────────────────────────────────────
  {
    name: "Maserati",
    models: [
      {
        name: "Ghibli",
        engines: [
          { name: "2.0T 330hp", year: "2020+", originalHP: 330, originalTorque: 450, stage1HP: 390, stage1Torque: 520, fuel: "Gasolina" },
          { name: "3.0 V6 350hp", year: "2013+", originalHP: 350, originalTorque: 500, stage1HP: 410, stage1Torque: 580, fuel: "Gasolina" },
          { name: "3.0 V6 430hp", year: "2018+", originalHP: 430, originalTorque: 580, stage1HP: 490, stage1Torque: 660, fuel: "Gasolina" },
          { name: "Trofeo 3.8 V8 580hp", year: "2020+", originalHP: 580, originalTorque: 730, stage1HP: 660, stage1Torque: 830, fuel: "Gasolina" },
          { name: "3.0d V6 275hp", year: "2013-2020", originalHP: 275, originalTorque: 600, stage1HP: 320, stage1Torque: 680, fuel: "Diésel" },
        ],
      },
      {
        name: "Levante",
        engines: [
          { name: "2.0T 330hp", year: "2020+", originalHP: 330, originalTorque: 450, stage1HP: 390, stage1Torque: 520, fuel: "Gasolina" },
          { name: "3.0 V6 350hp", year: "2016+", originalHP: 350, originalTorque: 500, stage1HP: 410, stage1Torque: 580, fuel: "Gasolina" },
          { name: "Trofeo 3.8 V8 580hp", year: "2020+", originalHP: 580, originalTorque: 730, stage1HP: 660, stage1Torque: 830, fuel: "Gasolina" },
          { name: "3.0d V6 275hp", year: "2016-2020", originalHP: 275, originalTorque: 600, stage1HP: 320, stage1Torque: 680, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── VOLVO ──────────────────────────────────────────────
  {
    name: "Volvo",
    models: [
      {
        name: "S/V60",
        engines: [
          { name: "T3 1.5T 150hp", year: "2018+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "T4 2.0T 190hp", year: "2018+", originalHP: 190, originalTorque: 300, stage1HP: 230, stage1Torque: 360, fuel: "Gasolina" },
          { name: "T5 2.0T 250hp", year: "2018+", originalHP: 250, originalTorque: 350, stage1HP: 290, stage1Torque: 420, fuel: "Gasolina" },
          { name: "T6 2.0T 310hp", year: "2018+", originalHP: 310, originalTorque: 400, stage1HP: 350, stage1Torque: 460, fuel: "Gasolina" },
          { name: "T8 Polestar 405hp", year: "2019+", originalHP: 405, originalTorque: 669, stage1HP: 445, stage1Torque: 720, fuel: "Gasolina" },
          { name: "D3 2.0d 150hp", year: "2018+", originalHP: 150, originalTorque: 320, stage1HP: 190, stage1Torque: 400, fuel: "Diésel" },
          { name: "D4 2.0d 190hp", year: "2018+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
      {
        name: "XC40 / XC60 / XC90",
        engines: [
          { name: "XC40 T3 1.5T 163hp", year: "2018+", originalHP: 163, originalTorque: 265, stage1HP: 200, stage1Torque: 320, fuel: "Gasolina" },
          { name: "XC40 T4 2.0T 190hp", year: "2018+", originalHP: 190, originalTorque: 300, stage1HP: 230, stage1Torque: 360, fuel: "Gasolina" },
          { name: "XC40 T5 2.0T 247hp", year: "2018+", originalHP: 247, originalTorque: 350, stage1HP: 290, stage1Torque: 420, fuel: "Gasolina" },
          { name: "XC60 T5 2.0T 250hp", year: "2017+", originalHP: 250, originalTorque: 350, stage1HP: 290, stage1Torque: 420, fuel: "Gasolina" },
          { name: "XC60 T6 2.0T 310hp", year: "2017+", originalHP: 310, originalTorque: 400, stage1HP: 350, stage1Torque: 460, fuel: "Gasolina" },
          { name: "XC90 T5 2.0T 250hp", year: "2015+", originalHP: 250, originalTorque: 350, stage1HP: 290, stage1Torque: 420, fuel: "Gasolina" },
          { name: "XC90 T6 2.0T 310hp", year: "2015+", originalHP: 310, originalTorque: 400, stage1HP: 350, stage1Torque: 460, fuel: "Gasolina" },
          { name: "XC60 D4 2.0d 190hp", year: "2017+", originalHP: 190, originalTorque: 400, stage1HP: 230, stage1Torque: 460, fuel: "Diésel" },
          { name: "XC60 D5 2.0d 235hp", year: "2017+", originalHP: 235, originalTorque: 480, stage1HP: 275, stage1Torque: 550, fuel: "Diésel" },
          { name: "XC90 D5 2.0d 235hp", year: "2015+", originalHP: 235, originalTorque: 480, stage1HP: 275, stage1Torque: 550, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── DS ─────────────────────────────────────────────────
  {
    name: "DS",
    models: [
      {
        name: "DS3 Crossback",
        engines: [
          { name: "1.2 PureTech 100hp", year: "2019+", originalHP: 100, originalTorque: 205, stage1HP: 130, stage1Torque: 255, fuel: "Gasolina" },
          { name: "1.2 PureTech 130hp", year: "2019+", originalHP: 130, originalTorque: 230, stage1HP: 160, stage1Torque: 280, fuel: "Gasolina" },
          { name: "1.2 PureTech 155hp", year: "2019+", originalHP: 155, originalTorque: 240, stage1HP: 185, stage1Torque: 290, fuel: "Gasolina" },
          { name: "1.5 BlueHDi 100hp", year: "2019+", originalHP: 100, originalTorque: 250, stage1HP: 130, stage1Torque: 310, fuel: "Diésel" },
          { name: "1.5 BlueHDi 130hp", year: "2019+", originalHP: 130, originalTorque: 300, stage1HP: 160, stage1Torque: 360, fuel: "Diésel" },
        ],
      },
      {
        name: "DS7 Crossback",
        engines: [
          { name: "1.6 PureTech 180hp", year: "2017+", originalHP: 180, originalTorque: 250, stage1HP: 215, stage1Torque: 310, fuel: "Gasolina" },
          { name: "1.6 PureTech 225hp", year: "2017+", originalHP: 225, originalTorque: 300, stage1HP: 260, stage1Torque: 360, fuel: "Gasolina" },
          { name: "1.5 BlueHDi 130hp", year: "2017+", originalHP: 130, originalTorque: 300, stage1HP: 160, stage1Torque: 360, fuel: "Diésel" },
          { name: "2.0 BlueHDi 180hp", year: "2017+", originalHP: 180, originalTorque: 400, stage1HP: 215, stage1Torque: 470, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── FIAT ───────────────────────────────────────────────
  {
    name: "Fiat",
    models: [
      {
        name: "500 / 500X",
        engines: [
          { name: "500 1.4T Abarth 145hp", year: "2016+", originalHP: 145, originalTorque: 206, stage1HP: 175, stage1Torque: 260, fuel: "Gasolina" },
          { name: "Abarth 595 1.4T 165hp", year: "2016+", originalHP: 165, originalTorque: 230, stage1HP: 200, stage1Torque: 285, fuel: "Gasolina" },
          { name: "Abarth 595 Competizione 180hp", year: "2016+", originalHP: 180, originalTorque: 250, stage1HP: 210, stage1Torque: 300, fuel: "Gasolina" },
          { name: "500X 1.3T 150hp", year: "2018+", originalHP: 150, originalTorque: 270, stage1HP: 185, stage1Torque: 330, fuel: "Gasolina" },
          { name: "500X 1.6 Multijet 130hp", year: "2014+", originalHP: 130, originalTorque: 320, stage1HP: 160, stage1Torque: 380, fuel: "Diésel" },
        ],
      },
      {
        name: "Tipo",
        engines: [
          { name: "1.4T 120hp", year: "2016+", originalHP: 120, originalTorque: 215, stage1HP: 150, stage1Torque: 265, fuel: "Gasolina" },
          { name: "1.6 Multijet 120hp", year: "2016+", originalHP: 120, originalTorque: 320, stage1HP: 155, stage1Torque: 380, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── DACIA ──────────────────────────────────────────────
  {
    name: "Dacia",
    models: [
      {
        name: "Duster",
        engines: [
          { name: "1.0 TCe 100hp", year: "2019+", originalHP: 100, originalTorque: 160, stage1HP: 125, stage1Torque: 210, fuel: "Gasolina" },
          { name: "1.3 TCe 130hp", year: "2019+", originalHP: 130, originalTorque: 240, stage1HP: 160, stage1Torque: 290, fuel: "Gasolina" },
          { name: "1.3 TCe 150hp", year: "2019+", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "1.5 dCi 115hp", year: "2019+", originalHP: 115, originalTorque: 260, stage1HP: 145, stage1Torque: 320, fuel: "Diésel" },
        ],
      },
      {
        name: "Sandero",
        engines: [
          { name: "1.0 TCe 90hp", year: "2020+", originalHP: 90, originalTorque: 160, stage1HP: 115, stage1Torque: 210, fuel: "Gasolina" },
          { name: "1.0 TCe 100hp", year: "2020+", originalHP: 100, originalTorque: 160, stage1HP: 125, stage1Torque: 210, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── FERRARI ────────────────────────────────────────────
  {
    name: "Ferrari",
    models: [
      {
        name: "488 / F8",
        engines: [
          { name: "488 GTB 3.9T V8 670hp", year: "2015-2019", originalHP: 670, originalTorque: 760, stage1HP: 740, stage1Torque: 850, fuel: "Gasolina" },
          { name: "488 Pista 3.9T V8 720hp", year: "2018-2019", originalHP: 720, originalTorque: 770, stage1HP: 780, stage1Torque: 860, fuel: "Gasolina" },
          { name: "F8 Tributo 3.9T V8 720hp", year: "2019+", originalHP: 720, originalTorque: 770, stage1HP: 780, stage1Torque: 860, fuel: "Gasolina" },
        ],
      },
      {
        name: "Roma / Portofino",
        engines: [
          { name: "Roma 3.9T V8 620hp", year: "2020+", originalHP: 620, originalTorque: 760, stage1HP: 690, stage1Torque: 850, fuel: "Gasolina" },
          { name: "Portofino 3.9T V8 600hp", year: "2018+", originalHP: 600, originalTorque: 760, stage1HP: 670, stage1Torque: 850, fuel: "Gasolina" },
          { name: "Portofino M 3.9T V8 620hp", year: "2020+", originalHP: 620, originalTorque: 760, stage1HP: 690, stage1Torque: 850, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── LAMBORGHINI ────────────────────────────────────────
  {
    name: "Lamborghini",
    models: [
      {
        name: "Urus",
        engines: [
          { name: "4.0T V8 650hp", year: "2018+", originalHP: 650, originalTorque: 850, stage1HP: 740, stage1Torque: 960, fuel: "Gasolina" },
          { name: "Performante 4.0T V8 666hp", year: "2022+", originalHP: 666, originalTorque: 850, stage1HP: 750, stage1Torque: 960, fuel: "Gasolina" },
        ],
      },
      {
        name: "Huracán",
        engines: [
          { name: "5.2 V10 610hp", year: "2014+", originalHP: 610, originalTorque: 560, stage1HP: 640, stage1Torque: 590, fuel: "Gasolina" },
          { name: "STO 5.2 V10 640hp", year: "2021+", originalHP: 640, originalTorque: 565, stage1HP: 670, stage1Torque: 595, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── BENTLEY ────────────────────────────────────────────
  {
    name: "Bentley",
    models: [
      {
        name: "Continental GT",
        engines: [
          { name: "4.0T V8 550hp", year: "2018+", originalHP: 550, originalTorque: 770, stage1HP: 640, stage1Torque: 880, fuel: "Gasolina" },
          { name: "6.0 W12 635hp", year: "2018+", originalHP: 635, originalTorque: 900, stage1HP: 710, stage1Torque: 1000, fuel: "Gasolina" },
          { name: "Speed 6.0 W12 659hp", year: "2021+", originalHP: 659, originalTorque: 900, stage1HP: 730, stage1Torque: 1010, fuel: "Gasolina" },
        ],
      },
      {
        name: "Bentayga",
        engines: [
          { name: "4.0T V8 550hp", year: "2020+", originalHP: 550, originalTorque: 770, stage1HP: 640, stage1Torque: 880, fuel: "Gasolina" },
          { name: "6.0 W12 635hp", year: "2015+", originalHP: 635, originalTorque: 900, stage1HP: 710, stage1Torque: 1000, fuel: "Gasolina" },
          { name: "Speed 6.0 W12 635hp", year: "2020+", originalHP: 635, originalTorque: 900, stage1HP: 710, stage1Torque: 1010, fuel: "Gasolina" },
          { name: "4.0 V8 Diesel 435hp", year: "2017-2020", originalHP: 435, originalTorque: 900, stage1HP: 490, stage1Torque: 990, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── MCLAREN ────────────────────────────────────────────
  {
    name: "McLaren",
    models: [
      {
        name: "570S / 600LT / 720S",
        engines: [
          { name: "570S 3.8T V8 570hp", year: "2015+", originalHP: 570, originalTorque: 600, stage1HP: 640, stage1Torque: 680, fuel: "Gasolina" },
          { name: "600LT 3.8T V8 600hp", year: "2018+", originalHP: 600, originalTorque: 620, stage1HP: 670, stage1Torque: 700, fuel: "Gasolina" },
          { name: "720S 4.0T V8 720hp", year: "2017+", originalHP: 720, originalTorque: 770, stage1HP: 790, stage1Torque: 850, fuel: "Gasolina" },
          { name: "765LT 4.0T V8 765hp", year: "2020+", originalHP: 765, originalTorque: 800, stage1HP: 830, stage1Torque: 880, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── ASTON MARTIN ───────────────────────────────────────
  {
    name: "Aston Martin",
    models: [
      {
        name: "Vantage / DB11 / DBX",
        engines: [
          { name: "Vantage 4.0T V8 510hp", year: "2018+", originalHP: 510, originalTorque: 685, stage1HP: 590, stage1Torque: 780, fuel: "Gasolina" },
          { name: "DB11 4.0T V8 510hp", year: "2017+", originalHP: 510, originalTorque: 675, stage1HP: 590, stage1Torque: 770, fuel: "Gasolina" },
          { name: "DB11 5.2T V12 608hp", year: "2016+", originalHP: 608, originalTorque: 700, stage1HP: 680, stage1Torque: 790, fuel: "Gasolina" },
          { name: "DBX 4.0T V8 550hp", year: "2020+", originalHP: 550, originalTorque: 700, stage1HP: 630, stage1Torque: 800, fuel: "Gasolina" },
          { name: "DBX707 4.0T V8 707hp", year: "2022+", originalHP: 707, originalTorque: 900, stage1HP: 780, stage1Torque: 990, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── SUBARU ─────────────────────────────────────────────
  {
    name: "Subaru",
    models: [
      {
        name: "WRX / STI",
        engines: [
          { name: "WRX 2.0T 268hp", year: "2014+", originalHP: 268, originalTorque: 350, stage1HP: 310, stage1Torque: 410, fuel: "Gasolina" },
          { name: "STI 2.5T 300hp", year: "2014-2021", originalHP: 300, originalTorque: 407, stage1HP: 340, stage1Torque: 460, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── HONDA ──────────────────────────────────────────────
  {
    name: "Honda",
    models: [
      {
        name: "Civic Type R",
        engines: [
          { name: "FK8 2.0T VTEC 320hp", year: "2017-2021", originalHP: 320, originalTorque: 400, stage1HP: 360, stage1Torque: 450, fuel: "Gasolina" },
          { name: "FL5 2.0T VTEC 329hp", year: "2022+", originalHP: 329, originalTorque: 420, stage1HP: 370, stage1Torque: 470, fuel: "Gasolina" },
        ],
      },
      {
        name: "Civic (X/XI)",
        engines: [
          { name: "1.0T VTEC 126hp", year: "2017+", originalHP: 126, originalTorque: 200, stage1HP: 155, stage1Torque: 250, fuel: "Gasolina" },
          { name: "1.5T VTEC 182hp", year: "2017+", originalHP: 182, originalTorque: 240, stage1HP: 220, stage1Torque: 300, fuel: "Gasolina" },
          { name: "1.6 i-DTEC 120hp", year: "2017+", originalHP: 120, originalTorque: 300, stage1HP: 150, stage1Torque: 360, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── MAZDA ──────────────────────────────────────────────
  {
    name: "Mazda",
    models: [
      {
        name: "3 / CX-30",
        engines: [
          { name: "Skyactiv-X 2.0 180hp", year: "2019+", originalHP: 180, originalTorque: 224, stage1HP: 200, stage1Torque: 250, fuel: "Gasolina" },
          { name: "Skyactiv-G 2.0 122hp", year: "2019+", originalHP: 122, originalTorque: 213, stage1HP: 140, stage1Torque: 240, fuel: "Gasolina" },
          { name: "1.8 Skyactiv-D 116hp", year: "2019+", originalHP: 116, originalTorque: 270, stage1HP: 145, stage1Torque: 330, fuel: "Diésel" },
        ],
      },
      {
        name: "CX-5",
        engines: [
          { name: "2.0 Skyactiv-G 165hp", year: "2017+", originalHP: 165, originalTorque: 210, stage1HP: 185, stage1Torque: 240, fuel: "Gasolina" },
          { name: "2.5 Skyactiv-G 194hp", year: "2017+", originalHP: 194, originalTorque: 258, stage1HP: 215, stage1Torque: 285, fuel: "Gasolina" },
          { name: "2.2 Skyactiv-D 150hp", year: "2017+", originalHP: 150, originalTorque: 380, stage1HP: 185, stage1Torque: 440, fuel: "Diésel" },
          { name: "2.2 Skyactiv-D 184hp", year: "2017+", originalHP: 184, originalTorque: 445, stage1HP: 220, stage1Torque: 510, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── MITSUBISHI ─────────────────────────────────────────
  {
    name: "Mitsubishi",
    models: [
      {
        name: "L200",
        engines: [
          { name: "2.2 Di-D 150hp", year: "2015+", originalHP: 150, originalTorque: 380, stage1HP: 190, stage1Torque: 440, fuel: "Diésel" },
          { name: "2.4 Di-D 181hp", year: "2015+", originalHP: 181, originalTorque: 430, stage1HP: 220, stage1Torque: 500, fuel: "Diésel" },
        ],
      },
    ],
  },

  // ─── SUZUKI ─────────────────────────────────────────────
  {
    name: "Suzuki",
    models: [
      {
        name: "Swift Sport",
        engines: [
          { name: "1.4T Boosterjet 140hp", year: "2017+", originalHP: 140, originalTorque: 230, stage1HP: 170, stage1Torque: 280, fuel: "Gasolina" },
        ],
      },
      {
        name: "Jimny",
        engines: [
          { name: "1.5 VVT 102hp", year: "2018+", originalHP: 102, originalTorque: 130, stage1HP: 115, stage1Torque: 145, fuel: "Gasolina" },
        ],
      },
    ],
  },

  // ─── DODGE / RAM ────────────────────────────────────────
  {
    name: "Dodge / RAM",
    models: [
      {
        name: "Challenger / Charger",
        engines: [
          { name: "R/T 5.7 HEMI 375hp", year: "2015+", originalHP: 375, originalTorque: 536, stage1HP: 400, stage1Torque: 565, fuel: "Gasolina" },
          { name: "Scat Pack 6.4 HEMI 485hp", year: "2015+", originalHP: 485, originalTorque: 644, stage1HP: 510, stage1Torque: 675, fuel: "Gasolina" },
          { name: "Hellcat 6.2 SC 717hp", year: "2015+", originalHP: 717, originalTorque: 881, stage1HP: 780, stage1Torque: 950, fuel: "Gasolina" },
          { name: "Redeye 6.2 SC 797hp", year: "2019+", originalHP: 797, originalTorque: 959, stage1HP: 860, stage1Torque: 1030, fuel: "Gasolina" },
        ],
      },
      {
        name: "RAM 1500",
        engines: [
          { name: "5.7 HEMI 395hp", year: "2019+", originalHP: 395, originalTorque: 556, stage1HP: 420, stage1Torque: 590, fuel: "Gasolina" },
          { name: "3.0 EcoDiesel 260hp", year: "2019+", originalHP: 260, originalTorque: 600, stage1HP: 310, stage1Torque: 690, fuel: "Diésel" },
        ],
      },
    ],
  },
];
