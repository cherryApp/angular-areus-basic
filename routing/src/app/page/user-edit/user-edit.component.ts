import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user$: Observable<User> = this.ar.params.pipe(
    switchMap( params => this.userService.get(params.id) ),
  );
  user: User | null = null;

  fields: FieldBase<any>[] = [];

  constructor(
    private ar: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.user$.subscribe(
      user => {
        this.setForm(user);
        this.user = user;
      }
    );
  }

  setForm(user: User): void {
    this.fields = [
      new InputField({key: 'firstName', label: 'First Name', type: 'text', value: user.firstName || ''})
    ];
  }

  onSubmit(formValues: User): void {
    console.log(formValues);
  }

}
