export interface Client {
  client_id?: number;
  first_name: string;
  middle_name?: string;
  last_name: string;
  fullName?: string;
  email: string;
  password?: string;
  birthdate: Date;
  age: number;
  status?: number;
}