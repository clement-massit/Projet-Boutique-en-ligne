import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  private produit : FormGroup;
  public api : RestService;
  categories : any;

  constructor(
    public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.produit = this.formBuilder.group({
            title: [''],
            description: [''],
            price: [''],
            categories: ['']
          });
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

  async saveProduit(){
    await this.api.createProduit(this.produit.value)
    .subscribe(res => {
        this.router.navigate(['/products/' + this.produit.value['categories']]);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.produit.value);
    this.saveProduit();

  }

  ngOnInit() {
    this.getCategories();

  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

}
