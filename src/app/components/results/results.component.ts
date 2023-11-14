import { Component } from '@angular/core';

import { ResultsService } from '../../shared/services/results.service';

@Component({
  standalone: true,
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})

export class ResultsComponent {
  confirmados: number = 0;

  constructor(private _resultsS: ResultsService) {}

  ngOnInit() {
    this._resultsS.contador$.subscribe((valor) => this.actualizarContador(valor));
  }

  private actualizarContador(valor: number) {
    if (valor > 0) {
      this.confirmados += valor;
    }

    // Puedes añadir más lógica para otros casos según sea necesario
  }
}
