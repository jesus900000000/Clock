import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-clock',
  templateUrl: './clock-clock.component.html',
  styleUrls: ['./clock-clock.component.scss']
})
export class ClockClockComponent implements OnInit {

  private daysArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  private date = new Date();
  public displayHour: any;
  public displayMinute: string = '';
  public displaySecond: string = '';
  public displayAMPM: string = '';
  public displayDayOfTheWeek: string = '';
  public alarmHour: string = '0';
  public alarmMinute: string = '0';
  public displayAlert: string = '';


  constructor() { }

  ngOnInit(): void {

    setInterval(() =>{
      const date = new Date();
      this.updateDate(date);
    },1000) // will update date each second

    this.displayDayOfTheWeek = this.daysArray[this.date.getDay()];//gets the day because getDay() retruns the integer value of date

  }

  //ALARM CODE:
  onClickSetAlarm(){
    if(this.alarmHour == this.displayHour && this.alarmMinute == this.displayMinute){
      this.displayAlert = 'ALARM !!!!!!' +this.alarmHour+":"+this.displayMinute;
      alert("THE ALARM HAS GONE OFF")
    }
    else{
      this.displayAlert = '';
    }
  }

  onClickClearAlarm(){
    this.displayAlert = ''
    this.alarmHour = '0';
    this.alarmMinute = '0';
  }


  //DATE UPDATING CODE
  private updateDate(date: Date){
    const hours = date.getHours();

    //Code for AM and PM
    if(hours >= 12){
      this.displayAMPM = 'PM'
    }
    else{
      this.displayAMPM = 'AM'
    }

    //Code for making the hour in 12hour format
    this.displayHour = hours % 12;
    if(this.displayHour == 0){
      this.displayHour = 12
    }
    else{
      this.displayHour = this.displayHour;
      }


    //Code for making the digits always 4
    if (this.displayHour < 10 ){
      this.displayHour = '0' + this.displayHour;
    }
    else{
      this.displayHour = this.displayHour;
    }


    //MINUTES:
    const minutes = date.getMinutes();
    if(minutes < 10){
      this.displayMinute = '0'+ minutes.toString();
    }
    else{
      this.displayMinute = minutes.toString() // produces the minutes in string form then assigns it to the minute value for the html to display
    }

    //SECONDS:
    const seconds = date.getSeconds();
    if (seconds < 10) {
      this.displaySecond = '0' + seconds.toString();
    }
    else{
      this.displaySecond = seconds.toString();
    }




  }

}
