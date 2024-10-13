import { Component } from '@angular/core';

@Component({
  selector: 'app-rols',
  standalone: true,
  imports: [],
  templateUrl: './rols.component.html',
  styleUrl: './rols.component.css'
})
export class RolsComponent {
    //String, number,boolean,date,object,array,null,undefined
    firstName:string ="Angular Tutorial";
    angularVersion ="Version 18";

    version: number =18;
    isActive:boolean=false;
    current:Date=new Date();
    
}
