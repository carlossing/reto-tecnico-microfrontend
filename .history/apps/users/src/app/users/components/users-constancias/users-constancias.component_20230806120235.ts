import { Component } from '@angular/core';
import { ConstanciasService } from '../../../../../../../libs/client-users/src/lib/services/constancias.service';

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
