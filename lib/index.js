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
//Importo mongo
const mongodb_1 = require("mongodb");
//Importo la clases que necesito de spartan
const SpartanRepository_1 = require("./repositories/SpartanRepository");
const Spartan_1 = require("./entities/Spartan");
//Importo la clases que necesito de hero
const HeroRepository_1 = require("./repositories/HeroRepository");
const Hero_1 = require("./entities/Hero");
//Importo la clases que necesito de villano
const VillanoRepository_1 = require("./repositories/VillanoRepository");
const Villano_1 = require("./entities/Villano");
//Creo un metodo asincrono que ejecute la conexion con mongo y algunas acciones
(() => __awaiter(void 0, void 0, void 0, function* () {
    //Conexion con mongodb y creo una variable de tipo Db
    const connection = yield mongodb_1.MongoClient.connect('mongodb://localhost');
    const db = connection.db('warriors');
    //Creo algunas instancias de las clases que necesito
    const spartan = new Spartan_1.Spartan('Leonidas', 88888);
    const hero = new Hero_1.Hero('Spider Man', 200);
    const villano = new Villano_1.Villano('Dr. Otto', 'Octavius');
    //Modificados
    const spartanModified = new Spartan_1.Spartan('Amiclas', 11111);
    const heroModified = new Hero_1.Hero('Batman', 500);
    const villanoModified = new Villano_1.Villano('Galactus', 'Marvel');
    //Inicializo los repositorios
    const repositorySpartan = new SpartanRepository_1.SpartanRepository(db, 'spartans');
    const repositoryHero = new HeroRepository_1.HeroRepository(db, 'heroes');
    const repositoryVillano = new VillanoRepository_1.VillanoRepository(db, 'villanos');
    //Inserto algunos elementos en los repositorios
    //Spartan
    const resultSpartan = yield repositorySpartan.create(spartan);
    console.log(`spartan inserted with ${resultSpartan ? 'success' : 'fail'}`);
    //Hero
    const resultHero = yield repositoryHero.create(hero);
    console.log(`hero inserted with ${resultHero ? 'success' : 'fail'}`);
    //Villano
    const resultVillano = yield repositoryVillano.create(villano);
    console.log(`villano inserted with ${resultVillano ? 'success' : 'fail'}`);
    /*

    //Elimino algunos elementos de los repositorios
    //Spartan
    const resultSpartanDelete = await repositorySpartan.delete('');
    console.log(`spartan deleted with ${resultSpartanDelete ? 'success' : 'fail'}`);
    //Hero
    const resultHeroDelete = await repositoryHero.delete('');
    console.log(`hero deleted with ${resultHeroDelete ? 'success' : 'fail'}`);
    //Villano
    const resultVillanoDelete = await repositoryVillano.delete('');
    console.log(`villano deleted with ${resultVillanoDelete ? 'success' : 'fail'}`);

    */
    /*

    //Actualizo algunos elementos de los repositorios
    //Spartan
    const resultSpartanUpdate = await repositorySpartan.update('', spartanModified);
    console.log(`spartan updated with ${resultSpartanUpdate ? 'success' : 'fail'}`);
    //Hero
    const resultHeroUpdate = await repositoryHero.update('', heroModified);
    console.log(`hero updated with ${resultHeroUpdate ? 'success' : 'fail'}`);
    //Villano
    const resultVillanoUpdate = await repositoryVillano.update('', villanoModified);
    console.log(`villano updated with ${resultVillanoUpdate ? 'success' : 'fail'}`);

    */
    /*

    //Busco algunos elementos de los repositorios
    //Spartan
    const resultSpartanFindOne = await repositorySpartan.findOne('');
    console.log(`spartan findOne with ${resultSpartanFindOne ? 'success' : 'fail'}`);
    console.log(resultSpartanFindOne);
    //Hero
    const resultHeroFindOne = await repositoryHero.findOne('');
    console.log(`hero findOne with ${resultHeroFindOne ? 'success' : 'fail'}`);
    console.log(resultHeroFindOne);
    //Villano
    const resultVillanoFindOne = await repositoryVillano.findOne('');
    console.log(`villano findOne with ${resultVillanoFindOne ? 'success' : 'fail'}`);
    console.log(resultVillanoFindOne);

    */
    //Cuento la cantidad de elementos de los repositorios
    //Spartan
    const resultSpartanCount = yield repositorySpartan.countOfSpartans();
    console.log('There are ' + resultSpartanCount + ' spartans');
}))();
