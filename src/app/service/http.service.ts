import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import BASE_URL from '../BASE_URL';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// declare var $ :JQuery;
import $ from 'jquery';


@Injectable()
export class HttpService {
    headers : any;
    options : any;
    token : any;
    baseUrl : string = BASE_URL+'api/';
    constructor(private http: Http,private cookieService: CookieService) {

    }
    public get(url,body=null){
        url=this.baseUrl+url;
        this.headers = new Headers({
            'Content-Type':  'application/json',
            'Authorization': 'bearer '+this.cookieService.get('isLogin'),
        });
        this.options = new RequestOptions({ headers: this.headers });
        if(body != null){
            url += "?";
            $.each(body,(key : string,e : string)=>{
                url += key+`=`+e+`&`;
            })
        }
        return this.http.get(url,this.options)
            .map(this.extractData)
            .toPromise()
            .catch(this.handleError);
    }
    public post(url,body?){
        url=this.baseUrl+url;
        this.headers = new Headers({
            'Content-Type':  'application/json',
            'Authorization': 'bearer '+this.cookieService.get('isLogin'),
        });
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.post(url,body,this.options)
        .map(this.extractData)
        .toPromise()
        .catch(this.handleError);
    }
    public delete(url,body=null){
        url=this.baseUrl+url;
        this.headers = new Headers({
            'Content-Type':  'application/json',
            'Authorization': 'bearer '+this.cookieService.get('isLogin'),
        });
        this.options = new RequestOptions({ headers: this.headers });
        if(body != null){
            url += "?";
            $.each(body,(key : string,e)=>{
                url += key+`=`+e+`&`;
            })
        }
        return this.http.delete(url,this.options)
            .map(this.extractData)
            .toPromise()
            .catch(this.handleError);
    }
    public put(url,body?){
        url=this.baseUrl+url;
        this.headers = new Headers({
            'Content-Type':  'application/json',
            'Authorization': 'bearer '+this.cookieService.get('isLogin'),
        });
        this.options = new RequestOptions({ headers: this.headers });
        return this.http.put(url,body,this.options)
        .map(this.extractData)
        .toPromise()
        .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    private handleError (error: Response) {
        if(error.status == 403 || error.status == 401){
            alert("Đăng nhập hết hạn. Mời đăng nhập lại");
        }
        return Observable.throw(error.json().error || "Server error");
      }
}