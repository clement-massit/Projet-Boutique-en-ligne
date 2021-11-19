import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router  } from '@angular/router';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.page.html',
  styleUrls: ['./add-categorie.page.scss'],
})
export class AddCategoriePage implements OnInit {
  private categorie : FormGroup;
  public api : RestService;
  boutique : any;
  boutiques : any;
  id : String;
  
  

  constructor(
    public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.categorie = this.formBuilder.group({
            title: [''],
            description: [''], 
            boutiques: ['']   
          });
      this.api = restapi;
  }

  async getBoutiques() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getBoutiques()
      .subscribe(res => {
        console.log(res);
        this.boutiques = res.filter((aBoutique) => {
          return this.boutiques
        });
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }




  async saveCategorie(){
  
    await this.api.createCategorie(this.categorie.value)
    .subscribe(res => {
        this.router.navigate(['/categories/' + this.categorie.value['boutiques']]);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.categorie.value);
    this.saveCategorie();

  }

  ngOnInit() {
    this.getBoutiques();
   

  }

  ionViewWillEnter() {
    this.ngOnInit();
  }
}
