import PageMain from '../view/pages/PageMain.vue';
import PageCards from "../view/pages/PageCards.vue";
import PageInfo from "../view/pages/PageInfo.vue";

const routes = [
    {
        path: '/',
        name: 'main',
        component: PageMain
    },
    {
        path: '/people',
        name: 'people',
        component: PageCards
    },
    {
        path: '/people/:id',
        name: 'peopleId',
        component: PageInfo,
        props: true
    },
    {
        path: '/films',
        name: 'films',
        component: PageCards
    },
    {
        path: '/films/:id',
        name: 'filmsId',
        component: PageInfo,
        props: true
    },
    {
        path: '/species',
        name: 'species',
        component: PageCards
    },
    {
        path: '/species/:id',
        name: 'speciesId',
        component: PageInfo,
        props: true
    },
    {
        path: '/starships',
        name: 'starships',
        component: PageCards
    },
    {
        path: '/starships/:id',
        name: 'starshipsId',
        component: PageInfo,
        props: true
    },
    {
        path: '/vehicles',
        name: 'vehicles',
        component: PageCards
    },
    {
        path: '/vehicles/:id',
        name: 'vehiclesId',
        component: PageInfo,
        props: true
    },
    {
        path: '/planets',
        name: 'planets',
        component: PageCards
    },
    {
        path: '/planets/:id',
        name: 'planetsId',
        component: PageInfo,
        props: true
    },
];

export default {
    routes
};
