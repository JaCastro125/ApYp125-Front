import { Component, OnInit } from '@angular/core'
import { Experiencia } from 'src/app/model/experiencia'
import { SExperienciaService } from 'src/app/servicio/s-experiencia.service'
import { TokenService } from 'src/app/servicio/token.service'

@Component({
  selector: 'app-experencia',
  templateUrl: './experencia.component.html',
  styleUrls: ['./experencia.component.css']
})
export class ExperenciaComponent implements OnInit {
  exp: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false
  ngOnInit(): void {
    this.cargarExperiencia()
    if (this.tokenService.getToken()) {
      this.isLogged = true
    }
    else {
      this.isLogged = false
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(
      data => {
        this.exp = data
        console.log(this.exp)
      })
  }
  delete(id?: number): void {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          console.log('No se pudo borra la experiencia')
        }
      )
    }
  }
}
