
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'


const socialLinks = [
    {
        imgSrc: facebook,
        link: 'https://www.facebook.com/',
        name: 'Facebook'
    },
    {
        imgSrc: twitter,
        link: 'https://twitter.com/?lang=en',
        name: 'Twitter'
    },
    {
        imgSrc: pinterest,
        link: 'https://www.pinterest.com/',
        name: 'Pinterest'
    },
    {
        imgSrc: instagram,
        link: 'https://www.instagram.com/',
        name: 'Instagram'
    },
]

const footerLinks = [
    {
        title: 'OUR COMPANY',
        links: [
            {label: 'HOW WE WORK', link: '#' },
            {label: 'WHY INSURE?', link: '#' },
            {label: 'VIEW PLANS', link: '#' },
            {label: 'REVIEWS', link: '#' },
            ],
    },
    {
        title: 'HELP ME',
        links: [
            {label: 'FAQ', link: '#' },
            {label: 'TERMS OF USE', link: '#' },
            {label: 'PRIVACY POLICY', link: '#' },
            {label: 'COOKIES', link: '#' },
            ],
    },
    {
        title: 'CONTACT',
        links: [
            {label: 'SALES', link: '#' },
            {label: 'SUPPORT', link: '#' },
            {label: 'LIVE CHAT', link: '#' },
            ],
    },
    {
        title: 'OTHERS',
        links: [
            {label: 'CAREERS', link: '#' },
            {label: 'PRESS',  link: '#' },
            {label:'LICENSES', link: '#' },
            ],
    },
]

export { socialLinks, footerLinks }