import {Application} from "express";
import {CategoryService} from "../services/category.service";

export class CategoryController{
    private category_service: CategoryService;
    constructor(private app: Application){
        this.category_service = new CategoryService();
        this.routes();
    }
    private routes(){
        this.app.route("/categories").get(this.category_service.getAll);//me muestra todo
        this.app.route("/categories/languages").get(this.category_service.getAllWLanguage);//trae las categorias
        this.app.route("/category/:id").delete(this.category_service.deleteOne);//Borra las categorias
        this.app.route("/category").post(this.category_service.NewOne); //declara una accion nueva del servicio, quiero un registro nuevo.
        this.app.route("/category/:id").get(this.category_service.getLanguagesByCategory); //filtrado de los lenguajes
    }
}