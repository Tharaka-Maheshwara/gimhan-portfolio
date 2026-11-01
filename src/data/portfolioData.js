import sheetMetalCover from "../assets/projects-cover-images/category-sheet-metal.png";
import industrialDesignCover from "../assets/projects-cover-images/category-industrial-design.png";
import reverseEngineeringCover from "../assets/projects-cover-images/category-reverse-engineering.png";
import technicalDrawingsCover from "../assets/projects-cover-images/category-technical-drawings.png";

export const projects = [
  {
    id: "3d-sheet-metal",
    number: "01",
    title: "3D Modelling & Sheet Metal Design",
    description:
      "3D part modelling, sheet-metal components, enclosures, and flat-pattern drawings.",
    cover: sheetMetalCover,
    items: [
      {
        title: "Off-Road Bumper & Winch Cradle",
        description:
          "Designed a mild-steel bumper shell and winch cradle, with flat-pattern layouts prepared for CNC cutting and press-brake forming.",
      },
      {
        title: "Multi-Material Mobile Phone Stand",
        description:
          "Developed a sheet-metal phone stand concept and reviewed its bend geometry for different material options.",
      },
      {
        title: "Miniature RC Toy Jeep Bumper",
        description:
          "Designed a custom stainless-steel bumper around the RC jeep chassis, considering fitment and laser-cut fabrication.",
      },
    ],
  },
  {
    id: "product-industrial-design",
    number: "02",
    title: "Product & Industrial Design",
    description:
      "Product concepts, component design, assemblies, and industrial design work.",
    cover: industrialDesignCover,
    items: [
      {
        title: "Mechatronic Smart Door Lock",
        description:
          "Developed a smart-lock concept with a sliding mechanism, aligned guides, and space for a sensor-triggered solenoid.",
      },
      {
        title: "Flameproof Industrial Electrical Socket",
        description:
          "Designed an industrial socket concept with consistent wall thickness and draft considerations for casting.",
      },
    ],
  },
  {
    id: "reverse-engineering",
    number: "03",
    title: "Reverse Engineering & Prototyping",
    description:
      "Existing components digitised into editable CAD models for design development and prototyping.",
    cover: reverseEngineeringCover,
    items: [
      {
        title: "Manual Door Lock Reverse Engineering",
        description:
          "Digitised an existing door-lock mechanism into parametric CAD, checking mounting-hole positions and sliding movement.",
      },
    ],
  },
  {
    id: "2d-technical-drawings",
    number: "04",
    title: "2D Technical Drawings",
    description:
      "Dimensioned manufacturing drawings, flat patterns, and CNC-ready drawing outputs.",
    cover: technicalDrawingsCover,
    items: [
      {
        title: "Off-Road Bumper Flat Pattern",
        description:
          "Prepared a 1:1 flat-pattern drawing for CNC cutting, including the required layout for forming the bumper components.",
      },
      {
        title: "Manual Door Lock Manufacturing Drawings",
        description:
          "Created manufacturing drawing outputs for the reverse-engineered door-lock components.",
      },
    ],
  },
];