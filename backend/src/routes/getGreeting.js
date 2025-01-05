const GREETING = 'Hello world everyone ';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
