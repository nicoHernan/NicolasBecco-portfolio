import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ProjectService } from "../../service/project.service";
import { ImageDialogComponent } from "../image-dialog/image-dialog.component";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { PROJECT } from "../../util/project-data";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent implements OnInit {
  private projectService = inject(ProjectService) ;
  private dialog = inject(MatDialog) ;

  currentProject:any[] = [] ;

  ngOnInit(): void {
    this.currentProject = this.projectService.getProject() ;
  }

  openProjectImage(imageUrl: string): void {
      this.dialog.open(ImageDialogComponent, {
        data: { url: imageUrl},
        panelClass: 'custom-dialog-container',
        maxWidth: '95vw',
        maxHeight: '95vh'
      });
    }
}