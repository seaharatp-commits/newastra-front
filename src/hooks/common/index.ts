'use client';
import { useEffect,useState } from 'react';
export function useSearchPersist(key:string,initial:string) {
 const [value,setValue]=useState(initial);
 useEffect(()=>{const match=document.cookie.split('; ').find(c=>c.startsWith(key+'='));if(match)try{setValue(decodeURIComponent(match.slice(key.length+1)));}catch{}},[key]);
 return [value,(next:string)=>{setValue(next);document.cookie=key+'='+encodeURIComponent(next)+'; Path=/; Max-Age=604800; SameSite=Lax';}] as const;
}
