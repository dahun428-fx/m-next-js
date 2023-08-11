const getConfigs = (params) => {
    const { baseUrl, mode, apiUrl, ecweb, serverUrl } = params;
    return {
        baseUrl, mode, apiUrl, ecweb, serverUrl
    }
    // return {
    //     ...params,
    // }
}
export default getConfigs;