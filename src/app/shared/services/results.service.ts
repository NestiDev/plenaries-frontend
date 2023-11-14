// participacion.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ResultsService {
  private contadorSubject = new Subject<number>();

  contador$ = this.contadorSubject.asObservable();

  actualizarContador(valor: number) {
    console.log(valor)
    this.contadorSubject.next(valor);
  }
}
