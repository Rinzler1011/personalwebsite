import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "Joshua Callary",
	prologue: "If I had a world of my own, everything would be nonsense. Nothing would be what it is, because everything would be what it isn’t.",
	author: {
		name: "Joshua Callary",
		email: "joshcallary10@gmail.com",
		link: "https://joshuacallary.com"
	},
	description: "Personal Website",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2025"
	},
	i18n: {
		locales: ["en", "zh-cn", "ja", "ru"],
		defaultLocale: "en"
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
