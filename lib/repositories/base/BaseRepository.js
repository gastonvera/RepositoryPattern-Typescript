"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
//importo todo lo que necesito de mongodb
const mongodb_1 = require("mongodb");
//Implemento las interfaces en mi clase BaseRepository
class BaseRepository {
    constructor(db, collectionName) {
        this._collection = db.collection(collectionName);
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = { _id: new mongodb_1.ObjectId(id) };
            const t = (yield this._collection.findOne(query));
            return t;
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._collection.insertOne(item);
            return true;
        });
    }
    update(id, item) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = { _id: new mongodb_1.ObjectId(id) };
            yield this._collection.updateOne(query, { $set: item });
            return true;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = { _id: new mongodb_1.ObjectId(id) };
            yield this._collection.deleteOne(query);
            return true;
        });
    }
}
exports.BaseRepository = BaseRepository;
