const superhero = () =>{
    var mySuperHero = ['Superman', 'Batman', 'Captain America', 'Captain murica', 'Iron man', 'Deadpool'];
    var rand = mySuperHero[Math.round(Math.random() * mySuperHero.length)];
    return rand;
};



const superHandler = async msg => ({
    status:200,
    body: JSON.stringify(superhero(JSON.parse(msg.body)))
});

module.exports = {
    superHandler
};