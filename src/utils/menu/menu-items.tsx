import { MenuIitem } from '../models/MenuItem';
import { IoGlobeOutline, IoNewspaperOutline, IoPeopleOutline, IoRocketOutline, IoSchoolOutline } from "react-icons/io5";


export const menuItems: MenuIitem[] = [
    {
        name: 'about us',
        icon: <IoPeopleOutline />,
        url: '#about-us'
    },
    {
        name: 'services',
        icon: <IoRocketOutline />,
        url: '#services'
    },
    {
        name: 'careers',
        icon: <IoSchoolOutline />,
        url: 'https://recruitcrm.io/jobs/applica_corp',
        target: '_blank'
    },
    {
        name: 'news',
        icon: <IoNewspaperOutline />,
        url: '/news'
    },
    {
        name: 'contact',
        icon: <IoGlobeOutline />,
        url: '/contact'
    },
]