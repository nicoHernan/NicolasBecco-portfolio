import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { COMPONENT_MESSAGE } from "../../util/message";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent {
  readonly STRINGS = COMPONENT_MESSAGE ;
}