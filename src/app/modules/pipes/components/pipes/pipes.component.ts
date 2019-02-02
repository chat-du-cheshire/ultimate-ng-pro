import {Component, OnInit} from '@angular/core';
import {IFile} from '../../interfaces/IFile';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  files: IFile[] = [{
    name: 'a.jpg',
    size: 1234567
  }, {
    name: 'b.jpg',
    size: 987654
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
