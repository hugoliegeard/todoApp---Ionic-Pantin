import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Task} from "../../models/task";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /** Création d'une tâche @type {Task} */
  task: Task = new Task();

  /** Liste des tâches @type {Task[]} */
  tasks: Task[] = [
    {
      id: 1,
      title: 'Promener le chien',
      status: false
    },
    {
      id: 2,
      title: 'Arroser les plantes',
      status: true
    },
    {
      id: 3,
      title: 'Sortir les poubelles',
      status: false
    },
    {
      id: 4,
      title: 'Faire la vaisselle',
      status: true
    }
  ];

}
