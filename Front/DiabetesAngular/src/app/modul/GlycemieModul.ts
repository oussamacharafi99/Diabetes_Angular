export interface Glycemie {

  Id: number
  user: User
  Valuer: number
  date: string
  heures: string
}
export interface User{
  id: number
  username: string
  email: string
  age: number
  password: string
  valeurGlycemie:Array<Glycemie>
}
