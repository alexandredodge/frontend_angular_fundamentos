import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component'
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component'
import { UsuarioCreateComponent } from './components/usuarios/usuario-create/usuario-create.component' 

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "products",
  component: ProductCrudComponent
},{
	path:"products/create",
	component: ProductCreateComponent
},{
	path:"usuarios",
	component:UsuarioCrudComponent
},{
	path:"usuarios/create",
	component:UsuarioCreateComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
