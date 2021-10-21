import axios, { AxiosResponse, Method } from "axios";

type Request = {
    token: string;
    path: string;
    method: Method;
    body?: unknown
};

export const request = async <K>(request: Request, errorHandler: (response: AxiosResponse) => Error | null = () => null): Promise<K> => {
    const response = await axios.request({
        url: 'https://api.chaster.app' + request.path,
        headers: {
            'Authorization': 'Bearer ' + request.token
        },
        method: request.method,
        data: request.body
    });

    if (response.status < 200 || response.status >= 300) {
        throw errorHandler(response) || new Error('[Chaster] Non 200 response-code', )
    }

    return response.data as K;
};