import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TestUser, User } from 'src/app/models/user';
import { AdminService } from '../../services/admin-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public users: User[] = [] as User[];
  public testApi: User[] = [] as User[];
  public errorMessage: string | undefined = undefined;

  constructor(private backend: AdminService,private formBuilder:FormBuilder) { }

  profileForm =this.formBuilder.group({
    email:[''],
    password:['']
  });

  login():void {
    this.backend.Post(this.profileForm.value).subscribe((data: User[]) => {
      this.users = data;
    }, (error) => {
      this.errorMessage = error;
    });
    console.log(this.profileForm.value);
    console.log(this.users);
    console.log(this.testApi)
  }

  ngOnInit(): void {
    this.backend.getPost().subscribe((data: TestUser[]) => {
      this.testApi = data;
    }, (error) => {
      this.errorMessage = error;
    });

  }
}
