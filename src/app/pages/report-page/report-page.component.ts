import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  items: MenuItem[] = [];

  public username: string = "Username";
  public categorias: any = [];
  public productos: any = [];
  public marcas: any = [];

  public selectedCategory: any;
  public selectedProduct: any;
  public selectedMarca: any;
  public months: any[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  basicData: any;
  basicOptions: any;

  constructor(private generalService: GeneralService,
    private router: Router) { }

  ngOnInit(): void {
    this.items = [{
      label: 'Logout',
      icon: 'pi pi-fw pi-power-off',
      command: () => {
        this.router.navigateByUrl('login');
      }
    }
    ];
    this.username = this.generalService.getUsername();
    if (!this.username) {
      this.router.navigateByUrl('login');
    }
    this.categorias = this.generalService.getCategorias();
    this.vaciarGrafico()
  }

  getProductos() {
    this.vaciarGrafico()
    this.marcas = [];
    this.productos = this.generalService.getProductByCategoryId(this.selectedCategory.id);
  }

  getMarcas() {
    this.vaciarGrafico();
    this.marcas = this.generalService.getMarcaByProductId(this.selectedProduct.id)
  }

  getVentas() {
    let ventas = this.generalService.generarVentasAleatorias(this.months);
    let labels: any = [];
    let data: any = [];
    ventas.forEach((venta) => {
      labels.push(venta.mes);
      data.push(venta.venta);
    })
    this.basicData = {
      labels: labels,
      datasets: [
        {
          label: 'Ventas',
          backgroundColor: '#42A5F5',
          data: data
        },
      ]
    };
  }

  vaciarGrafico() {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Ventas',
          backgroundColor: '#42A5F5',
          data: [0, 0, 0, 0, 0, 0, 0]
        },
      ]
    };
  }
}
