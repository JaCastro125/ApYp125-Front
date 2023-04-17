import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Skill } from 'src/app/model/skill'
import { SkillService } from 'src/app/servicio/skill.service'

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null

  constructor(private skillS: SkillService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.skillS.detail(id).subscribe(
      data => {
        this.skill = data
      }, err => {
        alert('No se pudo cargar la skill')
        this.router.navigate([''])
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.skillS.update(id, this.skill).subscribe(
      data => {
        alert('Skill actualizada con exito')
        this.router.navigate([''])
      }, err => {
        alert('No se pudo actualizar la skill')
        this.router.navigate([''])
      }
    )
  }
}
