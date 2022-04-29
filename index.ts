//Importo mongo
import { MongoClient } from 'mongodb';

//Importo la clases que necesito de spartan
import { SpartanRepository } from './repositories/SpartanRepository';
import { Spartan } from './entities/Spartan';

//Importo la clases que necesito de hero
import { HeroRepository } from './repositories/HeroRepository';
import { Hero } from './entities/Hero';

//Importo la clases que necesito de villano
import { VillanoRepository } from './repositories/VillanoRepository';
import { Villano } from './entities/Villano';

//Creo un metodo asincrono que ejecute la conexion con mongo y algunas acciones
(async () => {

    //Conexion con mongodb y creo una variable de tipo Db
    const connection = await MongoClient.connect('mongodb://localhost');
    const db = connection.db('warriors');

    
    //Creo algunas instancias de las clases que necesito
    const spartan = new Spartan('Leonidas', 88888);
    const hero = new Hero('Spider Man', 200);
    const villano = new Villano('Dr. Otto', 'Octavius');

    //Modificados
    const spartanModified = new Spartan('Amiclas', 11111);
    const heroModified = new Hero('Batman', 500);
    const villanoModified = new Villano('Galactus', 'Marvel');


    //Inicializo los repositorios
    const repositorySpartan = new SpartanRepository(db, 'spartans');
    const repositoryHero = new HeroRepository(db, 'heroes');
    const repositoryVillano = new VillanoRepository(db, 'villanos');

    //Inserto algunos elementos en los repositorios
    //Spartan
    const resultSpartan = await repositorySpartan.create(spartan);
    console.log(`spartan inserted with ${resultSpartan ? 'success' : 'fail'}`);
    //Hero
    const resultHero = await repositoryHero.create(hero);
    console.log(`hero inserted with ${resultHero ? 'success' : 'fail'}`);
    //Villano
    const resultVillano = await repositoryVillano.create(villano);
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
    const resultSpartanCount = await repositorySpartan.countOfSpartans();
    console.log('There are ' + resultSpartanCount + ' spartans');
    
})();