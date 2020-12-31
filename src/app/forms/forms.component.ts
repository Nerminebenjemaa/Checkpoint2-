import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
nom='Nom';
prenom='Prenom';
job='Profession';
citation='Citation';
description='Description';
  constructor() { }

  ngOnInit(): void {
  }

}
