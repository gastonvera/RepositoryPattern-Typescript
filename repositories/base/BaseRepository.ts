//Importo las interfaces
import { IWrite } from "../intefaces/IWrite";
import { IRead } from "../intefaces/IRead";

//importo todo lo que necesito de mongodb
import { MongoClient, Db, Collection } from 'mongodb';


//Implemento las interfaces en mi clase BaseRepository
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    public readonly _collection: Collection;

    constructor(db: Db, collectionName: string) {
        this._collection = db.collection(collectionName);
      }

    /*async findOne(id: string): Promise<T> {
        return await this._collection.findOne({ _id: id });
    }*/


    async create(item: T): Promise<boolean> {
        await this._collection.insertOne(item);
        return true;
      }

    async update(id: string, item: T): Promise<boolean> {
        await this._collection.updateOne({ _id: id }, { $set: item });
        return true;
    }

    async delete(id: string): Promise<boolean> {
        await this._collection.deleteOne({ _id: id });
        return true;
    }
}

