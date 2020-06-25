import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";
import { Materia } from "../models/materia";

@Injectable({
  providedIn: "root"
})
export class MateriasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = "https://pavii.ddns.net/api/Materias";
   }
  post(obj:Materia) {
    return this.httpClient.post(this.resourceUrl, obj);
  }
  get() {
    return this.httpClient.get(this.resourceUrl);
  }
}