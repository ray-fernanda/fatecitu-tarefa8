import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../produtos';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit {

  @Input() produtos?: Produto;

  constructor() { }

  ngOnInit(): void {
  }

}
