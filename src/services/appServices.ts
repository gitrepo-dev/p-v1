
/**
 * get all app data
 * @param {''}
 * @returns {null}
 */

export const getAppService = async (): Promise<object> => {
    try {
        const res = await fetch('https://bodegaproduction.azurewebsites.net/filterPublicURL/', {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                ownerMetaUserID: 4
            })
        });
        return await res.json()
    } catch (e) {
        throw e
    }
};


/**
 * get all app data
 * @param {''}
 * @returns {null}
 */

 export const getMetaUserService = async (id:number | string): Promise<object> => {
    try {
        const res = await fetch('https://bodegaproduction.azurewebsites.net/bodega-api/filterMetaUserTags/', {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                metauserID: id
            })
        });
        return await res.json()
    } catch (e) {
        throw e
    }
};
