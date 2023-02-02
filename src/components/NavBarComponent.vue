<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <nav-item classItem="header__item" :link="links.header.link">
                <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon">
            </nav-item>

            <nav-item v-for="link in links.other" :key="link.id" classItem="header__item" :link="link.link"
                :text="link.text" />
        </ul>
    </header>
</template>

<script>
import NavItem from "@/components/NavItem"

export default {
    components: { NavItem },
    data() {
        return {
            links: {
                header: {
                    id: 0,
                    link: '/',
                    icon: 'Logo.svg',
                },
                other: [
                    {
                        id: 1,
                        link: '/our-coffee',
                        text: 'Our coffee',
                    },
                    {
                        id: 2,
                        link: '/for-your-pleasure',
                        text: 'For your pleasure',
                    },
                    {
                        id: 3,
                        link: '/contact-us',
                        text: 'Contact us',
                    },
                ]
            }
        }
    }
}
</script>