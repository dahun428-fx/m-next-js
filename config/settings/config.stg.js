import getConfigs from "./config.common";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const mode = process.env.NEXT_PUBLIC_RUN_MODE;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const ecweb = {
    catalog_first_directory : {
        path : '/vona2'
    },
    cookie : {
        gAccessTokenKeyDomain : '.misumi-ec.local',
    }
}
export default getConfigs({
    baseUrl, mode, apiUrl, serverUrl, ecweb
})