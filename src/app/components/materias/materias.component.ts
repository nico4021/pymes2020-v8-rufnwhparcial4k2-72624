import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MateriasService } from "../../services/materias.service";
import { Materia } from "../../models/materia";

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  SinBusquedasRealizadas:boolean = true;
  ListaMaterias: Materia[] = [];
  AccionABMC = "L";
  constructor(
    public formBuilder: FormBuilder,
    private materiasService: MateriasService,
  ) {

   }
  getAllMaterias(){
    this.SinBusquedasRealizadas = false;
    this.materiasService
      .get()
      .subscribe((res: any) => {
        this.ListaMaterias = res;
      });
  }
  ngOnInit() {
    this.getAllMaterias();
  }

}