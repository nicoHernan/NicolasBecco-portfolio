import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from "@angular/material/divider";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ImageDialogComponent } from "../image-dialog/image-dialog.component";
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectComponent } from "../project/project.component";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs";

@Component({
  selector: 'app-sidenav',
  standalone: true, 
  imports: [
    CommonModule,
    MatSidenavModule, 
    MatListModule, 
    MatButtonModule, 
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    AboutComponent,
    ExperienceComponent,
    ProjectComponent
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})

export class SidenavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private dialog = inject(MatDialog) ;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  openProfileImage(): void {
    this.dialog.open(ImageDialogComponent, {
      data: { url: 'image/Foto_Becco_Nicolas_Desarrollador_Software.png' },
      panelClass: 'custom-dialog-container',
      maxWidth: '95vw',
      maxHeight: '95vh'
    });
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  }

  goToSocial(url: string): void{
    window.open(url, '_blank') ;
  }
}