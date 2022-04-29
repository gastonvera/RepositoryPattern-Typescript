"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpartanRepository = void 0;
const BaseRepository_1 = require("./base/BaseRepository");
class SpartanRepository extends BaseRepository_1.BaseRepository {
    //Metodo que cuenta la cantidad de spartanes
    countOfSpartans() {
        return this._collection.count({});
    }
}
exports.SpartanRepository = SpartanRepository;
