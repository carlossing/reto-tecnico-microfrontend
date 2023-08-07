import { Component, OnInit } from '@angular/core';
import { ConstanciasService } from '@gnx/client-users';
import { ConstanciaCollectionResponse } from 'libs/client-users/src/lib/models/constancia.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'gnx-users-constancias',
  templateUrl: './users-constancias.component.html',
  styleUrls: ['./users-constancias.component.scss'],
})
export class UsersConstanciasComponent implements OnInit {

  private unsubscribe = new Subject<void>();
  constructor(private constanciaService: ConstanciasService) {}
  ngOnInit(): void {
    console.log('');
    // throw new Error('Method not implemented.');
  }

  getByUser(userUuid: string) {
    this.constanciaService
      .getByUser(userUuid)
      .pipe()
      .subscribe((response: ConstanciaCollectionResponse) => {
        console.log(response);
      });
  }
}
