import { BaseRepository } from "./base/BaseRepository";
import { Spartan } from "../entities/Spartan"

export class SpartanRepository extends BaseRepository<Spartan>{

    //Metodo que cuenta la cantidad de spartanes
    countOfSpartans(): Promise<number> {
        return this._collection.count({})
    }
}