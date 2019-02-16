import { Component } from "@angular/core";

@Component({
  selector: "app-cricket",
  templateUrl: "./cricket.component.html",
  styleUrls: ["./cricket.component.css"]
})
export class CricketComponent {
  public playersCount: Array<number> = new Array(3);
  public isPlaying = false;
  public endOfGame = false;

  public endOfGameFunc = value => (this.endOfGame = value);

  enterPlayers(playersCount: string) {
    this.playersCount = new Array(+playersCount);
    this.isPlaying = true;
  }

  resetTheGame() {
    localStorage.clear();
    this.endOfGame = false;
    this.isPlaying = false;
  }
}
