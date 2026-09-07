import { client } from '@/lib/api/client';
export const getApi = async <T,>(path:string):Promise<T> => (await client.get<T>(path)).data;
export const postApi = async <T,>(path:string,data:unknown):Promise<T> => (await client.post<T>(path,data)).data;
export const patchApi = async (path:string,data:unknown) => (await client.patch(path,data)).data;
