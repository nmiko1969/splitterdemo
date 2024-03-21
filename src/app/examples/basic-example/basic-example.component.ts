import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-example',
  templateUrl: './basic-example.component.html',
  styleUrls: ['./basic-example.component.scss']
})
export class BasicExampleComponent implements OnInit {

  moveable: boolean = true;
  fixedfirsttwopanels: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  fixing() {
    this.moveable = !this.moveable;
  }

  async refix(mytab: any) {
    mytab.fixed = !mytab.fixed;
    if (this.moveable) {
      this.moveable = false;
      await this.delay(100);
      this.moveable = true;
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  

}
