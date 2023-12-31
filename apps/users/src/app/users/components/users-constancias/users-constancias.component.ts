import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Constancia, ConstanciasService } from '@gnx/client-users';
import { ConstanciaCollectionResponse } from '@gnx/client-users';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'gnx-users-constancias',
  templateUrl: './users-constancias.component.html',
  styleUrls: ['./users-constancias.component.scss'],
})
export class UsersConstanciasComponent implements OnInit, OnDestroy {
  @Input() userUuid: string;

  constancias: Constancia[];
  private unsubscribe = new Subject<void>();

  constructor(private constanciaService: ConstanciasService) {}

  ngOnInit(): void {
    console.log(this.userUuid);
    // throw new Error('Method not implemented.');
    this.getByUser(this.userUuid);
  }

  getByUser(userUuid: string) {
    this.constanciaService
      .getByUser(userUuid)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((response: ConstanciaCollectionResponse) => {
        console.log(response);
        this.constancias = response.items;
      });
  }

  download(content: string) {
    this.downloadPdf(content, 'constancia');
  }

  downloadPdf(base64String: string, fileName: string) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement('a');
    link.href = source;
    link.download = `${fileName}.pdf`;
    link.click();
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
