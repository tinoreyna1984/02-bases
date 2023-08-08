import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList:Character[] = [];

  // borrado de registro - requiere indicar el índice para borrar el registro
  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();
  public deleteCharacter(id?:string):void{

    this.onDelete.emit(id);
  }

}
