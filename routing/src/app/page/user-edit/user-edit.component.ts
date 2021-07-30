import { Component, Input, OnInit } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user$.subscribe(
      user => {
        this.user = user;
        this.setForm();
      }
    );
  }

  validateName(): ValidatorFn {
    return control => {
      control.valueChanges.subscribe(
        val => {
          if (val === 'showid') {
            this.fields[0].type = 'text';
          } else {
            this.fields[0].type = 'hidden';
          }
        }
      );
      return null;
    }
  };

  setForm(): void {
    this.fields = [
      new InputField({key: 'id', label: '', type: 'hidden', value: this.user?.id.toString() || '0',
        validators: [Validators.required, Validators.minLength(5)]}),
      new InputField({key: 'firstName', label: 'First Name', type: 'text', value: this.user?.firstName || '',
        validators: [this.validateName(), Validators.required, Validators.minLength(5)]}),
      new InputField({key: 'lastName', label: 'Last Name', type: 'text', value: this.user?.lastName || '',
        validators: [Validators.required, Validators.minLength(5)]}),
      new InputField({key: 'email', label: 'Email', type: 'email', value: this.user?.email || '',
        validators: [Validators.required, Validators.email]}),
    ];
  }

  onSubmit(formValues: User): void {
    const updateData = {...formValues, id: this.user?.id || 0};
    this.userService.update(updateData).subscribe(
      user => this.router.navigate(['/', 'users'])
    );
  }

}
