import {Component} from "@angular/core"
import {Recipe } from "../recipe.model"

@Component({
    selector: "app-recipe-list",
    templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {

    recipes: Recipe[] =[
        new Recipe('test recipe', 'simply a test', 'https://image.shutterstock.com/image-photo/wild-tropical-pulasan-fruit-nephelium-600w-1767117404.jpg'),
new Recipe('test recipe', 'simply a test', 'https://image.shutterstock.com/image-photo/wild-tropical-pulasan-fruit-nephelium-600w-1767117404.jpg'),
new Recipe('test recipe', 'simply a test', 'https://image.shutterstock.com/image-photo/wild-tropical-pulasan-fruit-nephelium-600w-1767117404.jpg'),
new Recipe('test recipe', 'simply a test', 'https://image.shutterstock.com/image-photo/wild-tropical-pulasan-fruit-nephelium-600w-1767117404.jpg'),
new Recipe('test recipe', 'simply a test', 'https://image.shutterstock.com/image-photo/wild-tropical-pulasan-fruit-nephelium-600w-1767117404.jpg'),
new Recipe('test recipe', 'simply a test', 'https://image.shutterstock.com/image-photo/wild-tropical-pulasan-fruit-nephelium-600w-1767117404.jpg')
    ];

}