import { ourlab1, ourlab2, ourlab3, ourlab4 } from "../assets"

const methodologies = [
  { 
    title: "Computational & Theory", 
    description: "Amet placeat expedita et sed dolorem. Est voluptatum similique rerum. Fuga est ab est voluptas qui.Et omnis ut dolores eveniet",
    images: [ourlab3],
  },
  { 
    title: "Nano-Device Fabrication", 
    description: "Amet placeat expedita et sed dolorem. Est voluptatum similique rerum. Fuga est ab est voluptas qui.Et omnis ut dolores eveniet",
    images: [ourlab3],
  },
  { 
    title: "Laboratory Infrastructure", 
    description: "Amet placeat expedita et sed dolorem. Est voluptatum similique rerum. Fuga est ab est voluptas qui.Et omnis ut dolores eveniet",
    images: [ourlab3],
  },
  { 
    title: "Support", 
    description: "Amet placeat expedita et sed dolorem. Est voluptatum similique rerum. Fuga est ab est voluptas qui.Et omnis ut dolores eveniet",
    images: [ourlab3],
  },
]



const labModules = [
  { 
    title: "Electric Transport", 
    description: "Nam repudiandae repudiandae voluptatem consequatur labore a hic veniam.",
    images: [ourlab1],
  },
  { 
    title: "Microwave Spectroscopy", 
    description: "Nam repudiandae repudiandae voluptatem consequatur labore a hic veniam.",
    images: [ourlab1],
  },
  { 
    title: "Thz Spectroscopy", 
    description: "Nam repudiandae repudiandae voluptatem consequatur labore a hic veniam.",
    images: [ourlab3],
  },
  { 
    title: "Optical Spectroscopy", 
    description: "Nam repudiandae repudiandae voluptatem consequatur labore a hic veniam.",
    images: [ourlab3],
  },
]

const stations = [
  {
    title: "Q-Station",
    description: `Nam repudiandae repudiandae voluptatem consequatur labore a hic veniam. 
                  Totam culpa est dolorem facilis officiis et et aperiam. Illum suscipit consectetur id 
                  excepturi magni quod. Rem ipsum perspiciatis vel deserunt ad sint.`,
    images: [ourlab1],
  },
  {
    title: "P-Station",
    description: `Nam repudiandae repudiandae voluptatem consequatur labore a hic veniam. 
                  Totam culpa est dolorem facilis officiis et et aperiam. Illum suscipit consectetur id 
                  excepturi magni quod. Rem ipsum perspiciatis vel deserunt ad sint.`,
    images: [ourlab3],
  },
  {
    title: "M-Station",
    description: `Nam repudiandae repudiandae voluptatem consequatur labore a hic veniam. 
                  Totam culpa est dolorem facilis officiis et et aperiam. Illum suscipit consectetur id 
                  excepturi magni quod. Rem ipsum perspiciatis vel deserunt ad sint.`,
    images: [ourlab4, ourlab2],
  }

]


const experimentStationDescription = "All experiment stations were built to be modular..."



export { methodologies, 
         labModules, 
         stations,
        experimentStationDescription }