import sheetMetalCover from "../assets/projects-cover-images/category-sheet-metal.png";
import industrialDesignCover from "../assets/projects-cover-images/category-industrial-design.png";
import reverseEngineeringCover from "../assets/projects-cover-images/category-reverse-engineering.png";
import technicalDrawingsCover from "../assets/projects-cover-images/category-technical-drawings.png";

// src/assets/project-images/ යටතේ ඇති project images import කරයි.
const projectImageModules = import.meta.glob(
  "../assets/project-images/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

const projectDetails = {
  "1.1-off-road-bumper-winch-cradle": {
    title: "Off-Road Bumper & Winch Cradle",
    description:
      "Engineered a multi-body sheet-metal assembly using a 3 mm MS outer shell and 6 mm MS cradle. Generated 1:1 CNC-ready flat-pattern DXFs optimized for press-brake forming.",
  },
  "1.2-multi-material-mobile-phone-stand": {
    title: "Multi-Material Mobile Phone Stand",
    description:
      "Designed a self-locating desktop phone stand using sheet-metal bending tools. Evaluated springback and structural feasibility across electro-galvanized steel and aluminium prototypes.",
  },
  "1.3-miniature-rc-toy-jeep-bumper": {
    title: "Miniature RC Toy Jeep Bumper",
    description:
      "Reverse-engineered and customized a 1.5 mm stainless-steel bumper, matching the scale chassis mounting holes for laser cutting.",
  },
  "2.1-mechatronic-smart-door-lock": {
    title: "Mechatronic Smart Door Lock",
    description:
      "Developed an electromechanical locking assembly with sliding tolerances, linear-guide alignment, and sensor-triggered solenoid actuation.",
  },
  "2.2-flameproof-industrial-electrical-socket": {
    title: "Flameproof Industrial Electrical Socket",
    description:
      "Designed a hazardous-environment enclosure with uniform wall thickness and a 1-degree draft angle for casting.",
  },
  "3.1-reverse-engineered-manual-door-lock": {
    title: "Reverse-Engineered Manual Door Lock",
    description:
      "Digitized legacy hardware into a parametric CAD assembly. Mapped hole-pitch coordinates and sliding-throw limits for accurate component replication.",
  },
};

function getProjectTitle(folderName) {
  const title = folderName
    .replace(/^\d+\.\d+-/, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return title || folderName;
}

function getImagesForProject(categoryFolder, projectFolder) {
  return Object.entries(projectImageModules)
    .filter(([path]) => {
      const pathParts = path.split("/");
      return (
        pathParts.at(-3) === categoryFolder &&
        pathParts.at(-2) === projectFolder
      );
    })
    .sort(([pathA], [pathB]) =>
      pathA.localeCompare(pathB, undefined, { numeric: true })
    )
    .map(([path, src], index) => ({
      src,
      alt: `${getProjectTitle(projectFolder)} — Figure ${String(
        index + 1
      ).padStart(2, "0")}`,
    }));
}

function getProjectsInCategory(categoryFolder) {
  const projectFolders = [
    ...new Set(
      Object.keys(projectImageModules)
        .filter((path) => path.split("/").at(-3) === categoryFolder)
        .map((path) => path.split("/").at(-2))
    ),
  ].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return projectFolders.map((folder) => {
    const subNumber = folder.match(/^\d+\.\d+/)?.[0] ?? "";
    const details = projectDetails[folder];

    return {
      folder,
      subNumber,
      title: details?.title ?? getProjectTitle(folder),
      description:
        details?.description ??
        "Add this project's description in portfolioData.js.",
      images: getImagesForProject(categoryFolder, folder),
    };
  });
}

const categories = [
  {
    id: "category-1",
    slug: "3d-modeling-sheet-metal",
    number: "1",
    folder: "01-3d-modeling-sheet-metal",
    title: "3D Modeling & Sheet Metal Design",
    description:
      "3D modeling, sheet-metal assemblies, components, and flat-pattern work.",
    cover: sheetMetalCover,
  },
  {
    id: "category-2",
    slug: "product-industrial-design",
    number: "2",
    folder: "02-product-industrial-design",
    title: "Product & Industrial Design Projects",
    description:
      "Product concepts, mechanical assemblies, and industrial design work.",
    cover: industrialDesignCover,
  },
  {
    id: "category-3",
    slug: "reverse-engineering-prototyping",
    number: "3",
    folder: "03-reverse-engineering-prototyping",
    title: "Reverse Engineering & Prototyping",
    description:
      "Existing hardware converted into parametric CAD for accurate reproduction.",
    cover: reverseEngineeringCover,
  },
  {
    id: "category-4",
    slug: "2d-technical-drawings",
    number: "4",
    folder: "04-2d-technical-drawings",
    title: "2D Technical Drawings",
    description: "2D technical drawing projects.",
    cover: technicalDrawingsCover,
  },
];

export const projects = categories.map((category) => ({
  ...category,
  projects: getProjectsInCategory(category.folder),
}));