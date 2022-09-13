export interface Product {
  imgSrc: string;
  name: string;
  lowest: number;
  sold: number;
}

export interface ProductRowButton {
  text: string | null;
  href: string;
}

export interface ProductRowHeading {
  title: string;
  popover: boolean;
  popoverText: string;
}

export interface ProductMetaData {
  products: Product[];
  button: ProductRowButton;
  heading: ProductRowHeading;
}

export const productMetaData: ProductMetaData[] = [
  {
    products: [
      {
        imgSrc:
          'https://images.stockx.com/images/adidas-Yeezy-Foam-RNNR-Sand-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1617991585&q=75',
        name: 'adidas Yeezy Foam RNNR',
        lowest: 152,
        sold: 1650,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/adidas-Forum-Buckle-Low-Bad-Bunny-Blue-Tint-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1659725558&q=75',
        name: 'adidas Forum Buckle Low Bad Bunny Blue Tint',
        lowest: 329,
        sold: 530,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Crocs-Pollex-Clog-by-Salehe-Bembury-Orange.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1660197683&q=75',
        name: 'Crocs Pollex Clog by Salehe Bembury Cobbler',
        lowest: 142,
        sold: 144,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/ASICS-Gel-Kayano-14-JJJJound-Silver-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1651111540&q=75',
        name: 'ASICS Gel-Kayano 14 JJJJound Silver Black',
        lowest: 296,
        sold: 118,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/ASICS-Gel-Kayano-14-JJJJound-Silver-White.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1651111545&q=75',
        name: 'ASICS Gel-Kayano 14 JJJJound Silver White',
        lowest: 235,
        sold: 111,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Nike-Air-Ship-A-Ma-Maniere-Game-Royal.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1661236443&q=75',
        name: 'Nike Air Ship A Ma Maniére Game Royal',
        lowest: 590,
        sold: 41,
      },
    ],
    button: {
      text: 'See All',
      href: '/sneakers',
    },
    heading: {
      title: 'Trending Sneakers',
      popover: true,
      popoverText:
        '`Trending` products are a curated collection of our best selling items',
    },
  },
  {
    products: [
      {
        imgSrc:
          'https://images.stockx.com/images/ASICS-Gel-Kayano-14-JJJJound-Silver-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1651111540&q=75',
        name: 'ASICS Gel-Kayano 14 JJJJound Silver Black',
        lowest: 296,
        sold: 322,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Supreme-Andre-3000-Tee-Heather-Grey.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1661437692&q=75',
        name: 'Supreme André 3000 Tee Heather Grey',
        lowest: 66,
        sold: 87,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Oculus-Quest-2-128GB-White-2.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1637707223&q=75',
        name: 'Meta (Oculus) Quest 2 256GB VR Headset 301-00351-01 / 301-00351-02 White',
        lowest: 408,
        sold: 394,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/2022-Topps-Chrome-Star-Wars-Sapphire-Edition-Box.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1657078997&q=75',
        name: '2022 Topps Chrome Star Wars Sapphire Edition Box',
        lowest: 675,
        sold: 4,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/2021-Panini-Select-Football-Hobby-Box.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1656132881&q=75',
        name: '2021 Panini Select Football Hobby Box',
        lowest: 1325,
        sold: 3,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Supreme-Catwoman-Tee-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1661437691&q=75',
        name: 'Supreme Catwoman Tee Black',
        lowest: 63,
        sold: 62,
      },
    ],
    button: {
      text: '',
      href: '',
    },
    heading: {
      title: 'Recently Viewed',
      popover: true,
      popoverText: 'You recently viewed these products',
    },
  },
  {
    products: [
      {
        imgSrc:
          'https://images.stockx.com/images/Supreme-Andre-3000-Tee-Heather-Grey.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1661437692&q=75',
        name: 'Supreme André 3000 Tee Heather Grey',
        lowest: 66,
        sold: 87,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Supreme-Catwoman-Tee-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1661437691&q=75',
        name: 'Supreme Catwoman Tee Black',
        lowest: 63,
        sold: 62,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Fear-of-God-Essentials-Hoodie-Coral.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1661369289&q=75',
        name: 'Fear of God Essentials Hoodie Coral',
        lowest: 100,
        sold: 120,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/The-North-Face-1996-Retro-Nuptse-700-Fill-Packable-Jacket-Recycled-TNF-BlackV2.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1637083325&q=75',
        name: 'The North Face 1996 Retro Nuptse 700 Fill Packable Jacket Recycled TNF Black',
        lowest: 247,
        sold: 235,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Yeezy-Gap-Engineered-by-Balenciaga-Dove-3-4-Sleeve-Tee-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1645628547&q=75',
        name: 'Yeezy Gap Engineered by Balenciaga Dove 3/4 Sleeve Tee Black',
        lowest: 139,
        sold: 149,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Palm-Angels-Classic-Track-Jacket-Jacket-Black-White-SS22.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1644511033&q=75',
        name: 'Palm Angels Classic Track Jacket Black/White SS22',
        lowest: 303,
        sold: 271,
      },
    ],
    button: {
      text: 'See All',
      href: '/apparel',
    },
    heading: {
      title: 'Featured Apparel',
      popover: true,
      popoverText:
        '`Featured` products are a curated collection of our best selling items',
    },
  },
  {
    products: [
      {
        imgSrc:
          'https://images.stockx.com/images/Oculus-Quest-2-128GB-White-2.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1637707223&q=75',
        name: 'Meta (Oculus) Quest 2 256GB VR Headset 301-00351-01 / 301-00351-02 White',
        lowest: 408,
        sold: 394,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Microsoft-Xbox-Series-X-Console-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1605821255&q=75',
        name: 'Microsoft Xbox Series X (US Plug) RRT-00001 / RRT-00024 Black',
        lowest: 489,
        sold: 40,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Apple-AirPods-Pro-with-Magsafe-Charging-Case-MLWK3AM-A.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1636743020&q=75',
        name: 'Apple AirPods Pro with Magsafe Charging Case MLWK3AM/A',
        lowest: 170,
        sold: 17,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Sony-Playstation-5-PS5-Disc-Console-with-Extra-DualSense-Wireless-Controller-Bundle-3005718-3006394-Starlight-Blue.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1646433360&q=75',
        name: 'Sony Playstation 5 PS5',
        lowest: 849,
        sold: 9,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Finalmouse-Starlight-12-Poseidon-Wireless-Mouse-Small.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1650039201&q=75',
        name: 'Starlight-12 Mouse',
        lowest: 240,
        sold: 6,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/Nintendo-Switch-OLED-Splatoon-3-Special-Edition.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1661195760&q=75',
        name: 'Nintendo Switch OLED',
        lowest: 400,
        sold: 5,
      },
    ],
    button: {
      text: 'See All',
      href: '/electronics',
    },
    heading: {
      title: 'Electronic Spotlight',
      popover: true,
      popoverText:
        '`Spotlight` products are a curated collection of our best selling items',
    },
  },
  {
    products: [
      {
        imgSrc:
          'https://images.stockx.com/images/2022-Pokemon-TCG-McDonalds-Happy-Meal-Match-Battle-40x-Pack-Lot-Assorted-US.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1660718142&q=75',
        name: '2022 Pokémon TCG McDonalds Happy Meal Match Battle 40x Pack Lot (Assorted) (US)',
        lowest: 75,
        sold: 5,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/2022-Topps-Chrome-Star-Wars-Sapphire-Edition-Box.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1657078997&q=75',
        name: '2022 Topps Chrome Star Wars Sapphire Edition Box',
        lowest: 675,
        sold: 4,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/2021-Panini-Select-Football-Hobby-Box.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1656132881&q=75',
        name: '2021 Panini Select Football Hobby Box',
        lowest: 1325,
        sold: 3,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/2022-Bowman-Sapphire-Edition-Baseball-Box.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1653446985&q=75',
        name: '2022 Bowman Sapphire Edition Baseball Box',
        lowest: 436,
        sold: 3,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/2021-22-Panini-Recon-Basketball-Hobby-Box.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1657340749&q=75',
        name: '2021-22 Panini Recon BasketBall Hobby Box',
        lowest: 248,
        sold: 3,
      },
      {
        imgSrc:
          'https://images.stockx.com/images/2021-Panini-Absolute-Football-Factory-Sealed-Multi-Pack-Cello-Box.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1637365740&q=75',
        name: '2021 Panini Absolute Football Factory Sealed Multi-Pack Cello Fat Pack Box',
        lowest: 103,
        sold: 37,
      },
    ],
    button: {
      text: 'See All',
      href: '/trading-cards',
    },
    heading: {
      title: 'Featured Trading Cards',
      popover: true,
      popoverText:
        '`Featured` products are a curated collection of our best selling items',
    },
  },
];

export default productMetaData;
