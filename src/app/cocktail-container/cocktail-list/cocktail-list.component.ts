import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Cocktail } from "../../interfaces/cocktail.interface";

@Component({
  selector: "app-cocktail-list",
  templateUrl: "./cocktail-list.component.html",
  styleUrls: ["./cocktail-list.component.scss"]
})
export class CocktailListComponent implements OnInit {
  @Input() public cocktails: Cocktail[];
  @Output() private pickEvent: EventEmitter<number> = new EventEmitter<
    number
  >();

  constructor() {}

  ngOnInit(): void {}

  public selectCocktail(index: number): void {
    this.pickEvent.emit(index);
  }
}
