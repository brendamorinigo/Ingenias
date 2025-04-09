class Persona{
    constructor(name,dni,edad){
    this.name=name;
    this.dni=dni;
    this.edad=edad;
    this.numPac=Math.floor(Math.random() * 999+ dni);
}
}
module.exports=Persona;

