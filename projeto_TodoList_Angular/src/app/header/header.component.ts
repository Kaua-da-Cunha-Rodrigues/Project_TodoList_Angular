import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  hour?: string
  minute?: string
  seconds?: string
  today?: number

  getHour(): void {
    const horas = document.getElementById('horas') as HTMLElement;
    const minutos = document.getElementById('minutos') as HTMLElement;

    const relogio = setInterval(function time(this: any): void {
      let dateToday = new Date();
      let hr: number | string = dateToday.getHours();
      let min: number | string = dateToday.getMinutes();

      if (hr < 10) hr = '0' + hr;

      if (min < 10) min = '0' + min;


      horas.textContent = hr.toString();
      minutos.textContent = min.toString();

      this.hour = hr;
      this.minute = min;      
      
    }, 1000);
  }
  getDate(): void{
    const date = new Date()
    this.today = date.getDay()
  }
  ngOnInit(){
    this.getHour(); 
    this.getDate(); 
  }
}
