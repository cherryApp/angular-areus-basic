import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'http';
  private counter: number = 0;
  get currentCounter(): string {
    return `${this.counter} db`;
  }
  footballSubscription: Subscription = new Subscription();

  userList$: Observable<User[]> = this.userService.getAll();

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) {
    // const o2 = new Observable<number>( observer => {
    //   setInterval( () => {
    //     observer.next(3);
    //   }, 500);

    //   setTimeout( () => {
    //     observer.error(new Error('Uncaught syntaxerror'));
    //   }, 3000);

    //   setTimeout( () => {
    //     observer.complete();
    //   }, 5000);
    // });

    // o2.subscribe(
    //   givenNumber => this.title = `http - ${ Math.random() * givenNumber }`,
    //   err => console.error(err),
    //   () => console.log('o2 completed')
    // );
  }

  ngOnInit() {
    const intObservable$ = interval(1000);
    intObservable$.subscribe(
      num => this.counter++, // data change
      err => console.error(err), // error occured
      () => console.log('complete') // complete
    );

    let url = `https://raw.githubusercontent.com/jokecamp/FootballData/master/EPL%202015%20-%202016/2015-10-15.epl-stats.json`;
    this.footballSubscription = this.http.get(url).subscribe(
      data => console.log(data),
      err => console.error(err),
      () => console.log('http observable has been completed')
    );

    this.userList$.subscribe(
      users => console.log(users),
      err => console.error(err)
    );

  }

  ngOnDestroy() {
    this.footballSubscription.unsubscribe();
  }
}
