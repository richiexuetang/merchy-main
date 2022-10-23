export interface SuggestionFormFieldType {
  title: string;
  name: string;
  placeholder?: string;
  isRequired: boolean;
  type: string;
  errorMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any[];
  options?: string[];
  condition?: string;
}

export const suggestionFormFields: SuggestionFormFieldType[] = [
  {
    title: 'Email',
    name: 'email',
    placeholder: 'Email',
    isRequired: true,
    type: 'text',
    errorMessage: 'Email is a required field',
    options: [],
  },
  {
    title:
      'Are you suggesting a new product or a change to an existing product?',
    name: 'existing',
    placeholder: '',
    isRequired: true,
    type: 'radio',
    errorMessage: 'required field',
    options: ['New Product', 'Existing Product'],
    children: [
      {
        title: 'Product Category',
        name: 'productCategory',
        placeHolder: '',
        isRequired: true,
        type: 'radio',
        options: [
          'Sneakers',
          'Apparel',
          'Accesories',
          'Collectibles',
          'Trading Cards',
          'Electronics',
        ],
        children: [
          {
            title: 'Product Name',
            name: 'productName',
            placeholder: '',
            isRequired: true,
            type: 'text',
            errorMessage: 'required field',
            options: [],
            condition: 'New Product',
          },
          {
            title: 'Style Code',
            name: 'styleCode',
            placeholder: '',
            isRequired: true,
            type: 'text',
            errorMessage: 'required field',
            options: [],
            condition: 'New Product',
          },
          {
            title: 'Color',
            name: 'productColor',
            placeholder: '',
            isRequired: true,
            type: 'text',
            errorMessage: 'required field',
            options: [],
            condition: 'New Product',
          },
          {
            title: 'Release Date',
            name: 'productReleaseDate',
            placeholder: 'mm/dd/yyyy',
            isRequired: false,
            type: 'text',
            options: [],
            condition: 'New Product',
          },
          {
            title: 'Retail Price',
            name: 'productRetailPrice',
            isRequired: false,
            type: 'text',
            options: [],
            condition: 'New Product',
          },
          {
            title: 'Notes',
            name: 'productNotes',
            isRequired: false,
            type: 'text',
            options: [],
            condition: 'New Product',
          },
          {
            title: 'Link to Product',
            name: 'linkToProduct',
            isRequired: false,
            type: 'text',
            options: [],
            condition: 'New Product',
          },
          {
            title: 'Enter the estimated quantity you intend to buy or sell.',
            name: 'buySellQuantity',
            isRequired: false,
            type: 'text',
            options: [],
            condition: 'New Product',
          },
          {
            title: 'URL Link to Product on MerchY',
            name: 'urlLink',
            isRequired: true,
            type: 'text',
            options: [],
            condition: 'Existing Product',
          },
          {
            title: 'Describe what needs to be changed on this product page.',
            name: 'issueDescription',
            isRequired: true,
            type: 'text',
            options: [],
            condition: 'Existing Product',
          },
        ],
      },
    ],
  },
];
