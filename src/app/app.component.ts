import { HyperLinkComponent } from './components/hyper-link/hyper-link.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  model = {
    children: [
      {
        componentName: 'GridLayoutComponent',
        properties: {
          cols: 2
        },
        children: [
          {
            componentName: 'GridLayoutComponent',
            properties: {
              cols: 2
            },
            children: [
              {
                componentName: 'PictureBoxComponent',
                properties: { alt: 'typescript', url: 'http://blemoine.github.io/typescript-slides/images/typescript-logo.png' }
              },
              {
                componentName: 'PictureBoxComponent',
                properties: { alt: 'vscode', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png' }
              },
              {
                componentName: 'PictureBoxComponent',
                properties: { alt: 'angular', url: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/full/angular2.png' }
              },
              {
                componentName: 'PictureBoxComponent',
                properties: { alt: 'rxjs', url: 'https://cn.rx.js.org/manual/asset/Rx_Logo_M.png' }
              }
            ]
          },
          {
            componentName: 'HyperLinkComponent',
            properties: { label: 'google', url: 'https://www.google.com/' }
          },
          {
            componentName: 'HyperLinkComponent',
            properties: { label: 'yahoo', url: 'https://www.yahoo.com/' }
          },
          {
            componentName: 'PictureBoxComponent',
            properties: { alt: '高雄', url: 'http://kcginfo.kcg.gov.tw/Upload/epublication/2013/pk/no11/01-04.jpg' }
          }
        ]
      }
    ]
  };


  add() {
    this.model.children[0].children.push({
      componentName: 'HyperLinkComponent',
      properties: { cols: 2 },
      children: []
    });
    console.log(this.model);
  }
}
