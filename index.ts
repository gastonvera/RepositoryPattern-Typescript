// 
import { MongoClient } from 'mongodb';

import { SpartanRepository } from './repositories/SpartanRepository'
import { Spartan } from './entities/Spartan';

//importing Hero classes
import { HeroRepository } from './repositories/HeroRepository'
import { Hero } from './entities/Hero';
import { VillanoRepository } from './repositories/VillanoRepository';
import { Villano } from './entities/Villano';

// creating a function that execute self runs
(async () => {

    // connecting at mongoClient
    const connection = await MongoClient.connect('mongodb://localhost');
    const db = connection.db('warriors');

    
    // our operations
    // creating a spartan
    const spartan = new Spartan('Gaston', 88888);

    // initializing the repository
    const repository = new SpartanRepository(db, 'spartans');

    // call create method from generic repository
    const result = await repository.create(spartan);
    console.log(`spartan inserted with ${result ? 'success' : 'fail'}`)

    //const resultFind = await repository.findOne('626b37f1c67f562d514b3975');
    //console.log(resultFind);


    /**
     * spartan inserted with success
      the count of spartans is 1
     */

      const hero = new Hero('Spider Man', 200);
      const repositoryHero = new HeroRepository(db, 'heroes');
      const resultHero = await repositoryHero.create(hero);
      console.log(`hero inserted with ${result ? 'success' : 'fail'}`)

    /*
    
    const result = await repository.delete('626ac2dbbdc48f2c67113359');
    console.log(`spartan deleted with ${result ? 'success' : 'fail'}`)
    */

    const repositoryVillano = new VillanoRepository(db, 'villanos');
    //repositoryVillano.delete('626b37f1c67f562d514b3977');


    //const villano = new Villano('Dr. Octopussssssssss', 'Dr. Octopussssssssss');

    //repositoryVillano.update('626b37f1c67f562d514b3977', villano);

    //call specific method from spartan class
    const count = await repository.countOfSpartans();
    console.log(`the count of spartans is ${count}`)

    
})();