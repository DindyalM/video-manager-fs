import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { Player } from './player.model';



@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  selectedPlayer: Player;
  player: Player[];
  constructor() { }
}
