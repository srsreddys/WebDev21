import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Mains } from '../mains/mains';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Mains],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular21');
}
