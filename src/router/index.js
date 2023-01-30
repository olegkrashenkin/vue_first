import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from '@/views/HeroView'
import OurCoffeeView from '@/views/OurCoffeeView'
import ContactUsView from '@/views/ContactUsView'
import ForYourPleasureView from '@/views/ForYourPleasureView'
import ThankYouPageView from '@/views/ThankYouPageView'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffeeView },
    { path: '/contact-us', component: ContactUsView },
    { path: '/for-your-pleasure', component: ForYourPleasureView },
    { path: '/thank-you', component: ThankYouPageView },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router