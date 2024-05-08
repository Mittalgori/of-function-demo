import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 
  title = 'of-function-demo';
  emittedValuesFromObservable: string[] = []

  ngOnInit(): void {
    const myObservable$ = of('Apple', 'Banana', 'Kiwi', 'Orane', 'Mango');

    myObservable$.subscribe(
      (data) => {
        console.log('REceived data value : ', data);
        this.emittedValuesFromObservable.push(data);
      },
      (error) => {
        console.log('Error : ', error)
      },
      () => {
        console.log("Observable complete")
      }
    );
  }
}
