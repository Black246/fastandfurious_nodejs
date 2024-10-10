class AssembleVehicleRequest {
    constructor(marca, color, chasisid, motorid, cojineraid, fechaensamblaje, numeroensamblaje) {
        this.marca = marca; // 'marca' en minúscula
        this.color = color; // 'color' en minúscula
        this.chasisid = chasisid; // 'chasisId' en minúscula
        this.motorid = motorid; // 'motorId' en minúscula
        this.cojineraid = cojineraid; // 'cojineraId' en minúscula
        this.fechaensamblaje = fechaensamblaje; // 'fechaEnsamblaje' en minúscula
        this.numeroensamblaje = numeroensamblaje; // 'numeroEnsamblaje' en minúscula
    }
}

module.exports = AssembleVehicleRequest;
