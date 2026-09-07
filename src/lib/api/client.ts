import axios from 'axios';
export const client = axios.create({baseURL:'/api',headers:{'Content-Type':'application/json'}});
export const errorText = (error:unknown) => axios.isAxiosError(error) ? error.response?.data?.error || 'เชื่อมต่อระบบไม่ได้ กรุณาลองอีกครั้ง' : 'เกิดข้อผิดพลาด กรุณาลองอีกครั้ง';
