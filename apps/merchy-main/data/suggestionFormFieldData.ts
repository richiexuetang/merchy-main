interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
}

declare const File: {
  prototype: File;
  new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};

export interface SuggestionFormconditionsType {
  parent: string;
  value: string[];
  checkNull: boolean;
}

export interface SuggestionFormFieldType {
  title: string;
  name: string;
  placeholder?: string;
  isRequired: boolean;
  type: string;
  errorMessage?: string;
  children?: SuggestionFormFieldType[];
  options?: string[];
  conditions?: SuggestionFormconditionsType[];
  value: string | File | undefined;
  label?: string;
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
    conditions: [],
    value: '',
  },
  {
    title:
      'Are you suggesting a new product or a change to an existing product?',
    name: 'existing',
    isRequired: true,
    type: 'radio',
    errorMessage: 'required field',
    options: ['New Product', 'Existing Product'],
    conditions: [],
    children: [
      {
        title: 'Product Category',
        name: 'productCategory',
        isRequired: true,
        type: 'radio',
        options: [
          'Sneakers',
          'Apparel',
          'Accessories',
          'Collectibles',
          'Trading Cards',
          'Electronics',
        ],
        conditions: [],
        value: '',
        children: [
          {
            title: 'Please select a product category:',
            name: 'accessoriesSubcategory',
            isRequired: true,
            type: 'radio',
            errorMessage: 'required field',
            options: [
              'Handbags',
              'Watches',
              'Sunglasses',
              'Electronics',
              'Other',
            ],
            conditions: [
              {
                parent: 'productCategory',
                value: ['Accessories'],
                checkNull: false,
              },
            ],
            value: '',
          },
          {
            title: '',
            name: 'electronicsInstructions',
            isRequired: false,
            type: 'label',
            options: [],
            conditions: [
              {
                parent: 'productCategory',
                value: ['Electronics'],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: '',
            label:
              'In the text box below, please provide the following information about the product. This information is required. Requests without sufficient product information will not be considered. <ul><li>Model/Manufacturer Number</li><li>UPC</li><li>Model/Release Date</li><li>Link to Product</li></ul>',
          },
          {
            title: 'Description',
            name: 'electronicsDescription',
            isRequired: true,
            type: 'rich',
            errorMessage: 'required field',
            options: [],
            conditions: [
              {
                parent: 'productCategory',
                value: ['Electronics'],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: '',
          },
          {
            title: 'Is this a sealed box or graded card?',
            name: 'tradingCardCategory',
            isRequired: true,
            type: 'radio',
            errorMessage: 'required field',
            options: ['Sealed Box', 'Graded Card'],
            conditions: [
              {
                parent: 'productCategory',
                value: ['Trading Cards'],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: '',
          },
          {
            title: 'Product Name',
            name: 'productName',
            placeholder: '',
            isRequired: true,
            type: 'text',
            errorMessage: 'required field',
            options: [],
            conditions: [
              {
                parent: 'productCategory',
                value: ['Apparel', 'Accessories', 'Collectibles', 'Sneakers'],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
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
            conditions: [
              {
                parent: 'productCategory',
                value: ['Sneakers'],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: '',
          },
          {
            title: 'Color',
            name: 'color',
            placeholder: '',
            isRequired: true,
            type: 'text',
            errorMessage: 'required field',
            options: [],
            conditions: [
              {
                parent: 'productCategory',
                value: ['Apparel', 'Accessories', 'Collectibles', 'Sneakers'],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: '',
          },
          {
            title: 'Season',
            name: 'season',
            placeholder: '',
            isRequired: false,
            type: 'text',
            options: [],
            conditions: [
              {
                parent: 'productCategory',
                value: ['Apparel', 'Accessories', 'Collectibles'],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: '',
          },
          {
            title: 'Release Date',
            name: 'releaseDate',
            placeholder: 'mm/dd/yyyy',
            isRequired: false,
            type: 'date',
            options: [],
            conditions: [
              {
                parent: 'productCategory',
                value: ['Apparel', 'Accessories', 'Collectibles'],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: undefined,
          },
          {
            title: 'Retail Price',
            name: 'retailPrice',
            isRequired: false,
            type: 'number',
            options: [],
            conditions: [
              {
                parent: 'productCategory',
                value: ['Apparel', 'Sneakers', 'Collectibles'],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: undefined,
          },
          {
            title: 'Dimensions',
            name: 'dimensionsInInches',
            isRequired: false,
            placeholder: 'in inches',
            type: 'text',
            options: [],
            conditions: [
              {
                parent: 'productCategory',
                value: ['Collectibles'],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: '',
          },
          {
            title: 'Notes',
            name: 'notes',
            isRequired: false,
            type: 'rich',
            options: [],
            conditions: [
              {
                parent: 'productCategory',
                value: ['Apparel', 'Sneakers', 'Collectibles', 'Accessories'],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: '',
          },
          {
            title: 'Link to Product',
            name: 'link',
            isRequired: false,
            type: 'text',
            options: [],
            conditions: [
              {
                parent: 'productCategory',
                value: [
                  'Apparel',
                  'Accessories',
                  'Collectibles',
                  'Sneakers',
                  'Electronics',
                  'Trading Cards',
                ],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: '',
          },
          {
            title: 'Do you intend to buy or sell this product?',
            name: 'buySellIntention',
            isRequired: false,
            type: 'radio',
            options: ['Buy', 'Sell'],
            conditions: [
              {
                parent: 'productCategory',
                value: [
                  'Apparel',
                  'Accessories',
                  'Collectibles',
                  'Sneakers',
                  'Electronics',
                  'Trading Cards',
                ],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: '',
          },
          {
            title: 'Enter the estimated quantity you intend to buy or sell.',
            name: 'buySellQuantity',
            isRequired: false,
            type: 'number',
            options: [],
            conditions: [
              {
                parent: 'productCategory',
                value: [
                  'Apparel',
                  'Accessories',
                  'Collectibles',
                  'Sneakers',
                  'Electronics',
                  'Trading Cards',
                ],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: undefined,
          },
          {
            title: 'URL Link to Product on MerchY',
            name: 'urlLink',
            isRequired: true,
            type: 'text',
            options: [],
            conditions: [
              {
                parent: 'existing',
                value: ['Existing Product'],
                checkNull: false,
              },
            ],
            value: '',
          },
          {
            title: 'Describe what needs to be changed on this product page.',
            name: 'issueDescription',
            isRequired: true,
            type: 'rich',
            options: [],
            conditions: [
              {
                parent: 'existing',
                value: ['Existing Product'],
                checkNull: false,
              },
            ],
            value: '',
          },
          {
            title: 'Would you like to upload an image of this product?',
            name: 'file',
            isRequired: false,
            type: 'file',
            conditions: [
              {
                parent: 'productCategory',
                value: [
                  'Apparel',
                  'Accessories',
                  'Collectibles',
                  'Sneakers',
                  'Electronics',
                  'Trading Cards',
                ],
                checkNull: false,
              },
              {
                parent: 'existing',
                value: ['New Product'],
                checkNull: false,
              },
            ],
            value: '',
            children: [
              {
                title: 'Do you own the rights to this image?',
                name: 'rightsToImage',
                isRequired: true,
                type: 'radio',
                options: ['Yes', 'No'],
                conditions: [
                  {
                    parent: 'file',
                    value: null,
                    checkNull: true,
                  },
                ],
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
