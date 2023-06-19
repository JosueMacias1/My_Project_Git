import { Component } from "@angular/core";
import { Route } from "@angular/router";

@Component({
  selector: "app-prueba",
  templateUrl: "./prueba.component.html",
  styleUrls: ["./prueba.component.css"]
})
export class PruebaComponent {
  listaProductos: string[] = ["Problema Tecnico", "Error", "Ayuda"];
  listaPedidos: any[] = [];
  modoEdicion = false;
  pedidoEdicionIndex: number | null = null;

  pedido: any = {
    Nombre: "",
    apellido: "",
    telefono: "",
    dispositivo: "",
    Asunto: "",
    cantidad: ""
  };

  

  guardarPedido() {
    if (this.modoEdicion && this.pedidoEdicionIndex !== null) {
      this.listaPedidos[this.pedidoEdicionIndex] = { ...this.pedido };
      this.modoEdicion = false;
      this.pedidoEdicionIndex = null;
    } else {
      this.listaPedidos.push({ ...this.pedido });
    }
    this.limpiarDatos();
  }

  eliminarPedido(index: number) {
    this.listaPedidos.splice(index, 1);
  }

  editarPedido(pedido: any) {
    this.modoEdicion = true;
    this.pedidoEdicionIndex = this.listaPedidos.indexOf(pedido);
    this.pedido = { ...pedido };
  }

  limpiarDatos() {
    this.pedido = {
      nombre: "",
      apellido: "",
      telefono: "",
      dispositivo: "",
      asunto: "",
      cantidad: 0
    };
  }
}