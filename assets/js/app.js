const version = '?v=1.0.3';

// import { config } from './base.js';

const date = new Date();
const year = date.getFullYear(); 
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const baseVersion = `${year}${month}${day}${hours}${minutes}`;

const { config } = await import(`./base.js?v=${baseVersion}`);

export const app = true;

export const initialApp = ()=>{    

    const { base, version } = config;

    if(!app){
        console.log(`se detuvo el proceso de ${base} con la version ${version}`);
        return false;        
    }

    console.log(`iniciando el proceso de ${base} con la version ${version}`);

}
