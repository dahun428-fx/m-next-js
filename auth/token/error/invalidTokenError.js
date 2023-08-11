    export class InvalidTokenError extends Error {
        constructor() {
            super();
            this.title='invalidTokenError';
            this.type='InvalidTokenError'
            this.message='invalidToken';
        }
    }