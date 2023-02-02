<template>
    <li :class="classItem">
        <router-link :to="link">{{ text }}</router-link>
    </li>
</template>

<script>
export default {
    props: {
        classItem: { type: String, required: true },
        link: { type: String, required: true },
        text: { type: String, required: false },
    }
}
</script>