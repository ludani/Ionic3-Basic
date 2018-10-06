import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**AQUI ENTRA O CÓDIGO      */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  //CÓDIGO AQUI
  public nome_usuario:string = "Lucas Daniel Alves Vieira";




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    //AQUI COLOCA OS FUNÇÕES EM GERAL EM TypeScrip
    public somaDoisNumeros(num1:number, num2:number): void{
      //alert(num1 + num2);
      

    }




  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(10, 99);

  }

}
