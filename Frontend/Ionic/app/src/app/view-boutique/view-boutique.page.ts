import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-view-boutique',
  templateUrl: './view-boutique.page.html',
  styleUrls: ['./view-boutique.page.scss'],
})
export class ViewBoutiquePage implements OnInit {
  boutique : any;
  api : RestService;
  id : string;
  title : string;
  description : string;

  constructor(
    public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;

  }

  async getBoutique(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getBoutique(this.id)
      .subscribe(res => {
        console.log(res);
        this.boutique = res;
        this.title = this.boutique.title;
        this.description = this.boutique.description;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async saveBoutique(){
    await this.api.updateProduit(this.boutique._id, this.boutique)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/boutiques']);
      }, (err) => {
        console.log(err);
      });
  }

  async deleteBoutique(){
    await this.api.deleteBoutique(this.boutique._id)
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
    console.log(this.boutique._id);
    

    this.boutique.title = this.title;
    this.boutique.description = this.description;

    this.saveBoutique();

  }

  delete() {

    this.deleteBoutique();
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.getBoutique(this.id);
  }

}
