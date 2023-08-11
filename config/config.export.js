import configLocal from './settings/config.dev';
import configPrd from './settings/config.prd';
import configStg from './settings/config.stg';

export default () => {
    switch ( process.env.NEXT_PUBLIC_RUN_MODE ) {
        case 'DEV': return configLocal;
        case 'STG' : return configStg;
        case 'PRD' : return configPrd;
        default : return configLocal;
    }
}