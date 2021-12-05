import { Component,Input,OnInit} from '@angular/core';
import { ApiresponseService } from '../../services/apiresponse.service';
import { Perfil } from '../../interfaces/interface-aws';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

   perfil:Perfil[]=[];
   perfiles:Perfil[]=[];
   vista1:boolean=true;
   vista2:boolean=false;
  

  @Input() termino:string='';

 
  get respuestaApi(){
    return this.http.dataResponse
  }

  constructor(private http:ApiresponseService) { }

  ngOnInit(): void {
    this.http.getResponse();
  }

  opcionVista(index:number){
    switch(index){
      case 1:{
        this.vista1=true;
        this.vista2=false;
        break; 
      }
      case 2:{
        this.vista1=false;
        this.vista2=true;
        break; 
      }
    }
  }

  buscar(termino:string){
   this.perfil=this.respuestaApi.filter(item=>item.first_name.toLowerCase()==termino.toLowerCase().trim()); 
  }

}
