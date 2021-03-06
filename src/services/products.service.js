const fetch = require("node-fetch");

export const getAll = async (url = "/") => {
    try {
        const resp = await fetch(url);

        return resp.json();
    } catch (error) {
        console.error(error);
    }
;}
