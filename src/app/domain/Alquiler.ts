export class Alquiler {
    constructor (public alquilerID: number,
      public  clienteID: number,
       public fechaAlquiler: string,
       public fechaDevolucion: string,
       public valorAlquiler: number,
       public cantidad: number,
       ){
         
    }
}