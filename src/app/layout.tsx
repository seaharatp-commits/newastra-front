import '@mantine/core/styles.css';
import './globals.css';
import { ColorSchemeScript,mantineHtmlProps } from '@mantine/core';
import { UIProvider } from '@/components/providers/UIProvider';
export const metadata={title:'Smart Alliance | Service Desk',description:'ศูนย์บริการภายใน แจ้งปัญหา ติดตามงาน และเบิกวัสดุสำนักงาน'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="th" {...mantineHtmlProps}><head><ColorSchemeScript forceColorScheme="light"/></head><body><UIProvider>{children}</UIProvider></body></html>;}
