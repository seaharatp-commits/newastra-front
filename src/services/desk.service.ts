import { getApi,postApi,patchApi } from '@/lib/api/api-main';
import type { User,Ticket,Detail,Material,Requisition,Movement } from '@/types/app';
export const desk = {
 me:()=>getApi<User>('/me'), setup:()=>getApi<{required:boolean}>('/setup'),
 users:()=>getApi<User[]>('/users'), tickets:()=>getApi<Ticket[]>('/tickets'),
 ticket:(id:number)=>getApi<Detail>('/tickets/'+id),
 materials:()=>getApi<Material[]>('/materials'), requisitions:()=>getApi<Requisition[]>('/requisitions'),
 movements:()=>getApi<Movement[]>('/movements'),
 post:postApi, patch:patchApi,
};
