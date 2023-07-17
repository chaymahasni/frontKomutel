import { Component, OnInit } from '@angular/core';
import {  MessageService } from 'primeng/api';
import { Tutorial } from 'src/app/api/tutorial';
import { Type } from 'src/app/api/type';
import { TutorialService } from 'src/app/service/tutorial.service';
import { TypeService } from 'src/app/service/type.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  tutorialDialog: boolean;
  deleteTutorialDialog: boolean = false;
  deleteTutorialsDialog: boolean = false;

  submitted: boolean;
  cols: any[];
  statuses: any[];
  rowsPerPageOptions = [5, 10, 20];
  tutorial: Tutorial = {
    title: '',
    description: '',
    types: {} 
  };
  selectedTutorials: Tutorial[];
  tutorials: Tutorial[];
  types: Type[] = []; 
  id_type: any;

  constructor(
    private tutorialService: TutorialService,
    private messageService: MessageService,
    private typeService: TypeService,
   
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'description', header: 'Description' },
      { field: 'types', header: 'Type' } // Ajout de la colonne 'Type'
    ];
    this.loadTutorials();
    this.retrieveTypes(); // Appel de la fonction pour récupérer les types
  }

  loadTutorials() {
    this.tutorialService.getAll().subscribe(tutorials => {
      this.tutorials = tutorials; // Utilisation de la variable 'tutorials' reçue dans le callback
    });
  }

  retrieveTypes(): void {
    this.typeService.getAll().subscribe({
      next: (data) => {
        this.types = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  openNew(): void {
    this.tutorial = { title: '', description: '', types: {} };
    this.submitted = false;
    this.tutorialDialog = true;
  }

  deleteSelectedTutorials(): void {
    this.deleteTutorialsDialog = true;
  }

  editTutorial(tutorial: Tutorial): void {
    this.tutorial = { ...tutorial };
    this.tutorialDialog = true;
    this.id_type = tutorial.types?.id; 
  }

  deleteTutorial(tutorial: Tutorial): void {
    this.deleteTutorialDialog = true;
    this.tutorial = { ...tutorial };
  }

  confirmDeleteSelected() {
    this.deleteTutorialsDialog = false;
    this.tutorialService.delete(this.selectedTutorials.map(tutorial => tutorial.id)).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Tutorials Deleted',
        life: 3000
      });
      this.selectedTutorials = null;
      this.loadTutorials();
    });
  }

  confirmDelete(): void {
    this.deleteTutorialDialog = false;
    this.tutorialService.delete(this.tutorial.id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Tutorial Deleted',
        life: 3000
      });
      this.loadTutorials();
    });
    this.tutorial = { title: '', description: '', types: {} };
  }

  hideDialog(): void {
    this.tutorialDialog = false;
    this.submitted = false;
  }

  saveTutorial(): void {
    this.submitted = true;
  
    const data = {
      id: this.tutorial.id,

      title: this.tutorial.title,
      description: this.tutorial.description,
      types: this.id_type
    };
  
    if (this.tutorial.id) {
      // Update existing tutorial
      this.tutorialService.update(data).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Tutorial Updated',
            life: 3000
          });
          this.loadTutorials();
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      // Create new tutorial
      this.tutorialService.create(this.id_type.id, data).subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Tutorial Created',
            life: 3000
          });
          this.loadTutorials();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  
    this.tutorialDialog = false;
  }
  
  

}

