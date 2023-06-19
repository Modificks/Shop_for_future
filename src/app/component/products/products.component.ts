import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/servicest/products.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: IProducts[];
  productsSubscription: Subscription;
  canEdit: boolean = false;
  canView: boolean = false;

  constructor(private ProductsService: ProductsService, public dialog: MatDialog){}

  ngOnInit(): void{
    this.canEdit = true

    this.productsSubscription = this.ProductsService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }

  deleteItem(id: number){
    console.log(id);
    this.ProductsService.deleteProduct(id).subscribe(() => this.products.find((item) =>{
      if(id === item.id){
        let idx = this.products.findIndex((data) => data.id === id);
        this.products.splice(idx, 1);
      }
    }))
  }

  openDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data)=> {
      if(data){
      this.postData(data)
    }
    })
  }

  postData(data: IProducts){
      this.ProductsService.postProduct(data).subscribe((data) => this.products.push(data));
  }


  ngDestroy(){
    if (this.productsSubscription){ this.productsSubscription.unsubscribe();}
  }

}
