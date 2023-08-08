import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters:Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    }
  ];

  addCharacter(character: Character):void{
    //console.log("Componente padre: ", character);
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    }
    this.characters.push(newCharacter); // agrega a la lista
  }

  // borrado de personaje
  deleteCharacter(id: string):void {
    this.characters = this.characters.filter(e => e.id !== id);
  }

}
