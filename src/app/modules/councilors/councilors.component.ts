import { Component } from '@angular/core';

@Component({
  selector: 'app-councilors',
  templateUrl: './councilors.component.html',
  styleUrls: ['./councilors.component.scss'],
})

export class CouncilorsComponent {

  counterConfirm: number = 0;
  counterDecline: number = 0;
  counterNP: number = 15;

  participate: boolean = false;

  confirmButton: boolean = false;
  declineButton: boolean = false;

  confirm() {
    if(this.participate === false) {
      this.counterConfirm++;
      this.counterNP--;
      this.participate = true;
      this.confirmButton = true;

      this.saveVotes(this.counterConfirm, this.counterDecline, this.counterNP);
    }else {
      this.counterDecline--;
      this.counterConfirm++;
      this.confirmButton = true;
      this.declineButton = false;

      this.saveVotes(this.counterConfirm, this.counterDecline, this.counterNP);
    }
    // this._resultsS.actualizarContador(1);
  }

  decline() {
    if(this.participate === false) {
      this.counterDecline++;
      this.counterNP--;
      this.participate = true;
      this.declineButton = true;

      this.saveVotes(this.counterConfirm, this.counterDecline, this.counterNP);
    }else {
      this.counterConfirm--;
      this.counterDecline++;
      this.declineButton = true;
      this.confirmButton = false;

      this.saveVotes(this.counterConfirm, this.counterDecline, this.counterNP);
    }
    // this._resultsS.actualizarContador(-1);
  }

  saveVotes(confirm: number, decline: number, np: number): void{
    let votes = {
      confirm,
      decline,
      np
    }

    localStorage.setItem("votes", JSON.stringify(votes));

    if(confirm > 0) localStorage.setItem("statusVote", "1");

    if(decline > 0) localStorage.setItem("statusVote", "0");
  }
}
