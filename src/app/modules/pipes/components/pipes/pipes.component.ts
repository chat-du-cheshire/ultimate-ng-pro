import {Component, OnInit} from '@angular/core';
import {IFile} from '../../interfaces/IFile';
import {ToMbPipe} from '../../pipes/to-mb.pipe';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
  providers: [ToMbPipe]
})
export class PipesComponent implements OnInit {

  files: IFile[] = [{
    name: 'a.jpg',
    size: 1234567
  }, {
    name: 'b.jpg',
    size: 987654
  }];

  converted = this.files.map(
    (file) => ({...file, size: this.toMb.transform(file.size, 'Mb')})
  );

  constructor(private toMb: ToMbPipe) {
  }

  ngOnInit() {
  }

}
