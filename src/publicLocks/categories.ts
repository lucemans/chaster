import { request } from "../requests/request";
import { Category } from "../types/Category";
import { Lock } from "../types/Lock";

export type CategoriesResponse = {
    category: Category,
    locks: Lock[]
}[];

export const categories = async (token: string): Promise<CategoriesResponse> => {
    return await request<CategoriesResponse>({
        method: 'GET',
        path: '/explore/categories',
        token: token
    });
}