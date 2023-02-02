<template>
    <div :class="classItem">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <nav-bar-component />
                </div>
            </div>
            <h1 class="title-big">{{ title }}</h1>
        </div>
    </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
    components: { NavBarComponent },
    props: {
        title: { type: String, required: true },
        classItem: { type: String, required: true },
    },
}
</script>