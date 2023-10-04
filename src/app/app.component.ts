import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

declare let Weavy: any;
declare let Messenger: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('weavyContainer') weavyContainer!: ElementRef;
  weavyUrl?: string;
  weavyApp: any;

  isChatWindowVisible: boolean = false;

  constructor(
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.loadWeavyApp();

    console.warn("Chat info reveal in 5 seconds")
    setTimeout(() => {
      console.warn("isBuilt:", this.weavyApp.isBuilt);
      console.warn("isInitialized:", this.weavyApp.isInitialized);
      console.warn("isLoaded:", this.weavyApp.isLoaded); // will be false when chat window is not visible by default on google chrome, but will be true on firefox
  
    }, 5000);
  }

  private loadWeavyApp(): void {
    this.weavyUrl = '{your_url_here}';
    this.weavyApp = new Messenger();

    Weavy.tokenFactory = async () => await '{your_token_here}',
    Weavy.init = false;
    Weavy.url = this.weavyUrl;
    Weavy.lang = 'pt';
    Weavy.badge = true;
    Weavy.open = false;
    Weavy.tz = 'E. South America Standard Time'
    Weavy.logging = true;

    this.renderer.appendChild(this.weavyContainer.nativeElement, this.weavyApp);
  }

  chatWindowStateChange(): void {
    this.isChatWindowVisible = this.isChatWindowVisible ? false : true;
  }
}
