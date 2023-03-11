// import { initialApp } from './app.js';
// import { procesA, procesB, procesC } from './home.js';
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const baseVersion = `${year}${month}${day}${hours}${minutes}`;

const { config: { version } } = await import(`./base.js?v=${baseVersion}`);

const { initialApp } = await import(`./app.js?v=${version}`);
const { procesA, procesB, procesC } = await import(`./home.js?v=${version}`);

initialApp();

procesA("parrafo-1");
procesB("parrafo-2");
procesC("parrafo-3");
