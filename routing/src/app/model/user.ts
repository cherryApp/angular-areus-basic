export class User {
  [propname: string]: any;
  id: number = 0;
  firstName?: string = '';
  lastName?: string = '';
  email?: string = '';
  password: string = '';
  accessToken?: string = '';
}
