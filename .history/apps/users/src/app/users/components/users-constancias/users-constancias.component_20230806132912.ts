import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ConstanciasService } from '@gnx/client-users';
import { ConstanciaCollectionResponse } from '@gnx/client-users';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'gnx-users-constancias',
  templateUrl: './users-constancias.component.html',
  styleUrls: ['./users-constancias.component.scss'],
})
export class UsersConstanciasComponent implements OnInit, OnDestroy {

  @Input() userUuid: string;
  private unsubscribe = new Subject<void>();

  constructor(private constanciaService: ConstanciasService) {}

  ngOnInit(): void {
    console.log('');
    // throw new Error('Method not implemented.');
  }

  getByUser(userUuid: string) {
    this.constanciaService
      .getByUser(userUuid)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((response: ConstanciaCollectionResponse) => {
        console.log(response);
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
