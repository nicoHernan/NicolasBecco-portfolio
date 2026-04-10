import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from "@angular/material/divider";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ImageDialogComponent } from "../image-dialog/image-dialog.component";
import { AboutComponent } from "../about/about.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ProjectComponent } from "../project/project.component";
import { ContactComponent } from "../contact/contact.component";

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
    MatToolbarModule,
    AboutComponent,
    ExperienceComponent,
    ProjectComponent,
    ContactComponent
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})

export class SidenavComponent {
  private dialog = inject(MatDialog) ;

  openProfileImage(): void {
    this.dialog.open(ImageDialogComponent, {
      data: { url: 'image/Foto_Becco_Nicolas_Desarrollador_Software.png' },
      panelClass: 'custom-dialog-container',
      maxWidth: '90vw',
      maxHeight: '95vh'
    });
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  goToSocial(url: string): void{
    window.open(url, '_blank') ;
  }
}