import { request } from "../requests/request";
import { ChasterId } from "../types/ChasterId";
import { Lock } from "../types/Lock";

export type SearchQuery = {
    criteria: unknown,
    limit: number,
    lastId?: ChasterId
}

export type SearchResponse = {
    count: number,
    hasMore: boolean,
    results: Lock[]
};

export const search = async (token: string, search: SearchQuery): Promise<SearchResponse> => {
    return await request<SearchResponse>({
        method: 'POST',
        path: '/public-locks/search',
        token: token,
        body: search
    });
}