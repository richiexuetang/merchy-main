export interface AddToPortfolioFormFieldType {
  title: string;
  name: string;
  placeholder?: string;
  isRequired: boolean;
  type: string;
  errorMessage?: string;
  children?: AddToPortfolioFormFieldType[];
  options?: string[];
  conditions?: [];
  value: string | File | undefined;
  label?: string;
}

export const addToPortfolioFormFields: AddToPortfolioFormFieldType[] = [
  {
    title: 'Purchase Date',
    name: 'purchaseDate',
    placeholder: 'mm/dd/yyyy',
    isRequired: false,
    type: 'date',
    options: [],
    conditions: [],
    value: undefined,
  },
  {
    title: 'Purchase Price',
    name: 'purchasePrice',
    isRequired: false,
    type: 'number',
    options: [],
    conditions: [],
    value: undefined,
  },
];
