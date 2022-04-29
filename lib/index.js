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
// 
const mongodb_1 = require("mongodb");
const SpartanRepository_1 = require("./repositories/SpartanRepository");
const Spartan_1 = require("./entities/Spartan");
//importing Hero classes
const HeroRepository_1 = require("./repositories/HeroRepository");
const Hero_1 = require("./entities/Hero");
const VillanoRepository_1 = require("./repositories/VillanoRepository");
// creating a function that execute self runs
(() => __awaiter(void 0, void 0, void 0, function* () {
    // connecting at mongoClient
    const connection = yield mongodb_1.MongoClient.connect('mongodb://localhost');
    const db = connection.db('warriors');
    // our operations
    // creating a spartan
    const spartan = new Spartan_1.Spartan('Gaston', 88888);
    // initializing the repository
    const repository = new SpartanRepository_1.SpartanRepository(db, 'spartans');
    // call create method from generic repository
    const result = yield repository.create(spartan);
    console.log(`spartan inserted with ${result ? 'success' : 'fail'}`);
    //const resultFind = await repository.findOne('626b37f1c67f562d514b3975');
    //console.log(resultFind);
    repository.delete('626b37f1c67f562d514b3975');
    /**
     * spartan inserted with success
      the count of spartans is 1
     */
    const hero = new Hero_1.Hero('Spider Man', 200);
    const repositoryHero = new HeroRepository_1.HeroRepository(db, 'heroes');
    const resultHero = yield repositoryHero.create(hero);
    console.log(`hero inserted with ${result ? 'success' : 'fail'}`);
    /*
    
    const result = await repository.delete('626ac2dbbdc48f2c67113359');
    console.log(`spartan deleted with ${result ? 'success' : 'fail'}`)
    */
    const repositoryVillano = new VillanoRepository_1.VillanoRepository(db, 'villanos');
    //repositoryVillano.delete('626b37f1c67f562d514b3977');
    //const villano = new Villano('Dr. Octopussssssssss', 'Dr. Octopussssssssss');
    //repositoryVillano.update('626b37f1c67f562d514b3977', villano);
    //call specific method from spartan class
    const count = yield repository.countOfSpartans();
    console.log(`the count of spartans is ${count}`);
}))();
