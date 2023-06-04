import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoComponent } from '../_shared/modal-info/modal-info.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsGeneralService {

  constructor(
    private dialog: MatDialog
  ) { }

  _vehiclesInfoDetail(
    data: any,
  ) {
    return this.dialog.open(ModalInfoComponent, {
      data: data,
      width: '650px',
      height: '400px'
    });
  }
  
}
