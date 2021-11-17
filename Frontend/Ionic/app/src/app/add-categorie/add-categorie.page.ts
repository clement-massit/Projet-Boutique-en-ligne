import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.page.html',
  styleUrls: ['./add-categorie.page.scss'],
})
export class AddCategoriePage implements OnInit {
  private categorie : FormGroup;
  public api : RestService;

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.categorie = this.formBuilder.group({
            title: [''],
            description: [''],
          });
      this.api = restapi;
  }

  async saveCategorie(){
    await this.api.createCategorie(this.categorie.value)
    .subscribe(res => {
        this.router.navigate(['/categories']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.categorie.value);
    this.saveCategorie();

  }

  ngOnInit() {

  }
}
