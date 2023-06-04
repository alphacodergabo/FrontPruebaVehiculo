import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  UserName : string 
  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.UserName  = localStorage.getItem("NombreCompleto")
    console.log(this.UserName)
  }

}
