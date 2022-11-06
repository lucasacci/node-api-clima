const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() =>{

    let opt;
    const busquedas = new Busquedas();

    
    
    do{

       opt = await inquirerMenu();

       switch(opt){

            case 1:
                //mostrar mensaje
                const lugar = await leerInput('Ingrese la ciudad: ');
                console.log(lugar);
                //buscar ciudad

                // seleccionar ciudad exacta

                //clima

                //mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:',);
                console.log('Lat:',);
                console.log('Temperatura:',);
                console.log('Max:',);
                console.log('Min:',);
            break;
       }

       if(opt !== 0) await pausa();

    }while( opt !== 0 );

}

main();