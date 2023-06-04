import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { UtilsGeneralService } from '../Utils/utils-general.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  form: FormGroup;
  listData: MatTableDataSource<any>;
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = [
    'Nro',
    'Marca',
    'Matricula',
    'Activo',
    'actions',
  ];
  @ViewChild(MatSort) MatSort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  array_dataList: any[] = [];


  constructor(
    public _formBuilder: FormBuilder,
    private _profile: ProfileService,
    private toastr: ToastrService,
    public authService: AuthService,
    private utilsService: UtilsGeneralService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getMainList();
  }

  createForm() {
    this.form = this._formBuilder.group({
      searchKey: new FormControl(null),
      Documento: new FormControl(null),
      Nombre: new FormControl(null),
      Apellidos: new FormControl(null),
      Mail: new FormControl(null),
      Telefono: new FormControl(null),
      Licencia: new FormControl(null),
    });
  }
  getNumber_byItem(item) {
    return this.array_dataList.indexOf(item) + 1;
  }
  getCssClassByEstado(status: string) {
    // tslint:disable-next-line: indent
    if (status) {
      return 'badge-primary';
    } else {
      return 'danger';
    }
  }
  getEstadoString(status: string) {
    if (status) {
      return 'SI';
    } else {
      return 'NO';
    }
  }

  getMainList() {
    let userPk = {
      UserId: localStorage.getItem("UserId")
    }
    this._profile.getUserInfo(userPk).subscribe(
      (data: any) => {
        this.array_dataList = data.vehicles;
        this.listData = new MatTableDataSource(data.vehicles);
        this.listData.sort = this.MatSort;
        this.listData.paginator = this.paginator;
        this.form.controls.Nombre.setValue(data.name)
        this.form.controls.Apellidos.setValue(data.lastName)
        this.form.controls.Documento.setValue(data.doc)
        this.form.controls.Mail.setValue(data.mail)
        this.form.controls.Telefono.setValue(data.phoneNumber)
        this.form.controls.Licencia.setValue(data.driverLicence)
        this.form.controls.Nombre.disable()
        this.form.controls.Apellidos.disable()
        this.form.controls.Documento.disable()
        this.form.controls.Mail.disable()
        this.form.controls.Telefono.disable()
        this.form.controls.Licencia.disable()
      },
      (errorServicio) => {
        this.toastr.error(
          'Se produjo un error al consultar con la base de datos.',
          'Error!',
          {
            timeOut: 2000,
            closeButton: true,
            progressBar: true,
          }
        );
        console.log(errorServicio);
      }
    );
  }
  searchTable() {
    var searchKey = this.form.controls.searchKey.value;
    this.listData.filter = searchKey.trim().toLowerCase();
  }

  open_modal_edit(item) {

    const dialogRef = this.utilsService._vehiclesInfoDetail(item);
    dialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        
      }
    });
  }

}
