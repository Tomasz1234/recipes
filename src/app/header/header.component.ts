import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  onSelect(choice){
    switch(choice){
      case 'recipes':
        console.log('recipesss');
        break;
      case 'list':
        console.log('shopping list');  
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
