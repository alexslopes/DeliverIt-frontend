import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosPagamentoService } from '../service/dados-pagamento.service';
import { ContaPagar } from '../shared/conta-pagar';

@Component({
  selector: 'app-conta-pagar',
  templateUrl: './conta-pagar.component.html',
  styleUrls: ['./conta-pagar.component.scss']
})
export class ContaPagarComponent implements OnInit {

  paymentForm: FormGroup;
  contaPagar: ContaPagar;
  listaPagamentos: any;

  constructor(
    private pf: FormBuilder,
    private dadosPagamentoService: DadosPagamentoService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.paymentForm = this.pf.group({
      nome: ['', Validators.required],
      valorOriginal: ['', Validators.required],
      dataVencimento: ['', Validators.required],
      dataPagamento: ['', Validators.required]
    });

    this.paymentForm.valueChanges
    .subscribe(data => console.log(data));
  }

  onSubmit() {
    this.contaPagar = this.paymentForm.value;

    this.dadosPagamentoService.submitDadosPagamento(this.contaPagar)
    .subscribe(contaPagar => {
      console.log(contaPagar);
    })
  }

  obterPagamentos() {
    this.dadosPagamentoService.obterPagamento()
    .subscribe(contasPagar => {
      this.listaPagamentos = contasPagar;
    })
  }

}
