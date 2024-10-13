import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rols',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rols.component.html',
  styleUrl: './rols.component.css'
})
export class RolsComponent {
    //String, number,boolean,date,object,array,null,undefined
    firstName:string ="Angular Tutorial";
    angularVersion ="Version 18";

    version: number =18;
    isActive:boolean=false;
    currentDate:Date=new Date();
    inputType:string ="button";
    selectedState:string='';

    showWelcomeAlert (){
      alert("welcome to Angular 18")
    }
    
    showMessage(message: string){
      alert(message)
    }
}
