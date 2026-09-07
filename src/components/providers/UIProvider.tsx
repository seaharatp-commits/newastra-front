'use client';
import { MantineProvider,createTheme } from '@mantine/core';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
const theme=createTheme({primaryColor:'blue',primaryShade:9,defaultRadius:'md',fontFamily:'Tahoma, Arial, sans-serif',headings:{fontFamily:'Tahoma, Arial, sans-serif'}});
export function UIProvider({children}:{children:React.ReactNode}){
 const [query]=useState(()=>new QueryClient({defaultOptions:{queries:{staleTime:0,gcTime:0,retry:false,refetchOnWindowFocus:true}}}));
 return <QueryClientProvider client={query}><MantineProvider theme={theme} forceColorScheme="light">{children}</MantineProvider></QueryClientProvider>;
}
