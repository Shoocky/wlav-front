export class LoginShareService{
    private loggedIn: boolean;
    private _id: number;
    private _username : string;

    getId(){
        return this._id;
    }

    setId(id: number){
        this._id = id;
    }

    getUsername(){
        return this._username;
    }

    setUsername(username: string){
        this._username = username;
    }

    setLoggedIn(value: boolean){
        this.loggedIn = value;
    }

    isLoggedIn(): boolean{
        return this.isLoggedIn();
    }
}