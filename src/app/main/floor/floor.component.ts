import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../_models/room';
import {Observable} from 'rxjs';
import {Type} from '../_models/type.enum';
import {Floor} from '../_models/floor';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {

  @Input() floor: Floor = {floorLevel: 0, rooms: []};
  floorLevel: number;

  rooms: Room[] = [
    {naam: 'lokaal 404', drukte: 100, bezet: true, hoogte: 100, breedte: 100, type: Type.klaslokaal},
    {naam: 'lokaal 100', drukte: 8, bezet: true, hoogte: 100, breedte: 200, type: Type.vergaderzaal}
  ];

  constructor() {
  }

  ngOnInit() {
    // mongodb --> floor_collectie.find({floorLevel: floorLevel}) returns floor{Room[]}
  }

}
