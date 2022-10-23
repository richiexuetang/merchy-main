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
  value: string;
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
    condition: null,
    value: '',
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
    condition: null,
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
        condition: null,
        value: '',
        children: [
          {
            title: 'Product Name',
            name: 'productName',
            placeholder: '',
            isRequired: true,
            type: 'text',
            errorMessage: 'required field',
            options: [],
            condition: {
              parent: 'existing',
              value: 'New Product',
              checkNull: false,
            },
            value: '',
          },
          {
            title: 'Style Code',
            name: 'styleCode',
            placeholder: '',
            isRequired: true,
            type: 'text',
            errorMessage: 'required field',
            options: [],
            condition: {
              parent: 'existing',
              value: 'New Product',
              checkNull: false,
            },
            value: '',
          },
          {
            title: 'Color',
            name: 'productColor',
            placeholder: '',
            isRequired: true,
            type: 'text',
            errorMessage: 'required field',
            options: [],
            condition: {
              parent: 'existing',
              value: 'New Product',
              checkNull: false,
            },
            value: '',
          },
          {
            title: 'Release Date',
            name: 'productReleaseDate',
            placeholder: 'mm/dd/yyyy',
            isRequired: false,
            type: 'date',
            options: [],
            condition: {
              parent: 'existing',
              value: 'New Product',
              checkNull: false,
            },
            value: '',
          },
          {
            title: 'Retail Price',
            name: 'productRetailPrice',
            isRequired: false,
            type: 'text',
            options: [],
            condition: {
              parent: 'existing',
              value: 'New Product',
              checkNull: false,
            },
            value: '',
          },
          {
            title: 'Notes',
            name: 'productNotes',
            isRequired: false,
            type: 'rich',
            options: [],
            condition: {
              parent: 'existing',
              value: 'New Product',
              checkNull: false,
            },
            value: '',
          },
          {
            title: 'Link to Product',
            name: 'linkToProduct',
            isRequired: false,
            type: 'text',
            options: [],
            condition: {
              parent: 'existing',
              value: 'New Product',
              checkNull: false,
            },
            value: '',
          },
          {
            title: 'Enter the estimated quantity you intend to buy or sell.',
            name: 'buySellQuantity',
            isRequired: false,
            type: 'text',
            options: [],
            condition: {
              parent: 'existing',
              value: 'New Product',
              checkNull: false,
            },
            value: '',
          },
          {
            title: 'URL Link to Product on MerchY',
            name: 'urlLink',
            isRequired: true,
            type: 'text',
            options: [],
            condition: {
              parent: 'existing',
              value: 'Existing Product',
              checkNull: false,
            },
            value: '',
          },
          {
            title: 'Describe what needs to be changed on this product page.',
            name: 'issueDescription',
            isRequired: true,
            type: 'text',
            options: [],
            condition: {
              parent: 'existing',
              value: 'Existing Product',
              checkNull: false,
            },
            value: '',
          },
          {
            title: 'Image Upload',
            name: 'file',
            isRequired: false,
            type: 'file',
            condition: {
              parent: 'existing',
              value: 'New Product',
              checkNull: false,
            },
            value: null,
            children: [
              {
                title: 'Do you own the rights to this image?',
                name: 'rightsToImage',
                isRequired: 'true',
                type: 'radio',
                options: ['Yes', 'No'],
                condition: {
                  parent: 'file',
                  value: '',
                  checkNull: true,
                },
                value: '',
              },
            ],
          },
        ],
      },
    ],
    value: '',
  },
];
