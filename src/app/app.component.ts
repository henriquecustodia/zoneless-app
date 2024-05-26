import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { timer } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: ` {{ title() }} `,
  styles: [],
})
export class AppComponent {
  title = signal("zoneless-app");

  constructor() {
    timer(3000).subscribe(() => {
      this.title.set("new title");
    });
  }
}
