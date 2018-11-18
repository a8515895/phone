import { Injectable,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular/index';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import BASE_URL from '../BASE_URL';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// declare var $ :JQuery;
import $ from 'jquery';

@Injectable()
export class HttpService {
    headers : any;
    options : any;
    token : any;
    baseUrl : string = BASE_URL+'api/';
    @ViewChild('mycontent') nav : NavController;
    constructor(private http: Http) {

    }
    public get(url,body=null){
        url=this.baseUrl+url;
        console.log("test header",localStorage.getItem('isLogin'));
        this.headers = new Headers({
            'Content-Type':  'application/json',
            'Authorization': 'bearer '+localStorage.getItem('isLogin'),
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
            'Authorization': 'bearer '+('isLogin'),
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
            'Authorization': 'bearer '+localStorage.getItem('isLogin'),
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
            'Authorization': 'bearer '+localStorage.getItem('isLogin'),
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
        return Observable.throw(error.status || "Server error");
    }
}