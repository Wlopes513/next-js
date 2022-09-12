export default class Client {
   public _id: string
   public _name: string
   public _age: number

    constructor(name: string, age: number, id: string = null) {
        this._id = id
        this._name = name
        this._age = age
    }

    static empty() {
        return new Client('', 0)
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get age() {
        return this._age
    }
}