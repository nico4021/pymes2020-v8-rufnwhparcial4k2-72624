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
  FormFiltro: FormGroup;
  FormReg: FormGroup;
  submitted = false;
  constructor(
    public formBuilder: FormBuilder,
    private materiasService: MateriasService,
  ) { }


  getAllMaterias(){
    this.SinBusquedasRealizadas = false;
    this.materiasService
      .get()
      .subscribe((res: any) => {
        this.ListaMaterias = res;
      });
  }
  ngOnInit() {
    this.FormReg = this.formBuilder.group({
      IdMateria: [0],
      MateriaAnio: [null],
      MateriaNombre: [""],
    });
    this.getAllMaterias();
  } 
  Grabar() {
    this.AccionABMC = "L";
    const itemCopy = { ...this.FormReg.value };
     if (this.FormReg.invalid) {
      return;
    }
      this.materiasService.post(itemCopy).subscribe((res: any) => {
        this.Volver();
      });
    }
    Volver(){
      this.AccionABMC="L"
    }
    Agregar(){
      this.AccionABMC="A"
    }
}