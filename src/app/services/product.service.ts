import {Injectable} from "@angular/core";
import {Product} from "../models/product.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ProductSuggestionService {

  suggestions: Product[] = [];

  productSuggestionsUrl = 'http://localhost:8080/suggestions/';
  productCreationUrl = 'http://localhost:8080/product/create/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('tester:tester')
    })
  };

  constructor(private http: HttpClient) {

  }

  getSuggestions(answer: { ageRange: any; studying: any; incomeRange: any; }) {
    let result = this.http.post<Product[]>(this.productSuggestionsUrl, answer, this.httpOptions);
    result.subscribe(products => this.suggestions = products);
    return result;
  }

  createProduct(answer: { product: {name: any},
    answer: {ageRange: any; studying: any; incomeRange: any; }}) {
    return this.http.post(this.productCreationUrl, answer, this.httpOptions);
  }

}
