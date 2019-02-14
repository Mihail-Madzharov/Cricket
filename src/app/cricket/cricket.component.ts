import { Component, OnInit, ViewChild, Input } from "@angular/core";

@Component({
  selector: "app-cricket",
  templateUrl: "./cricket.component.html",
  styleUrls: ["./cricket.component.css"]
})
export class CricketComponent {
  public playersNames = [];
  public isPlaying = false;
  @ViewChild("input")
  input: any;
  enterPlayers(playerName: string) {
    this.input.nativeElement.value = "";
    this.playersNames.push(playerName);
  }

  startTheGame() {
    this.isPlaying = true;
  }
}
