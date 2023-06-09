import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Experiencia } from 'src/app/model/experiencia'
import { SExperienciaService } from 'src/app/servicio/s-experiencia.service'

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = ''
  descripcionE: string = ''
  periodoE: string = ''
  puestoE: string = ''
  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void { }

  onCreate(): void {
    const exp = new Experiencia(this.nombreE, this.descripcionE, this.periodoE, this.puestoE)
    this.sExperiencia.save(exp).subscribe(
      data => {
        alert('Experiencia creada con exito')
        this.router.navigate([''])
      }, err => {
        alert("fallo al crear la experiencia")
        this.router.navigate([''])
      }
    )
  }
}
