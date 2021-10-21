import axios, { Axios } from "axios";
import { request } from "../requests/request";
import { ChasterId } from "../types/ChasterId";
import { Lock } from "../types/Lock";
import {search as searchR} from './search';
import {categories as categoriesR} from './categories';

export module publicLocks {

    export const findById = async (token: string, id: ChasterId): Promise<Lock> => {
        return await request<Lock>({
            method: 'GET',
            path: '/public-locks/'+id,
            token: token
        }, (e) => (e.status == 404 ? new Error('Shared lock not found') : null));
    }

    export const search = searchR;

    export const categories = categoriesR;
};