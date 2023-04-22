import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Proyecto } from 'src/app/model/proyecto'
import { ImageService } from 'src/app/servicio/image.service'
import { ProyectoService } from 'src/app/servicio/proyecto.service'

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string = ''
  descripcionP: string = ''
  urlP: string = ''

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void { }

  onCreate() {
    const proy = new Proyecto(this.nombreP, this.descripcionP, this.urlP)
    this.proyectoS.save(proy).subscribe(
      data => {
        alert('Proyecto creado con exito')
        console.log(proy)
        this.router.navigate([''])
      }, err => {
        alert("fallo al crear el proyecto")
        this.router.navigate([''])
      }
    )
  }
}
