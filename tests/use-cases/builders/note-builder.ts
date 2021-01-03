import { UserData } from '../../../src/entities/user-data'
import { NoteData } from '../../../src/use-cases/ports/note-data'
import { UserBuilder } from './user-builder'

export class NoteBuilder {
  private readonly owner: UserData = UserBuilder.aUser().build()
  private readonly note: NoteData = {
    title: 'my note',
    content: 'my content',
    ownerEmail: this.owner.email,
    ownerId: this.owner.id
  }

  public static aNote (): NoteBuilder {
    return new NoteBuilder()
  }

  public withInvalidTitle (): NoteBuilder {
    this.note.title = ''
    return this
  }

  public build (): NoteData {
    return this.note
  }
}