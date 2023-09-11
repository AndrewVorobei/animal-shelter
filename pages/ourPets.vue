<script setup>

import navigation from "~/components/startScreen/navigation.vue";
import pets from "~/components/petsScreen/pets.vue"
import footerComponent from "~/components/footerScreen/footerComponent.vue";
</script>

<template>
    <div class="ourPets_layout">
        <div class="navigation">
            <navigation></navigation>
        </div>
        <div class="pets">
            <pets></pets>
        </div>
        <div class="ourPets_footer">
            <footer-component></footer-component>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ourPets_layout {
    display: flex;
    flex-direction: column;

    .navigation {
        background: $color-light-xl;

    }

    .pets {
        max-height: 1342px;
        height: 100%;
        background: $color-light-l;

        @media (max-width: 768px) {
            max-height: 1733px;
        }
    }

    .ourPets_footer {
        max-height: 350px;
        height: 100%;
        background: url('@/assets/img-mobile/footer-screen/footer-bg.png') no-repeat center;

        @media (max-width: 768px) {
            height: 639px;
        }
    }
}
</style>