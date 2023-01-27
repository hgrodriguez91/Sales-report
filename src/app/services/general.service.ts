import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private username: string = '';

  private categorias: any []= [
    { id: 1, nombre: 'Automotriz' },
    { id: 2, nombre: 'Ferreteria' },
    { id: 3, nombre: 'Informática y Comunicaciones' }
  ]

  private productos: any [] = [
    { id: 1, nombre: 'Auto deportivo', categoriaId: 1 },
    { id: 2, nombre: 'Vans ', categoriaId: 1 },
    { id: 3, nombre: 'Motocicletas', categoriaId: 1 },
    { id: 4, nombre: 'Juego de Destornillador', categoriaId: 2 },
    { id: 5, nombre: 'Pulidoras', categoriaId: 2 },
    { id: 6, nombre: 'Taladros', categoriaId: 2 },
    { id: 7, nombre: 'Telefono móvil ', categoriaId: 3 },
    { id: 8, nombre: 'MOtherBoard', categoriaId: 3 },
    { id: 8, nombre: 'Laptop" ', categoriaId: 3 },

  ]

  private marcas: any [] = [
    { id: 1, nombre: 'Peugeot', productoId: 1 },
    { id: 2, nombre: 'Audi', productoId: 1 },
    { id: 3, nombre: 'Bucatti', productoId: 1 },
    { id: 4, nombre: 'Chevrolet Suburban', productoId: 2 },
    { id: 5, nombre: 'Chrysler Pacifica', productoId: 2 },
    { id: 6, nombre: 'Dodge Durango', productoId: 2 },
    { id: 7, nombre: ' Honda', productoId: 3 },
    { id: 8, nombre: 'Suzuki', productoId: 3 },
    { id: 9, nombre: 'Ducati', productoId: 3 },
    { id: 10, nombre: 'Stanley', productoId: 4 },
    { id: 11, nombre: 'Wiha', productoId: 4 },
    { id: 12, nombre: 'Klein', productoId: 4 },
    { id: 13, nombre: 'Kinhel', productoId: 5 },
    { id: 14, nombre: 'Makita', productoId: 5 },
    { id: 15, nombre: 'diversey', productoId: 5 },
    { id: 16, nombre: 'Hitachi', productoId: 6 },
    { id: 17, nombre: 'RONIX', productoId: 6},
    { id: 18, nombre: 'DEWALT', productoId: 6},
    { id: 19, nombre: 'Samsung Galaxy A32', productoId: 7 },
    { id: 20, nombre: 'Iphone 13', productoId: 7 },
    { id: 21, nombre: 'Nokia', productoId: 7},
    { id: 22, nombre: 'Asrock', productoId: 8},
    { id: 23, nombre: 'Asus', productoId: 8 },
    { id: 24, nombre: 'Pegatron', productoId: 8 },
    { id: 25, nombre: 'Dell', productoId: 9 },
    { id: 26, nombre: 'Toshiba', productoId: 9 },
    { id: 27, nombre: 'Hp', productoId: 9 },
  ]

  
  constructor() { }

  getUsername() {
    return this.username;
  }

  setUsername(username: string) {
    this.username = username;
  }

  getCategorias(){
    return this.categorias;
  }

  getProductByCategoryId(id:number){
    return this.productos.filter( (producto)=> producto.categoriaId == id);
  }

  getMarcaByProductId(id:number){
    return this.marcas.filter( (marca)=> marca.productoId == id);
  }

  generarVentasAleatorias(meses: string[]){
    let ventas: any[] = [];
    meses.forEach( (mes)=>{
      ventas.push({mes:mes, venta:Math.floor(Math.random() * 1000)});
    });
    return ventas;    
  }
}
