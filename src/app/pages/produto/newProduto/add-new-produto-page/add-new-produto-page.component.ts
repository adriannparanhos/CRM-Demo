import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormDef } from '../../../../shared/components/resource-form/models/FormDef';
import { Produto } from '../../models/Produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoMetadataService } from '../../../../core/services/produto/produto-metadata.service';
import { ResourceFormComponent } from '../../../../shared/components/resource-form/resource-form.component';
import { ProdutoService } from '../../../../core/services/produto/produto.service';

@Component({
  selector: 'app-add-new-produto-page',
  standalone: true,
  imports: [ResourceFormComponent],
  templateUrl: './add-new-produto-page.component.html',
  styleUrl: './add-new-produto-page.component.scss'
})
export class AddNewProdutoPageComponent implements OnInit {
  formFields: FormDef[];
  produtoData: Produto | null = null;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private produtoMetadataService: ProdutoMetadataService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formFields = this.produtoMetadataService.getFields()
      .filter(field => field.isFormField !== false);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
    }
  }

  saveProduto(formData: any): void {
    if (this.isEditing) {
      console.log('Atualizando produto:', formData);
      this.adicionarNovoProduto(formData);
    } else {
      console.log('Criando novo produto:', formData);
      this.adicionarNovoProduto(formData);
    }
    
    this.router.navigate(['/produtos']);
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }

  adicionarNovoProduto(formData: any): void {
    this.produtoService.add(formData).subscribe(() => {
      this.router.navigate(['/produtos']);
    });
  }

  deleteProduto(formData: any): void {
    this.produtoService.delete(formData.id).subscribe(() => {
      this.router.navigate(['/produtos']);
    });
  }
}
