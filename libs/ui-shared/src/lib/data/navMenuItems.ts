export interface ItemAttributes {
  title: string;
  url: string;
  type: string;
  submenu?: any;
}

export enum ItemTypes {
  Dropdown = 'dropdown',
  Link = 'link',
  Icon = 'icon',
  Button = 'button',
}

export interface MenuItem {
  title: string;
  url: string;
  type: string;
  submenu?: ItemAttributes[];
}

export const navMenuItems: MenuItem[] = [
  {
    title: 'Browse',
    url: '/browse',
    type: 'dropdown',
    submenu: [
      {
        title: 'Sneakers',
        url: 'sneakers',
        type: 'dropdown',
        submenu: [
          {
            title: 'Adidas',
            url: 'adidas',
            type: 'dropdown',
            submenu: [
              {
                title: 'Yeezy',
                url: 'yeezy',
              },
              {
                title: 'Ultra Boost',
                url: 'ultra-boost',
              },
              {
                title: 'NMD',
                url: 'nmd',
              },
              {
                title: 'Iniki',
                url: 'iniki',
              },
              {
                title: 'Stan Smith',
                url: 'stan-smith',
              },
              {
                title: 'Raf Simons',
                url: 'raf-simons',
              },
              {
                title: 'EQT',
                url: 'eqt',
              },
              {
                title: 'Basketball',
                url: 'basketball',
              },
              {
                title: 'Running',
                url: 'running',
              },
              {
                title: 'Skateboard',
                url: 'skateboard',
              },
              {
                title: 'soccer',
                url: 'soccer',
              },
              {
                title: 'Ozweego',
                url: 'ozweego',
              },
              {
                title: 'Human Race',
                url: 'human-race',
              },
              {
                title: 'Nite Jogger',
                url: 'nite-jogger',
              },
              {
                title: 'Ivy Park',
                url: 'ivy-park',
              },
              {
                title: 'Samba',
                url: 'samba',
              },
              {
                title: 'Forum',
                url: 'forum',
              },
              {
                title: 'Trae Young',
                url: 'trae-young',
              },
              {
                title: 'ZX',
                url: 'zx',
              },
              {
                title: 'Other',
                url: 'other',
              },
            ],
          },
          {
            title: 'Air Jordan',
            url: 'retro-jordan',
            type: 'dropdown',
            submenu: [
              {
                title: '1',
                url: 'retro-jordan/1',
              },
              {
                title: '2',
                url: 'retro-jordan/2',
              },
              {
                title: '3',
                url: 'retro-jordan/1',
              },
              {
                title: '4',
                url: 'retro-jordan/1',
              },
              {
                title: '5',
                url: 'retro-jordan/1',
              },
              {
                title: '6',
                url: 'retro-jordan/1',
              },
              {
                title: '7',
                url: 'retro-jordan/1',
              },
              {
                title: '8',
                url: 'retro-jordan/1',
              },
              {
                title: '9',
                url: 'retro-jordan/1',
              },
              {
                title: '10',
                url: 'retro-jordan/1',
              },
              {
                title: '11',
                url: 'retro-jordan/2',
              },
              {
                title: '12',
                url: 'retro-jordan/1',
              },
              {
                title: '13',
                url: 'retro-jordan/1',
              },
              {
                title: '14',
                url: 'retro-jordan/1',
              },
              {
                title: '15',
                url: 'retro-jordan/1',
              },
              {
                title: '16',
                url: 'retro-jordan/1',
              },
              {
                title: '17',
                url: 'retro-jordan/1',
              },
              {
                title: '18',
                url: 'retro-jordan/1',
              },
              {
                title: '19',
                url: 'retro-jordan/1',
              },
              {
                title: '20',
                url: 'retro-jordan/2',
              },
              {
                title: '21',
                url: 'retro-jordan/1',
              },
              {
                title: '22',
                url: 'retro-jordan/1',
              },
              {
                title: '23',
                url: 'retro-jordan/1',
              },
              {
                title: '24',
                url: 'retro-jordan/1',
              },
              {
                title: '25',
                url: 'retro-jordan/1',
              },
              {
                title: '26',
                url: 'retro-jordan/1',
              },
              {
                title: '27',
                url: 'retro-jordan/1',
              },
              {
                title: '28',
                url: 'retro-jordan/1',
              },
              {
                title: '29',
                url: 'retro-jordan/2',
              },
              {
                title: '30',
                url: 'retro-jordan/1',
              },
              {
                title: '31',
                url: 'retro-jordan/1',
              },
              {
                title: '32',
                url: 'retro-jordan/1',
              },
              {
                title: '33',
                url: 'retro-jordan/1',
              },
              {
                title: '34',
                url: 'retro-jordan/1',
              },
              {
                title: '35',
                url: 'retro-jordan/1',
              },
              {
                title: 'Packs',
                url: 'retro-jordan/1',
              },
              {
                title: 'Spizike',
                url: 'retro-jordan/2',
              },
              {
                title: 'Legacy 312',
                url: 'retro-jordan/1',
              },
              {
                title: 'Jordan OFF-WHITE',
                url: 'retro-jordan/1',
              },
              {
                title: 'Future',
                url: 'retro-jordan/1',
              },
              {
                title: 'Women',
                url: 'retro-jordan/1',
              },
              {
                title: 'Kids',
                url: 'retro-jordan/1',
              },
              {
                title: 'Golf',
                url: 'retro-jordan/1',
              },
              {
                title: 'Other',
                url: 'retro-jordan/1',
              },
            ],
          },
          {
            title: 'Nike',
            url: 'nike',
            type: 'dropdown',
            submenu: [
              {
                title: 'Air Force',
                url: 'air-foce',
                type: 'link',
              },
            ],
          },
          {
            title: 'New Balance',
            url: 'new-balance',
            type: 'dropdown',
            submenu: [
              {
                title: '550',
                url: '550',
                type: 'link',
              },
            ],
          },
          {
            title: 'Reebok',
            url: 'reebok',
            type: 'dropdown',
            submenu: [
              {
                title: 'Answer',
                url: 'answer',
                type: 'link',
              },
            ],
          },
          {
            title: 'Converse',
            url: 'converse',
          },
          {
            title: 'Puma',
            url: 'puma',
          },
          {
            title: 'Vans',
            url: 'vans',
          },
          {
            title: 'Collections',
            url: 'collections',
          },
          {
            title: 'Luxury Brands',
            url: 'luxury',
          },
          {
            title: 'Other Brands',
            url: 'other',
          },
          {
            title: 'Releases',
            url: 'releases',
          },
        ],
      },
      {
        title: 'Apparel',
        url: 'apparel',
        type: 'dropdown',
        submenu: [
          {
            title: 'Adidas Apparel',
            url: 'adidas-apparel',
            submenu: [
              {
                title: 'T-shirts',
                url: 'adidas-apparel/t-shirts',
              },
            ],
          },
          {
            title: 'Artist Merch',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'BAPE',
            url: 'bape',
            submenu: [],
          },
          {
            title: 'Chrome Hearts',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'Comme Des Carcons Play',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'Drew House',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'Eric Emanuel',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'Essentials',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'Fear of God',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'Gallery Dept.',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'Gucci',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'KAWS',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'KITH.',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'Moncler',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'Nike Apparel',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'Off-White',
            url: 'artist-merch',
            submenu: [],
          },
          {
            title: 'Palace',
            url: 'palace',
            submenu: [],
          },
        ],
      },
      {
        title: 'Electronics',
        url: 'electronics',
        type: 'dropdown',
        submenu: [
          {
            title: 'Cretified Refurbished',
            url: 'certified-refurbished',
            submenu: [
              {
                title: 'Apple',
                url: '/certified-refurbished/apple',
              },
            ],
          },
          {
            title: 'Apple',
            url: 'apple',
            submenu: [],
          },
          {
            title: 'AMD',
            url: 'apple',
            submenu: [],
          },
          {
            title: 'Beats',
            url: 'apple',
            submenu: [],
          },
          {
            title: 'Bose',
            url: 'apple',
            submenu: [],
          },
          {
            title: 'Computer Components',
            url: 'computer-components',
            submenu: [],
          },
          {
            title: 'Cameras',
            url: 'apple',
            submenu: [],
          },
          {
            title: 'Dyson',
            url: 'apple',
            submenu: [],
          },
          {
            title: 'Finalmouse',
            url: 'apple',
            submenu: [],
          },
          {
            title: 'Gaming Laptops',
            url: 'computer-components',
            submenu: [],
          },
          {
            title: 'JBL',
            url: 'apple',
            submenu: [],
          },
          {
            title: 'Logitech',
            url: 'apple',
            submenu: [],
          },
          {
            title: 'Intel',
            url: 'apple',
            submenu: [],
          },
          {
            title: 'Microsoft',
            url: 'apple',
            submenu: [],
          },
          {
            title: 'NVIDIA',
            url: 'computer-components',
            submenu: [],
          },
          {
            title: 'Nintendo',
            url: 'apple',
            submenu: [],
          },
          {
            title: 'Oculus',
            url: 'oculus',
            submenu: [],
          },
        ],
      },
      {
        title: 'Trading Cards',
        url: 'trading-cards',
        type: 'dropdown',
        submenu: [
          {
            title: 'Baseball',
            url: 'baseball',
            submenu: [],
          },
          {
            title: 'Basketball',
            url: 'basketball',
            submenu: [],
          },
          {
            title: 'Football',
            url: 'football',
            submenu: [],
          },
          {
            title: 'Hokey',
            url: 'hokey',
            submenu: [],
          },
          {
            title: 'Soccer',
            url: 'soccer',
          },
          {
            title: 'Sealed Boxes',
            url: 'sealed-boxes',
            submenu: [],
          },
          {
            title: 'Pokémon',
            url: 'pokémon',
            submenu: [],
          },
          {
            title: 'Yu-Gi-Oh!',
            url: 'yu-gi-oh',
            submenu: [],
          },
          {
            title: 'Magic: The Gathering',
            url: 'hokey',
            submenu: [],
          },
          {
            title: 'Other Sports',
            url: 'soccer',
          },
          {
            title: 'Other TCG',
            url: 'sealed-boxes',
            submenu: [],
          },
        ],
      },
      {
        title: 'Collectibles',
        url: 'collectibles',
        type: 'dropdown',
        submenu: [
          {
            title: 'KAWS',
            url: '/',
            submenu: [{ title: 'Vinyl Figures', url: '/' }],
          },
          {
            title: 'Bearbrick',
            url: '/',
          },
          {
            title: 'Art Prints',
            url: '/',
          },
          {
            title: 'LEGO',
            url: '/',
          },
          {
            title: 'Funko Pop!',
            url: '/',
          },
          {
            title: 'Daniel Arsham',
            url: '/',
          },
          {
            title: 'Takashi Murakami',
            url: '/',
          },
          {
            title: 'Virgil Ablog',
            url: '/',
          },
          {
            title: 'Skate Decks',
            url: '/',
          },
          {
            title: 'Comic Books',
            url: '/',
          },
          {
            title: 'Other Artists',
            url: '/',
          },
          {
            title: 'Other Collectibles',
            url: '/',
          },
        ],
      },
      {
        title: 'Accessories',
        url: 'accessories',
        type: 'dropdown',
        submenu: [
          {
            title: 'Swatch X Omega',
            url: '/',
          },
          {
            title: 'Balenciaga',
            url: '/',
            submenu: [
              {
                title: 'City',
                url: '/',
              },
              {
                title: 'Ville',
                url: '/',
              },
              {
                title: 'Camera',
                url: '/',
              },
              {
                title: 'Triangle',
                url: '/',
              },
              {
                title: 'Papier',
                url: '/',
              },
              {
                title: 'Other',
                url: '/',
              },
            ],
          },
          {
            title: 'BAPE',
            url: '/',
          },
          {
            title: 'Burberry',
            url: '/',
          },
          {
            title: 'Casio',
            url: '/',
          },
          {
            title: 'Chanel',
            url: '/',
          },
          {
            title: 'Chrome Hearts',
            url: '/',
          },
          {
            title: 'Dior',
            url: '/',
          },
          {
            title: 'Fear of God',
            url: '/',
          },
          {
            title: 'Goyard',
            url: '/',
          },
          {
            title: 'Gucci',
            url: '/',
          },
          {
            title: 'Kith',
            url: '/',
          },
          {
            title: 'Louis Vuitton',
            url: '/',
          },
          {
            title: 'New Era',
            url: '/',
          },
          {
            title: 'Nike',
            url: '/',
          },
          {
            title: 'Off-White',
            url: '/',
          },
          {
            title: 'Prada',
            url: '/',
          },
          {
            title: 'Rolex',
            url: '/',
            submenu: [
              {
                title: 'Submariner',
                url: '/',
              },
              {
                title: 'Explorer',
                url: '/',
              },
              {
                title: 'Daytona',
                url: '/',
              },
              {
                title: 'GMT-Master II',
                url: '/',
              },
              {
                title: 'Sea-Dweller',
                url: '/',
              },
              {
                title: 'Datejust',
                url: '/',
              },
              {
                title: 'Day-Date',
                url: '/',
              },
              {
                title: 'Yatcht-Master',
                url: '/',
              },
              {
                title: 'Oyster-Perpetual',
                url: '/',
              },
              {
                title: 'Sky-Dweller',
                url: '/',
              },
              {
                title: 'Air-King',
                url: '/',
              },
              {
                title: 'Other',
                url: '/',
              },
            ],
          },
          {
            title: 'Saint Laurent',
            url: '/',
          },
          {
            title: 'Supreme',
            url: '/',
          },
          {
            title: 'Telfar',
            url: '/',
          },
          {
            title: 'Other Brands',
            url: '/',
          },
        ],
      },
      {
        title: 'NFTs',
        url: 'nfts',
        type: 'dropdown',
      },
    ],
  },
  {
    title: 'News',
    url: '/news',
    type: 'link',
  },
  {
    title: 'About',
    url: '/about/how-it-works',
    type: 'dropdown',
  },
  {
    title: 'Help',
    url: '/help/home',
    type: 'link',
  },
  {
    title: 'Sell',
    url: '/sell',
    type: 'link',
  },
  {
    title: 'Notification',
    url: '/notification',
    type: 'icon',
  },
  {
    title: 'Login',
    url: 'login',
    type: 'button',
  },
  {
    title: 'Sign Up',
    url: 'signup',
    type: 'button',
  },
];
