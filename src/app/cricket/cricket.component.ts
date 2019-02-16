import { Component } from "@angular/core";

@Component({
  selector: "app-cricket",
  templateUrl: "./cricket.component.html",
  styleUrls: ["./cricket.component.css"]
})
export class CricketComponent {
  public playersCount: Array<number> = new Array(0);
  public endOfGame = false;

  public endOfGameFunc = value => (this.endOfGame = value);

  constructor() {
    this.playersCount = new Array(+localStorage.getItem("playersCount"));
  }
  enterPlayers(playersCount: string) {
    this.playersCount = new Array(+playersCount);
    localStorage.setItem("isPlaying", "true");
    localStorage.setItem("playersCount", playersCount);
  }

  resetTheGame() {
    localStorage.clear();
    this.endOfGame = false;
    this.playersCount = new Array(0);
  }
}
