export type User = { id:number; name:string; email:string; team:string; role:'admin'|'member' };
export type Ticket = { id:number; title:string; description:string; kind:string; priority:string; team:string; project:string; steps:string; expected:string; actual:string; status:string; creator_id:number; assignee_id:number|null; created_at:string; updated_at:string };
export type Comment = { id:number; body:string; name:string; system:number; created_at:string };
export type Detail = Ticket & { comments:Comment[] };
export type Material = { id:number; name:string; unit:string; stock:number; minimum:number };
export type Requisition = { id:number; material_id:number; material_name:string; unit:string; user_id:number; requester:string; quantity:number; reason:string; status:string; note:string; created_at:string };
export type Movement = { id:number; name:string; unit:string; actor:string; delta:number; note:string; created_at:string };
