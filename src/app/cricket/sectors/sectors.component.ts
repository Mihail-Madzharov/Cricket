import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sectors",
  templateUrl: "./sectors.component.html",
  styleUrls: ["./sectors.component.css"]
})
export class SectorsComponent {
  @Input()
  public playerName: string;
}
