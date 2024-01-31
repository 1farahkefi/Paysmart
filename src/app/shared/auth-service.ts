import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthModel } from "./auth-model";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { LoginModel } from "./login-model";
import{ HelpModel } from "./helpModel";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) { }

  signupUser(authData: AuthModel): Observable<any> {
    return this.http.post('', authData).pipe(
      )
    ;
  }
  loginUser(loginData: LoginModel): Observable<any> {
    return this.http.post('http://localhost:3000/firstApp', loginData).pipe(
    );
  }
  Helps(helpData: HelpModel):Observable<any> {
    return this.http.post('mongodb+srv://farahkefi81:bismallah@cluster0.3zusptf.mongodb.net/helps',helpData).pipe(
    );
  }
  }

