import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { persona } from 'src/app/model/persona.model'
import { ImageService } from 'src/app/servicio/image.service'
import { PersonaService } from 'src/app/servicio/persona.service'

@Component({
  selector: 'app-editabout',
  templateUrl: './editabout.component.html',
  styleUrls: ['./editabout.component.css']
})
export class EditaboutComponent implements OnInit {
  persona: persona = null

  constructor(private personaS: PersonaService,private activatedRouter:ActivatedRoute,
    private router: Router, public imageS:ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      data => {
        this.persona = data;
        console.log(this.persona)
      }, err => {
        alert(err.error.mensaje)
        this.router.navigate([''])
      }
    )
  }
  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id']
    const name = "perfil_" + id
    this.imageS.uploadImage($event,name)
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img= this.imageS.url
    this.personaS.update(id, this.persona).subscribe(
      data => {
        alert('Educacion actualizada con exito')
        this.router.navigate([''])
        console.log(this.persona)
      },err => {
        alert('No se pudo actualizar la educacion')
      }
    )
  }
}
