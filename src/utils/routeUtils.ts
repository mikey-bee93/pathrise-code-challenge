export class ResponseError extends Error {
    private statusCode: number;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const wrapAsync = fn => {
    return async(req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (e) {
            console.error(e);
            res.status(e.statusCode ?? 500).send(JSON.stringify({ message: e.message }));
        }
    }
};