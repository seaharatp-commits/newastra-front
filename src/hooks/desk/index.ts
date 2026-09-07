'use client';
import { useQuery } from '@tanstack/react-query';
import { desk } from '@/services/desk.service';
export const DESK_QUERY_KEY = ['desk'] as const;
export function useDesk(enabled:boolean,inventory:boolean) {
 const tickets=useQuery({queryKey:[...DESK_QUERY_KEY,'tickets'],queryFn:desk.tickets,enabled});
 const users=useQuery({queryKey:[...DESK_QUERY_KEY,'users'],queryFn:desk.users,enabled});
 const materials=useQuery({queryKey:[...DESK_QUERY_KEY,'materials'],queryFn:desk.materials,enabled});
 const requisitions=useQuery({queryKey:[...DESK_QUERY_KEY,'requisitions'],queryFn:desk.requisitions,enabled});
 const movements=useQuery({queryKey:[...DESK_QUERY_KEY,'movements'],queryFn:desk.movements,enabled:enabled&&inventory});
 return {tickets,users,materials,requisitions,movements};
}
