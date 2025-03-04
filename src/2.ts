const getRandomTsCode = () => {
    const codes = ['101', '201', '301', '401', '501'];
    return codes[Math.floor(Math.random() * 5)];
};

module.exports = { getRandomTsCode };