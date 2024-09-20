import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

console.log(uuid());

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Goku', power: 19000 },
    { id: uuid(), name: 'Vegeta', power: 18900 },
    { id: uuid(), name: 'Trunks', power: 11000 },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index, 1);
  // }
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
