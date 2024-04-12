import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'project-ui': "url('https://firebasestorage.googleapis.com/v0/b/gabrielferreira-ee0cd.appspot.com/o/project-ui-min.png?alt=media&token=8a9f49ec-493a-428e-8199-f9d67ef48915')",
      }
    }
  },
  plugins: [],
};

export default config;
