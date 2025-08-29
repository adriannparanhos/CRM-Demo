export interface FormDef {
    key: string;
    label: string;
    type?: 'text' | 'date' | 'currency' | 'status' | 'select' | 'email' | 'number'; 
    isFormField?: boolean;
    isTableColumn?: boolean;
    placeholder?: string;
    validators?: import('@angular/forms').ValidatorFn[];
    initialValue?: any;
}