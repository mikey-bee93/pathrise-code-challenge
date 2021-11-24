class ResponseError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const wrapAsync = fn => {
    return async(req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (e) {
            console.error(e);
            res.status(e.statusCode ?? 500).send(JSON.stringify({ message: e.message }));
        }
    }
};

module.exports = { ResponseError, wrapAsync };