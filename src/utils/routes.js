import PageMain from '../view/pages/PageMain.vue';
import PageCards from "../view/pages/PageCards.vue";

const routes = [
    {
        path: '/',
        name: 'page-main',
        component: PageMain
    },
    {
        path: '/people',
        name: 'page-people',
        component: PageCards
    },
    {
        path: '/people/:id',
        name: 'page-characters',
        component: PageCards
    },
    {
        path: '/films',
        name: 'page-films',
        component: PageCards
    },
    {
        path: '/films/:id',
        name: 'page-films',
        component: PageCards
    },
    {
        path: '/species',
        name: 'page-species',
        component: PageCards
    },
    {
        path: '/species/:id',
        name: 'page-species',
        component: PageCards
    },
    {
        path: '/starships',
        name: 'page-starships',
        component: PageCards
    },
    {
        path: '/starships/:id',
        name: 'page-starships',
        component: PageCards
    },
    {
        path: '/vehicles',
        name: 'page-vehicles',
        component: PageCards
    },
    {
        path: '/vehicles/:id',
        name: 'page-vehicles',
        component: PageCards
    },
    {
        path: '/planets',
        name: 'page-planets',
        component: PageCards
    },
    {
        path: '/planets/:id',
        name: 'page-planets',
        component: PageCards
    },
];

export default {
    routes
};
