export interface CarEngine {
  name: string;
  year: string;
  originalHP: number;
  originalTorque: number;
  stage1HP: number;
  stage1Torque: number;
  fuel: "Gasolina" | "Diésel" | "Diesel";
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
      {
      name: "A1 (GB 2018 →)",
        engines: [
          { name: "25 TFSI (1.0T) 95hp", year: "2018 →", originalHP: 95, originalTorque: 175, stage1HP: 130, stage1Torque: 240, fuel: "Gasolina" },
          { name: "30 TFSI (1.0T) 116hp", year: "2018 →", originalHP: 116, originalTorque: 200, stage1HP: 140, stage1Torque: 240, fuel: "Gasolina" },
          { name: "35 TFSI (1.5T) 150hp", year: "2018 →", originalHP: 150, originalTorque: 250, stage1HP: 185, stage1Torque: 310, fuel: "Gasolina" },
          { name: "40 TFSI (2.0T) 200hp", year: "2018 →", originalHP: 200, originalTorque: 320, stage1HP: 245, stage1Torque: 430, fuel: "Gasolina" },
        ],
      },
    ],
  },
  // ─── DACIA ───────────────────────────────────────────────
  {
    name: "Dacia",
    models: [
      {
        name: "Sandero (2008-2012)",
        engines: [
          { name: "1.2I 16V 75hp", year: "2008-2012", originalHP: 75, originalTorque: 107, stage1HP: 85, stage1Torque: 125, fuel: "Gasolina" },
          { name: "1.4I 75hp", year: "2008-2012", originalHP: 75, originalTorque: 112, stage1HP: 82, stage1Torque: 122, fuel: "Gasolina" },
          { name: "1.6I 85hp", year: "2008-2012", originalHP: 85, originalTorque: 135, stage1HP: 95, stage1Torque: 150, fuel: "Gasolina" },
          { name: "1.6I 16V 105hp", year: "2008-2012", originalHP: 105, originalTorque: 148, stage1HP: 115, stage1Torque: 160, fuel: "Gasolina" },
          { name: "1.5 DCI 70hp", year: "2008-2012", originalHP: 70, originalTorque: 160, stage1HP: 90, stage1Torque: 200, fuel: "Diesel" },
          { name: "1.5 DCI 75hp", year: "2008-2012", originalHP: 75, originalTorque: 180, stage1HP: 95, stage1Torque: 220, fuel: "Diesel" },
          { name: "1.5 DCI 85hp", year: "2008-2012", originalHP: 85, originalTorque: 200, stage1HP: 110, stage1Torque: 250, fuel: "Diesel" },
          { name: "1.5 DCI 90hp", year: "2008-2012", originalHP: 90, originalTorque: 200, stage1HP: 110, stage1Torque: 250, fuel: "Diesel" },
        ],
      },
      {
        name: "Sandero (2013-2015)",
        engines: [
          { name: "0.9 DCI 90hp", year: "2013-2015", originalHP: 90, originalTorque: 135, stage1HP: 107, stage1Torque: 175, fuel: "Gasolina" },
          { name: "1.5 DCI 75hp", year: "2013-2015", originalHP: 75, originalTorque: 200, stage1HP: 115, stage1Torque: 260, fuel: "Diesel" },
          { name: "1.5 DCI 90hp", year: "2013-2015", originalHP: 90, originalTorque: 200, stage1HP: 110, stage1Torque: 250, fuel: "Diesel" },
        ],
      },
      {
        name: "Sandero (2016-2020)",
        engines: [
          { name: "0.9 TCE 90hp", year: "2013-2015", originalHP: 90, originalTorque: 135, stage1HP: 107, stage1Torque: 175, fuel: "Gasolina" },
          { name: "1.0 SCE 73hp", year: "2013-2015", originalHP: 73, originalTorque: 97, stage1HP: 85, stage1Torque: 110, fuel: "Gasolina" },
          { name: "1.0 TCE 100hp", year: "2013-2015", originalHP: 100, originalTorque: 160, stage1HP: 125, stage1Torque: 200, fuel: "Gasolina" },
          { name: "1.5 DCI 75hp", year: "2013-2015", originalHP: 75, originalTorque: 200, stage1HP: 115, stage1Torque: 260, fuel: "Diesel" },
          { name: "1.5 DCI 90hp", year: "2013-2015", originalHP: 90, originalTorque: 200, stage1HP: 115, stage1Torque: 260, fuel: "Diesel" },
        ],
      },
      {
        name: "Sandero (2021 →)",
        engines: [
          { name: "1.0 SCE 67hp", year: "2021 →", originalHP: 67, originalTorque: 95, stage1HP: 73, stage1Torque: 105, fuel: "Gasolina" },
          { name: "TCE 100 ECO-G 100hp", year: "2021 →", originalHP: 100, originalTorque: 170, stage1HP: 115, stage1Torque: 200, fuel: "Gasolina" },
          { name: "TCE 90 90hp", year: "2021 →", originalHP: 90, originalTorque: 160, stage1HP: 110, stage1Torque: 210, fuel: "Gasolina" },
        ],
      },
    ],
  },
  // ─── FORD ───────────────────────────────────────────────
  {
    name: "Ford",
    models: [
      {
        name: "Focus (1998-2005)",
        engines: [
          { name: "FOCUS 1.4I 16V 75hp", year: "1998-2005", originalHP: 75, originalTorque: 125, stage1HP: 85, stage1Torque: 135, fuel: "Gasolina" },
          { name: "FOCUS 1.6I 16V 100hp", year: "1998-2005", originalHP: 100, originalTorque: 145, stage1HP: 112, stage1Torque: 150, fuel: "Gasolina" },
          { name: "FOCUS 1.6 TI-VCT 115hp", year: "1998-2005", originalHP: 115, originalTorque: 155, stage1HP: 125, stage1Torque: 170, fuel: "Gasolina" },
          { name: "FOCUS 1.8I 115hp", year: "1998-2005", originalHP: 115, originalTorque: 158, stage1HP: 125, stage1Torque: 170, fuel: "Gasolina" },
          { name: "FOCUS 2.0I 130hp", year: "1998-2005", originalHP: 130, originalTorque: 174, stage1HP: 140, stage1Torque: 190, fuel: "Gasolina" },
          { name: "FOCUS 2.0I 16V ST 170hp", year: "1998-2005", originalHP: 170, originalTorque: 196, stage1HP: 185, stage1Torque: 225, fuel: "Gasolina" },
          { name: "FOCUS 2.0I 16V TURBO RS 215hp", year: "1998-2005", originalHP: 215, originalTorque: 310, stage1HP: 245, stage1Torque: 380, fuel: "Gasolina" },          
          { name: "FOCUS 1.6 TDCI 109hp", year: "1998-2005", originalHP: 109, originalTorque: 245, stage1HP: 140, stage1Torque: 315, fuel: "Diesel" },          
          { name: "FOCUS 1.8 TDDI 75hp", year: "1998-2005", originalHP: 75, originalTorque: 175, stage1HP: 100, stage1Torque: 225, fuel: "Diesel" },          
          { name: "FOCUS 1.8 TDDI 90hp", year: "1998-2005", originalHP: 90, originalTorque: 200, stage1HP: 116, stage1Torque: 260, fuel: "Diesel" },          
          { name: "FOCUS 1.8 TDCI 100hp", year: "1998-2005", originalHP: 100, originalTorque: 240, stage1HP: 140, stage1Torque: 350, fuel: "Diesel" },          
          { name: "FOCUS 1.8 TDCI 115hp", year: "1998-2005", originalHP: 115, originalTorque: 250, stage1HP: 140, stage1Torque: 350, fuel: "Diesel" },
         ],
      },
      {
        name: "Focus (2004-2010)",
        engines: [
          { name: "FOCUS 1.4I 80hp", year: "2004-2010", originalHP: 80, originalTorque: 124, stage1HP: 87, stage1Torque: 135, fuel: "Gasolina" },          
          { name: "FOCUS 1.6I 16V 100hp", year: "2004-2010", originalHP: 100, originalTorque: 145, stage1HP: 112, stage1Torque: 150, fuel: "Gasolina" },          
          { name: "FOCUS 1.6 TI-VCT 115hp", year: "2004-2010", originalHP: 115, originalTorque: 155, stage1HP: 140, stage1Torque: 175, fuel: "Gasolina" },          
          { name: "FOCUS 1.8I 125hp", year: "2004-2010", originalHP: 125, originalTorque: 165, stage1HP: 135, stage1Torque: 180, fuel: "Gasolina" },          
          { name: "FOCUS 2.0I 16V 145hp", year: "2004-2010", originalHP: 145, originalTorque: 185, stage1HP: 155, stage1Torque: 203, fuel: "Gasolina" },          
          { name: "FOCUS FOCUS 2.5 TURBO ST 225hp", year: "2004-2010", originalHP: 225, originalTorque: 320, stage1HP: 255, stage1Torque: 400, fuel: "Gasolina" },          
          { name: "FOCUS RS 305hp", year: "2004-2010", originalHP: 305, originalTorque: 440, stage1HP: 350, stage1Torque: 540, fuel: "Gasolina" },
          { name: "FOCUS RS500 350hp", year: "2004-2010", originalHP: 350, originalTorque: 460, stage1HP: 370, stage1Torque: 560, fuel: "Gasolina" },
          { name: "FOCUS 1.6 TDCI 109hp", year: "1998-2005", originalHP: 109, originalTorque: 245, stage1HP: 140, stage1Torque: 315, fuel: "Diesel" },          
          { name: "FOCUS 1.8 TDDI 75hp", year: "1998-2005", originalHP: 75, originalTorque: 175, stage1HP: 100, stage1Torque: 225, fuel: "Diesel" },          
          { name: "FOCUS 1.8 TDDI 90hp", year: "1998-2005", originalHP: 90, originalTorque: 200, stage1HP: 116, stage1Torque: 260, fuel: "Diesel" },          
          { name: "FOCUS 1.8 TDCI 100hp", year: "1998-2005", originalHP: 100, originalTorque: 240, stage1HP: 140, stage1Torque: 350, fuel: "Diesel" },          
          { name: "FOCUS 1.8 TDCI 115hp", year: "1998-2005", originalHP: 115, originalTorque: 250, stage1HP: 140, stage1Torque: 350, fuel: "Diesel" },
         ],
      },
      {
        name: "Focus (2011-2014)",
        engines: [
          { name: "FOCUS 1.0 ECOBOOST 100hp", year: "2011-2014", originalHP: 100, originalTorque: 170, stage1HP: 145, stage1Torque: 240, fuel: "Gasolina" },
          { name: "FOCUS 1.0 ECOBOOST 125hp", year: "2011-2014", originalHP: 125, originalTorque: 200, stage1HP: 145, stage1Torque: 240, fuel: "Gasolina" },
          { name: "FOCUS 1.5 ECOBOOST 150hp", year: "2011-2014", originalHP: 150, originalTorque: 240, stage1HP: 190, stage1Torque: 300, fuel: "Gasolina" },
          { name: "FOCUS 1.6 ECOBOOST 150hp", year: "2011-2014", originalHP: 150, originalTorque: 240, stage1HP: 190, stage1Torque: 310, fuel: "Gasolina" },
          { name: "FOCUS 1.6 ECOBOOST 150hp", year: "2011-2014", originalHP: 150, originalTorque: 240, stage1HP: 190, stage1Torque: 310, fuel: "Gasolina" },
          { name: "FOCUS 1.6 TI-VCT 105hp", year: "2011-2014", originalHP: 105, originalTorque: 150, stage1HP: 115, stage1Torque: 165, fuel: "Gasolina" },
          { name: "FOCUS 1.6 TI-VCT 125hp", year: "2011-2014", originalHP: 125, originalTorque: 160, stage1HP: 135, stage1Torque: 175, fuel: "Gasolina" },
          { name: "FOCUS 2.0 ST ECOBOOST 250hp", year: "2011-2014", originalHP: 250, originalTorque: 340, stage1HP: 260, stage1Torque: 440, fuel: "Gasolina" },
          { name: "FOCUS 1.6 TDCI 95hp", year: "2011-2014", originalHP: 95, originalTorque: 230, stage1HP: 120, stage1Torque: 280, fuel: "Diesel" },
          { name: "FOCUS 1.6 TDCI 105hp", year: "2011-2014", originalHP: 105, originalTorque: 240, stage1HP: 135, stage1Torque: 320, fuel: "Diesel" },
          { name: "FOCUS 1.6 TDCI 115hp", year: "2011-2014", originalHP: 115, originalTorque: 270, stage1HP: 140, stage1Torque: 330, fuel: "Diesel" },
          { name: "FOCUS 2.0 TDCI 115hp", year: "2011-2014", originalHP: 115, originalTorque: 300, stage1HP: 175, stage1Torque: 400, fuel: "Diesel" },
          { name: "FOCUS 2.0 TDCI 136hp", year: "2011-2014", originalHP: 136, originalTorque: 320, stage1HP: 175, stage1Torque: 400, fuel: "Diesel" },
          { name: "FOCUS 2.0 TDCI 140hp", year: "2011-2014", originalHP: 140, originalTorque: 320, stage1HP: 175, stage1Torque: 400, fuel: "Diesel" },
          { name: "FOCUS 2.0 TDCI 163hp", year: "2011-2014", originalHP: 163, originalTorque: 340, stage1HP: 200, stage1Torque: 415, fuel: "Diesel" },
        ],
      },      
    ],
  },
  // ─── VOLKSWAGEN ───────────────────────────────────────────────
  {
    name: "Volkswagen",
    models: [      
      {
      name: "PASSAT / MAGOTAN (B6 2005-2010)",
        engines: [
          { name: "2.0 TDI 170hp", year: "2005-2010", originalHP: 170, originalTorque: 350, stage1HP: 200, stage1Torque: 420, fuel: "Diésel" },
        ],
      },
      {
      name: "PASSAT / MAGOTAN (B8 2014-2019)",
        engines: [
          { name: "2.0 TDI CR 150hp", year: "2014-2019", originalHP: 150, originalTorque: 340, stage1HP: 190, stage1Torque: 420, fuel: "Diésel" },
          { name: "2.0 TDI CR 190hp", year: "2014-2019", originalHP: 190, originalTorque: 400, stage1HP: 225, stage1Torque: 460, fuel: "Diésel" },
        ],
      },
    ],
  },    
];
