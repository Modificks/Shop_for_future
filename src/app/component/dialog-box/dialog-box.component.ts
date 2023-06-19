import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit{
  myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ??''),
    price: new FormControl(this.data?.price ??''),
    sort: new FormControl(this.data?.sort ??''),
    place: new FormControl(this.data?.place ??''),
    date: new FormControl(this.data?.date ??'')
   });


  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit(){
    this.data = {
      id: this.myForm.value.id,
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      sort: this.myForm.value.sort,
     configure:{
      place: this.myForm.value.place,
      date: this.myForm.value.date
    }
    };
    
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
    
  }

}
