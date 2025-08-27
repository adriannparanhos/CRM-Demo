export interface ColumnDef {
  key: string;         
  label: string;       
  type?: 'text' | 'date' | 'currency' | 'status'; 
}