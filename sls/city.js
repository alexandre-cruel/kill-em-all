const city = () => Math.random();



const cityHandler = async msg => ({
    status:200,
    body: JSON.stringify("Lyon :" + city(JSON.parse(msg.body)))
});

module.exports = {
    cityHandler
};