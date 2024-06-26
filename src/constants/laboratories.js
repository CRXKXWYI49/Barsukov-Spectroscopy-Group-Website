import { ourlab1, ourlab2, ourlab3, ourlab4 } from "../assets"

const methodologies = [
  { 
    title: "Computational & Theory", 
    description: "Amet placeat expedita et sed dolorem. Est voluptatum similique rerum. Fuga est ab est voluptas qui.Et omnis ut dolores eveniet"
  },
  { 
    title: "Nano-Device Fabrication", 
    description: "Amet placeat expedita et sed dolorem. Est voluptatum similique rerum. Fuga est ab est voluptas qui.Et omnis ut dolores eveniet"
  },
  { 
    title: "Laboratory Infrastructure", 
    description: "Amet placeat expedita et sed dolorem. Est voluptatum similique rerum. Fuga est ab est voluptas qui.Et omnis ut dolores eveniet"
  },
  { 
    title: "Support", 
    description: "Amet placeat expedita et sed dolorem. Est voluptatum similique rerum. Fuga est ab est voluptas qui.Et omnis ut dolores eveniet"
  },
]



const labModules = [
  { 
    title: "Electric Transport", 
    description: "Nam repudiandae repudiandae voluptatem consequatur labore a hic veniam."
  },
  { 
    title: "Microwave Spectroscopy", 
    description: "Nam repudiandae repudiandae voluptatem consequatur labore a hic veniam."
  },
  { 
    title: "Thz Spectroscopy", 
    description: "Nam repudiandae repudiandae voluptatem consequatur labore a hic veniam."
  },
  { 
    title: "Optical Spectroscopy", 
    description: "Nam repudiandae repudiandae voluptatem consequatur labore a hic veniam."
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



export { methodologies, 
         labModules, 
         stations }