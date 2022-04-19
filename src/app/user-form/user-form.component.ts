import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup = this.fb.group({
    nom: "",
    prenom: "",
    age : 0,
    adresse : this.fb.group({
      numero: 0,
      rue: "",
      ville: ""
    }),
    ordinateurs: this.fb.array([])
  })

  @Output() addUserEvent = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addOrdinateur();
  }

  get ordinateurs() {
    return this.userForm.get('ordinateurs') as FormArray;
  }

  addOrdinateur() {
    this.ordinateurs.push(this.fb.group({
      marque: "",
      modele: "",
      prix: 0
    }))
  }

  resetOrdinateurs() {
    this.ordinateurs.clear();
    this.addOrdinateur();
  }

  validationForm() {
    this.addUserEvent.emit(this.userForm.value);
    this.userForm.reset();
    this.resetOrdinateurs();
  }

}
