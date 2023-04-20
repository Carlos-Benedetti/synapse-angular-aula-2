import { AfterViewInit, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Carro } from './Carro';
import { CarroService } from './services/carro.service';
import { timeout } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public loading: boolean = false
  public carros: Carro[] = []

  constructor(private snackBar: MatSnackBar, private carroService: CarroService) {

  }

  async ngAfterViewInit(): Promise<void> {

    await this.loadData();

  }

  private async loadData() {
    this.loading = true;
    this.carros = [];
    await new Promise<void>(r => setTimeout(r, 2000));
    this.carroService.findAll()
      .subscribe({
        next: (carros) => {
          this.carros = carros;
          this.loading = false;
        },
        error: (erro) => {
          this.loading = false;
          //dados fake para quem não esta com a api rodando
          this.carros = [
            { id: 1, category: 'carro', name: 'carro 1', price: 30000 },
            { id: 1, category: 'carro', name: 'carro 2', price: 30000 },
            { id: 1, category: 'carro', name: 'carro 3', price: 30000 },
            { id: 1, category: 'carro', name: 'carro 4', price: 30000 },
            { id: 1, category: 'carro', name: 'carro 5', price: 30000 },
            { id: 1, category: 'carro', name: 'carro 6', price: 30000 },
            { id: 1, category: 'carro', name: 'carro 7', price: 30000 },
            { id: 1, category: 'carro', name: 'carro 8', price: 30000 },
            { id: 1, category: 'carro', name: 'carro 9', price: 30000 },
            { id: 1, category: 'carro', name: 'carro 10', price: 30000 },
            { id: 1, category: 'carro', name: 'carro 11', price: 30000 },
            { id: 1, category: 'carro', name: 'carro 12', price: 30000 },
            { id: 1, category: 'carro', name: 'carro 13', price: 30000 },
          ];
          const snakErro = this.snackBar.open('Falha ao buscar carros', 'tentar novamente', {});
          snakErro.onAction().subscribe(() => this.loadData());
          console.error(erro);
        }
      });
  }
}
