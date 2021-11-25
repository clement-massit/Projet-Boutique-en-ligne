import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  produit : any;
  api : RestService;
  id : string;
  title : string;
  description : string;
  price : Number;

  constructor(
    public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;

  }

  async getProduit(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getProduit(this.id)
      .subscribe(res => {
        console.log(res);
        this.produit = res;
        this.title = this.produit.title;
        this.description = this.produit.description;
        this.price = this.produit.price;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async saveProduit(){
    await this.api.updateProduit(this.produit._id, this.produit)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/products/' + this.produit.categories[0]]);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteProduit(){
    await this.api.deleteProduit(this.produit._id)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/boutiques']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {

    console.log(this.description);
    console.log(this.title);
    console.log(this.produit._id);
    console.log(this.price);

    this.produit.title = this.title;
    this.produit.description = this.description;
    this.produit.price = this.price;

    this.saveProduit();

  }

  delete() {

    this.deleteProduit();
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.getProduit(this.id);
  }
}
