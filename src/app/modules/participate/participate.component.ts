import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.scss'],
})

export class ParticipateComponent implements OnInit {

  counterConfirm: number = 0;
  counterDecline: number = 0;
  counterNP: number = 15;

  confirmVote: boolean = false;
  declineVote: boolean = false;

  ngOnInit(): void {
    setInterval(() => {
      let { confirm, decline, np } = JSON.parse(localStorage.getItem("votes") as string);
      let statusVote = localStorage.getItem("statusVote");

      this.counterConfirm = confirm;
      this.counterDecline = decline;
      this.counterNP = np;

      if(statusVote === "1") {
        this.confirmVote = true;
        this.declineVote = false;
      } 
      if(statusVote === "0") {
        this.declineVote = true;
        this.confirmVote = false;
      } 
    }, 5000);
  }
}
