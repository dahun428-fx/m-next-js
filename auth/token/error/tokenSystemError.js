export class TokenSystemError extends Error {
    constructor(){
        super();
        this.title='tokenSystemError';
        this.type='TokenSystemError';
        this.message='token system error'
    }
}