export class RefreshTokenExpriedError extends Error {
    constructor (message) {
        super();
        this.title = 'refreshTokenExiredError';
        this.type= 'title';
        this.message = message;
    }
}