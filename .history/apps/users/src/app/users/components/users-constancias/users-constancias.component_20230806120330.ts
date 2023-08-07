import { Component } from '@angular/core';
import { ConstanciasService } from '@gnx/client-users';

@Component({
  selector: 'gnx-users-constancias',
  templateUrl: './users-constancias.component.html',
  styleUrls: ['./users-constancias.component.scss'],
})
export class UsersConstanciasComponent {


  constructor(
    private constanciaService: ConstanciasService,
  ) {}
}
