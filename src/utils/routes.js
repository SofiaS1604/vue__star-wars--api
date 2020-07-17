import MyMain from '../view/pages/MyMain.vue';
import MyCharacters from "../view/pages/MyCharacters.vue";

const routes = [
    {
        path: '/',
        name: 'app-first-router',
        component: MyMain
    },
    {
        path: '/characters',
        name: 'app-first-router',
        component: MyCharacters
    },
];

export default {
    routes
};
