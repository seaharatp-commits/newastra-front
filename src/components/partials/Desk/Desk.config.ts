export const TEAMS=['Fullstack','Tester','Sales','Project Coordinator','Admin','Tech Support'];
export const STATUS:Record<string,string>={new:'งานใหม่',accepted:'รับงานแล้ว',in_progress:'กำลังดำเนินการ',testing:'รอทดสอบ',closed:'เสร็จสิ้น',pending:'รออนุมัติ',approved:'อนุมัติแล้ว',issued:'จ่ายแล้ว',rejected:'ไม่อนุมัติ',cancelled:'ยกเลิก'};
export const COLORS:Record<string,string>={new:'blue',accepted:'cyan',in_progress:'orange',testing:'violet',closed:'teal',pending:'orange',approved:'blue',issued:'teal',rejected:'red',cancelled:'gray'};
export const PRIORITY:Record<string,string>={low:'ต่ำ',normal:'ปกติ',high:'สูง',urgent:'เร่งด่วน'};
export const KINDS:Record<string,string>={request:'คำขอทั่วไป',bug:'แจ้งบั๊ก',support:'ปัญหา IT'};
export const date=(value:string)=>new Intl.DateTimeFormat('th-TH',{dateStyle:'medium',timeStyle:'short'}).format(new Date(value));
export const options=(record:Record<string,string>)=>Object.entries(record).map(([value,label])=>({value,label}));
