import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public addCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    name: "",
    power: 0,
  }

  emitCharacter():void{

    if(this.character.name.length < 1) return;

    this.addCharacter.emit(this.character);

    //console.log("Componente hijo: ", this.character);
  }
}
