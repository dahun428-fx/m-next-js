import { InvalidTokenError } from "./error/invalidTokenError";
import { RefreshTokenExpriedError } from "./error/refreshTokenExpiredError";
import { TokenSystemError } from "./error/tokenSystemError";
import TokenChecker from "./tokenChecker";
import TokenRefresher from "./tokenRefresher";

const TokenReloader = async (access_token_key, refresh_token_key) => {

    try {
        TokenChecker(access_token_key);
        return access_token_key;
    } catch (error) {
        console.log('\nTokenReloader error', error)
        if(error instanceof InvalidTokenError){
            let response = await TokenRefresher(refresh_token_key);

            if (response?.error === 'not_authorized') {
                throw new RefreshTokenExpriedError(response.error_description);
            }
            return response?.access_token;
        } 
        if(error instanceof TokenSystemError) {
            throw new TokenSystemError();
        }
    }
}

export default TokenReloader;