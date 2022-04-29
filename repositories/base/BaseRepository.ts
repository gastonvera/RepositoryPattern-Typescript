//importo todo lo que necesito de mongodb
import {Db, Collection, ObjectId } from 'mongodb';

//importo todo lo que necesito de la clase generica
import { ICRUD } from "../intefaces/ICRUD";


//Implemento las interfaces en mi clase BaseRepository
export abstract class BaseRepository<T> implements ICRUD<T> {

    public readonly _collection: Collection;

    constructor(db: Db, collectionName: string) {
        this._collection = db.collection(collectionName);
    }

    //Busco un elemento por su id
    async findOne(id: string): Promise<T> {
        const query = { _id: new ObjectId(id) };
        const t = (await this._collection.findOne(query)) as unknown as T;
        return t;
    }

    //Creo un elemento
    async create(item: T): Promise<boolean> {
        await this._collection.insertOne(item);
        return true;
    }

    //Actualizo un elemento
    async update(id: string, item: T): Promise<boolean> {
        const query = { _id: new ObjectId(id) };
        await this._collection.updateOne(query, { $set: item });
        return true;
    }

    //Elimino un elemento
    async delete(id: string): Promise<boolean> {
        const query = { _id: new ObjectId(id) };
        await this._collection.deleteOne(query);
        return true;
    }
}

