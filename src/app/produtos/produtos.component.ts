import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos';
import { PRODUTOS } from '../lista-produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {
  product = PRODUTOS;
  selectedProduto?: Produto;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(produto: Produto): void {
    this.selectedProduto = produto;
  }

}

