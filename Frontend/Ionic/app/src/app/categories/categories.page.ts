import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories : any;
  api : RestService;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    public navController : NavController, 
    public router : Router) {

    this.api = restapi;
  }

  async getCategories() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategories()
      .subscribe(res => {
        console.log(res);
        this.categories = res.filter((aCategorie) => {
          return this.categories
        });
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async deleteCategorie(id:any){
    await this.api.deleteCategorie(id)
    .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }

  async doneCategorie(id:any){
    await this.api.doneCategorie(id)
    .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }

  done(id: any) {
    console.log("done");
    this.doneCategorie(id);
  }

  delete(id:any) {
    this.deleteCategorie(id);
  }

  ngOnInit() {
    this.getCategories();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }


}
