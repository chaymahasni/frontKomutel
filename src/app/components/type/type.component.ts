import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Type } from 'src/app/api/type';
import { TypeService } from 'src/app/service/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  typeDialog: boolean;
  deleteTypeDialog: boolean = false;
  deleteTypesDialog: boolean = false;

  type: Type = { id: '1', nom: '' };
  selectedTypes: Type[];
  submitted: boolean;
  cols: any[];
  rowsPerPageOptions = [5, 10, 20];

  constructor(
    private typeService: TypeService,
    private messageService: MessageService,
   
  ) {}
  types?: Type[];
  id_type!:any;

  ngOnInit() {
    this.cols = [
      { field: 'nom', header: 'Nom' }
    ];

    this.loadTypes();
  }

  loadTypes() {
    this.typeService.getTypes().subscribe(types => {
      this.types = types;
    });
  }

  openNew() {
    this.type = { id: '', nom: '' };
    this.submitted = false;
    this.typeDialog = true;
  }

  deleteSelectedTypes() {
    this.deleteTypesDialog = true;
  }

  editType(type: Type) {
    this.type = { ...type };
    this.typeDialog = true;
  }

  deleteType(type: Type) {
    this.deleteTypeDialog = true;
    this.type = { ...type };
  }

  confirmDeleteSelected() {
    this.deleteTypesDialog = false;
    this.typeService.delete(this.selectedTypes.map(type => type.id)).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Types Deleted',
        life: 3000
      });
      this.selectedTypes = null;
      this.loadTypes();
    });
  }

  confirmDelete() {
    this.deleteTypeDialog = false;
    this.typeService.delete(this.type.id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Type Deleted',
        life: 3000
      });
      this.loadTypes();
    });
    this.type = { id: '', nom: '' };
  }

  hideDialog() {
    this.typeDialog = false;
    this.submitted = false;
  }
saveType(): void {
  this.submitted = true;

  const data = {
    id: this.type.id,
    nom: this.type.nom
  };

  if (this.type.id) {
    // Update existing type
    this.typeService.update(data).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Type Updated',
          life: 3000
        });
        this.loadTypes();
      },
      (error) => {
        console.error(error);
      }
    );
  } else {
    // Create new type
    this.typeService.create(data, this.id_type).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Type Created',
          life: 3000
        });
        this.loadTypes();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  this.typeDialog = false;
}


 
}
