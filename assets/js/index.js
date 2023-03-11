// import { initialApp } from './app.js';
// import { procesA, procesB, procesC } from './home.js';

const version = '?v=1.0.3';

const { initialApp } = await import(`./app.js${version}`);
const { procesA, procesB, procesC } = await import(`./home.js${version}`);

initialApp();

procesA("parrafo-1");
procesB("parrafo-2");
procesC("parrafo-3");
