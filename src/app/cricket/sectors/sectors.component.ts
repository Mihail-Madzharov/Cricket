import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-sectors",
  templateUrl: "./sectors.component.html",
  styleUrls: ["./sectors.component.css"]
})
export class SectorsComponent {
  sectors = ["15_", "16_", "17_", "18_", "19_", "20_", "bullsEye_"];

  public playerScore = 0;

  @ViewChild("score")
  inputScore: ElementRef;

  @Input()
  public playerId: string;

  @Input()
  endOfGame: Function;

  public getElementValue(scoreId: string): string {
    return localStorage.getItem(this.playerId + scoreId);
  }

  public canReset(): boolean {
    const result: boolean[] = [];
    for (let index = 1; index <= 3; index++) {
      result.push(
        this.sectors.every(value =>
          Boolean(localStorage.getItem(this.playerId + value + index))
        )
      );
    }
    return result.every(e => e);
  }

  public setScore(scoreId: string, inputValue: boolean) {
    if (!inputValue) {
      localStorage.removeItem(this.playerId + scoreId);
    } else {
      localStorage.setItem(this.playerId + scoreId, inputValue.toString());
    }

    this.endOfGame(this.canReset());
  }

  public addScore(score: string) {
    this.playerScore += +score;
    this.inputScore.nativeElement.value = null;
  }
}
