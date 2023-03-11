import { config } from './base.js';

export const app = true;

export const initialApp = ()=>{    

    const { base, version } = config;

    if(!app){
        console.log(`se detuvo el proceso de ${base} con la version ${version}`);
        return false;        
    }

    console.log(`iniciando el proceso de ${base} con la version ${version}`);

}
