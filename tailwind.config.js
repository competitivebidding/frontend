/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts}",
  ],
  theme: {
    extend: {
      screens:{
        IPM: "428px", // Iphone Pro MAX
        IXR: "414px", // Iphone XR
        IP: "390px", // Iphone Pro 
        IX: "375px", // Iphone X
        IM: "360px", // Iphone Mini \ Android
        
      },
      fontFamily:{
        Poppins:["Poppins"]
      }
    },
  },
  plugins: [],
}
  