import {Injectable} from '@angular/core';
import {WebApiService} from "./web-api.service";
import {Observable} from "rxjs";

var apiUrl = "http://localhost:8080";

var httpLink = {
  getAllPost: apiUrl + "/api/post/getAll",
  deletePostById: apiUrl + "/api/post/deletePost",
  getPostById: apiUrl + "/api/post/getPostById",
  addPost: apiUrl + "/api/post/addPost"
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllPost(): Observable<any> {
    return this.webApiService.get(httpLink.getAllPost);
  }

  public getPostById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getPostById + '/' + model);
  }

  public deletePostById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deletePostById + '/' + model, "");
  }

  public addPost(model: any): Observable<any> {
    return this.webApiService.post(httpLink.addPost, model);
  }
}
