
const menuItems = [
  {
    label: 'Home',
    children: [
      { label: 'Home Page', link: '/' },
      { label: 'Home Page 2', link: '/home-2' },
      // { label: 'Home Page 3' },
      // {
      //   label: 'Header Styles',
      //   children: [
      //     { label: 'Header Style 1' },
      //     { label: 'Header Style 2' },
      //     { label: 'Header Style 3' }
      //   ]
      // }
    ]
  },
  {
    label: 'Pages',
    children: [
      { label: 'Booking Form', link: '/booking' },
      { label: 'About Hotel', link: '/about-us' },
      { label: 'Restaurant', link: '/restaurant' },
      { label: 'Gallery', link: '/our-gallery' },
      { label: 'Pricing Plan', link: '/our-pricing' },
      { label: '404 Page', link: '/error' },
      { label: 'FAQ', link: '/faq\'s' },
      {
        label: 'Hotel Staff',
        children: [
          { label: 'Staff List', link: '/our-staff' },
          { label: 'Staff Details', link: '/our-staff/staff-details' }
        ]
      },
      {
        label: 'Policies',
        children: [
          { label: 'Terms & Conditions', link: '/terms-and-conditions' },
          { label: 'Privacy Policy', link: '/privacy-policy' }
        ]
      }
    ]
  },
  {
    label: 'Rooms & Suites',
    children: [
      { label: 'Rooms Grid', link: '/rooms-grid' },
      { label: 'Rooms List', link: '/rooms-list' },
      { label: 'Room Details', link: '/rooms/rooms-details' }
    ]
  },
  {
    label: 'Services',
    children: [
      { label: 'Services Page 1', link: '/services-style-1' },
      { label: 'Services Page 2', link: '/services-style-2' },
      { label: 'Service Details', link: '/services/service-details' }
    ]
  },
  {
    label: 'Blog',
    children: [
      { label: 'Blog Grid', link: '/blog-grid' },
      { label: 'Blog List', link: '/blog-list' },
      { label: 'Blog Sidebar', link: '/blog-sidebar' },
      { label: 'Blog Details', link: '/blog/blog-details' },
    ]
  },
  {
    label: 'Contact', link: '/contact-us'
  }
];

export default menuItems;