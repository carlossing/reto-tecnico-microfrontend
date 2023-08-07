import { Component } from '@angular/core';
import { ConstanciasService } from '@gnx/client-users';
import { ConstanciaCollectionResponse } from 'libs/client-users/src/lib/models/constancia.model';

@Component({
  selector: 'gnx-users-constancias',
  templateUrl: './users-constancias.component.html',
  styleUrls: ['./users-constancias.component.scss'],
})
export class UsersConstanciasComponent {
  constructor(private constanciaService: ConstanciasService) {}

  getByUser(userUuid: string) {
    this.constanciaService
      .getByUser(userUuid)
      .pipe()
      .subscribe((response: ConstanciaCollectionResponse) => {
        console.log(response);
      });
  }
}
