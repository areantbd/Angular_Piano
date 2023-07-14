import { Component } from '@angular/core';

interface Notes{
  Do: string,
  Re: string,
  Mi: string,
  Fa: string,
  Sol: string,
  La: string,
  Si: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Piano';

  aplicarSonido(nota: string): void {
    const audio = new Audio()
    audio.src = `../assets/sonidos/${nota}.wav`
    audio.load()
    audio.play()
  }
}
