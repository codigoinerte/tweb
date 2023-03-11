// import { initialApp } from './app.js';
// import { procesA, procesB, procesC } from './home.js';
const { config: { version } } = await import(`./base.js?v=${Date.now()}`);

const { initialApp } = await import(`./app.js?v=${version}`);
const { procesA, procesB, procesC } = await import(`./home.js?v=${version}`);

initialApp();

procesA("parrafo-1");
procesB("parrafo-2");
procesC("parrafo-3");
