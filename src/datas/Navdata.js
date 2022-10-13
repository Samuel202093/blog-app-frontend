// Data for the Nav bar
import {GrClose, GrTwitter, GrInstagram} from 'react-icons/gr'
import {FaFacebookF, FaPinterestP, FaYoutube} from 'react-icons/fa'

export const navData =[
    {
    id:1,
    name:"Catergories",
    path:" /",
    className:'py-2 pb-2 text-3xl font-bold '
  }
  // {
  //   id: 2,
  //   name: "About",
  //   path: "/about",
  //   className: 'pb-6 text-3xl font-semibold'
  // },
  // {
  //   id: 3,
  //   name: "Profile",
  //   path: "lt/signup",
  //   className: 'pb-6 text-3xl font-semibold'
  // },
  // {
  //   id: 4,
  //   name: "Contact",
  //   path: "/contact",
  //   className: 'pb-6 text-2xl font-semibold'
  // }
 
]

export const categoryData = [
    {
    id: 1,
    name: 'CRYPTOCURRENCY',
    path: '/cryptocurrency',
    className: 'pt-2 pb-2'
  },
  {
    id: 2,
    name: 'TECHNOLOGY',
    path: '/tech',
    className: 'pb-2 '
  },
  {
    id: 3,
    name: 'BOOKS',
    path: '/books',
    className:'pb-2 '
  },
  {
    id: 4,
    name: 'BUSINESS',
    path: '/business',
    className:'pb-2 '
  },
  {
    id: 5,
    name: 'POLITICS',
    path: '/politics',
    className:'pb-2 '
  },
  {
    id: 6,
    name: 'SPORTS',
    path: '/sports',
    className:'pb-2 '
  },
  {
    id: 6,
    name: 'MAGAZINE',
    path: '/magazine',
    className:'pb-2 '
  },
  {
    id: 7,
    name: 'ART',
    path: '/arts',
    className:'pb-2 '
  },
  {
    id: 8,
    name: 'STYLES',
    path: '/style',
    className:'pb-2 '
  },
  {
    id: 9,
    name: 'TRAVELS',
    path: '/travels',
    className:'pb-2 '
  },
  {
    id: 10,
    name: 'SCIENCE',
    path: '/science',
    className:'pb-2 '
  },
  {
    id: 11,
    name: 'OPINION',
    path: '/opinion',
    className:'pb-2 '
  },
]

 export const socialData = [
    {
      id: 1,
      icon:<GrTwitter/>,
      className:'text-xl',
      href: '#'
    },
    {
      id: 2,
      icon:<FaFacebookF/>,
      className:'text-xl',
      href: "#"
    },
    {
      id: 3,
      icon:<FaPinterestP/>,
      className:'text-xl',
      href: '#'
    },
    {
      id: 4,
      icon:<FaYoutube/>,
      className:'text-xl',
      href: '#'
    },
    {
      id: 5,
      icon: <GrInstagram/>,
      className:'text-xl',
      href: '#'
    }
    
  ]