import {
  Buying,
  Following,
  Logout,
  Portfolio,
  Profile,
  Security,
  Selling,
  Settings,
} from '../components/icons';

export const accountProfileLeftSelections = [
  {
    slug: 'buying',
    icon: <Buying />,
    title: 'Buying',
    description: 'Active Bids, In-Progress, Completed Orders',
  },
  {
    slug: 'selling',
    icon: <Selling />,
    title: 'Selling',
    description: 'Active Asks, In-Progress, Completed Sales',
  },
  {
    slug: 'portfolio',
    icon: <Portfolio />,
    title: 'Portfolio',
    description: 'See The Value Of Your Items',
  },
  {
    slug: 'following',
    icon: <Following />,
    title: 'Following',
    description: 'Products You&lsquo;re Watching',
  },
];

export const accountProfileRightSelections = [
  {
    slug: 'security',
    icon: <Security />,
    title: 'Security',
    description: 'Two-Step Verification',
  },
  {
    slug: 'profile',
    icon: <Profile />,
    title: 'Profile',
    description: 'Learn What&lsquo;s Unique To You',
  },
  {
    slug: 'settings',
    icon: <Settings />,
    title: 'Settings',
    description: 'Payments, Payouts, Addresses',
  },
];

export const accountProfileSelections = [
  {
    slug: 'security',
    icon: <Security />,
    title: 'Security',
    description: 'Two-Step Verification',
  },
  {
    slug: 'buying',
    icon: <Buying />,
    title: 'Buying',
    description: 'Active Bids, In-Progress, Completed Orders',
  },
  {
    slug: 'selling',
    icon: <Selling />,
    title: 'Selling',
    description: 'Active Asks, In-Progress, Completed Sales',
  },
  {
    slug: 'portfolio',
    icon: <Portfolio />,
    title: 'Portfolio',
    description: 'See The Value Of Your Items',
  },
  {
    slug: 'following',
    icon: <Following />,
    title: 'Following',
    description: 'Products You&lsquo;re Watching',
  },

  {
    slug: 'profile',
    icon: <Profile />,
    title: 'Profile',
    description: 'Learn What&lsquo;s Unique To You',
  },
  {
    slug: 'settings',
    icon: <Settings />,
    title: 'Settings',
    description: 'Payments, Payouts, Addresses',
  },
  {
    slug: 'logout',
    icon: <Logout />,
    title: 'Logout',
    description: '',
  },
];
