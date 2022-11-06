

class Busquedas {

    historial = ['Tucuman','Madrid'];

    constructor() {

    }

    async ciudad(lugar = ''){

        // peticion http
        console.log(lugar);

        return []; //retornar los lugares que coincidan con el lugar que escribio el usuario
    }

}

module.exports = Busquedas;