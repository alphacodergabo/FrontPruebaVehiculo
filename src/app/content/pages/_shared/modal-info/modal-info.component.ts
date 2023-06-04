import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {
  viewLoading: boolean = false;
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.setValues();
  }

  onNoClick(): void {
		this.dialogRef.close();
  }

  onYesClick() {
    this.viewLoading = true;
    this.dialogRef.close(true);
  }
  createForm() {
    this.form = this._formBuilder.group({
      Brand: new FormControl(null),
      DoorsPassenger: new FormControl(null),
      Category: new FormControl(null),
      Color: new FormControl(null),
      Model: new FormControl(null),
      Power: new FormControl(null),
      RegistrationPlate: new FormControl(null),
      Fuel: new FormControl(null),
    });
  }
  setValues(){
    this.form.controls.Brand.setValue(this.data.brand)
    this.form.controls.DoorsPassenger.setValue(this.data.doorsPassenger)
    this.form.controls.Category.setValue(this.data.category)
    this.form.controls.Color.setValue(this.data.color)
    this.form.controls.Model.setValue(this.data.model)
    this.form.controls.Power.setValue(this.data.power)
    this.form.controls.RegistrationPlate.setValue(this.data.registrationPlate)
    this.form.controls.Fuel.setValue(this.data.fuel)
    this.form.controls.Brand.disable()
    this.form.controls.DoorsPassenger.disable()
    this.form.controls.Category.disable()
    this.form.controls.Color.disable()
    this.form.controls.Model.disable()
    this.form.controls.Power.disable()
    this.form.controls.RegistrationPlate.disable()
    this.form.controls.Fuel.disable()
  }

}
