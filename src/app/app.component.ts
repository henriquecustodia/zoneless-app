import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { timer } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  template: ` 
    {{ title() }} 
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = signal("zoneless-app");

  constructor() {
    timer(3000).subscribe(() => {
      this.title.set("new title after 3s");
    });
  }
}
