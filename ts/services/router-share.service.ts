export class RouterShareService{
	private _id: number;

	getId(){
		return this._id;
	}

	setId(id: number){
		this._id = id;
	}
}