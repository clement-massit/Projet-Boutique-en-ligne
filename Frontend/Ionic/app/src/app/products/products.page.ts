import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'products.page.html',
  styleUrls: ['products.page.scss'],
})
export class ProductsPage {
  id : String;
  produits : any;
  categorie : any;
  api : RestService;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    public navController : NavController,
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;
  }
  
  async getProduits() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getProduits()
      .subscribe(res => {
        console.log(res);
        this.produits = res.filter((aProduit) => {
          return this.produits
        });
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async getCategorie(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategorie(this.id)
      .subscribe(res => {
        console.log(res);
        this.categorie = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async deleteProduit(id:any){
    await this.api.deleteProduit(id)
    .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }

  async doneProduit(id:any){
    await this.api.doneProduit(id)
    .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }

  done(id: any) {
    console.log("done");
    this.doneProduit(id);
  }

  delete(id:any) {
    this.deleteProduit(id);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    this.getProduits();
    this.getCategorie(this.id);
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

}
