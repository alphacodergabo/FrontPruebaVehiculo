import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.error(error);
    });
  }

  LoggedIn(){
    const token = localStorage.getItem('token');
    return!!token;//para retornar si true or false
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('UserId');
    localStorage.removeItem('NombreCompleto');
    this.model = null
    window.location.reload();
  }
}
