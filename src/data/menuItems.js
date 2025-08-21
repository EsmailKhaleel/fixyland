
const menuItems = [
  {
    label: 'Home',
    children: [
      { label: 'Home Page 1' },
      { label: 'Home Page 2' },
      { label: 'Home Page 3' },
      {
        label: 'Header Styles',
        children: [
          { label: 'Header Style 1' },
          { label: 'Header Style 2' },
          { label: 'Header Style 3' }
        ]
      }
    ]
  },
  {
    label: 'Pages',
    children: [
      { label: 'Booking Form' },
      { label: 'About Hotel' },
      { label: 'Restaurant' },
      { label: 'Gallery' },
      { label: 'Pricing Plan' },
      { label: '404 Page' },
      { label: 'Coming Soon' },
      { label: 'FAQ' },
      {
        label: 'Hotel Staff',
        children: [
          { label: 'Staff List' },
          { label: 'Staff Details' }
        ]
      },
      {
        label: 'Privacy Policy',
        children: [
          { label: 'Privacy Policy 1' },
          { label: 'Privacy Policy 2' }
        ]
      }
    ]
  },
  {
    label: 'Rooms & Suites',
    children: [
      { label: 'Room List' },
      { label: 'Room Details' },
      { label: 'Room Booking' }
    ]
  },
  {
    label: 'Services',
    children: [
      { label: 'Services Page 1' },
      { label: 'Services Page 2' },
      { label: 'Service Details' }
    ]
  },
  {
    label: 'Blog',
    children: [
      { label: 'Blog List' },
      { label: 'Blog Details' },
      { label: 'Blog Grid' },
      { label: 'Blog Masonry' }
    ]
  },
  {
    label: 'Contact'
  }
];

export default menuItems;