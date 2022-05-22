import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./${rootFolder}`;
const srcFolder = "./src";

export let path = {
	build: {
		images: `${buildFolder}/assets/img/`,
		js: `${buildFolder}/scripts/`,
		css: `${buildFolder}/styles/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/assets/fonts/`,
		svgicons: `${buildFolder}/assets/svg/`,
	},
	src: {
		images: `${srcFolder}/assets/img/**/*.{png,jpg,webp,gif,jpeg}`,
		js: `${srcFolder}/scripts/script.js`,
		scss: `${srcFolder}/styles/style.scss`,
		html: `${srcFolder}/*.html`,
		svgicons: `${srcFolder}/assets/svg/*.svg`,
	},
	watch: {
		images: `${srcFolder}/**/*.{png,jpg,webp,gif,jpeg,svg}`,
		js: `${srcFolder}/**/*.js`,
		scss: `${srcFolder}/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		svgicons: `${srcFolder}/**/*.svg`,
	},
	clean: buildFolder,
	srcFolder: srcFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
};
