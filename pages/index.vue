<script setup>
import navigation from "../components/startScreen/navigation.vue"
import content from "../components/startScreen/content.vue"
import about from "~/components/aboutScreen/about.vue"
import pets from "~/components/petsScreen/pets.vue"
import help from "~/components/helpScreen/help.vue"
import donation from '~/components/donationScreen/donation.vue'
import footerComponent from "~/components/footerScreen/footerComponent.vue"
</script>

<template>
    <div class="layouts">
        <div class="start_layout">
            <navigation></navigation>
            <content></content>
        </div>
        <div class="about">
            <about></about>
        </div>
        <div class="pets">
            <pets></pets>
        </div>
        <div class="help">
            <help></help>
        </div>
        <div class="donation">
            <donation></donation>
        </div>
        <div class="footer">
            <footer-component></footer-component>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.layouts {
    display: flex;
    flex-direction: column;

    .start_layout {
        width: 100%;
        height: 100%;
        background: url('@/assets/img/start-screen/bg.svg') no-repeat center;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-height: 1165px;
            background: url('@/assets/img-mobile/start-screen/start-mobile-bg.png') no-repeat center;

        }
    }

    .about {
        max-height: 588px;
        height: 100%;
        background: $color-light-xl;

        @media (max-width:768px) {
            max-height: 1048px;

        }
    }

    .pets {
        max-height: 877px;
        height: 100%;
        background: $color-light-l;
    }

    .help {
        max-height: 611px;
        height: 100%;
        background: $color-light-xl;

        @media (max-width:768px) {
            max-height: 779px;
            height: 100%;
        }
    }

    .donation {
        max-height: 462px;
        height: 100%;
        background: $color-light-l;

        @media (max-width:768px) {
            max-height: 783px;
            height: 100%;
        }
    }

    .footer {
        max-height: 350px;
        height: 100%;
        background: url('@/assets/img/footer-screen/footer-bg.png') no-repeat center;

        @media (max-width:768px) {
            max-height: 639px;
            height: 639px;
            background: url('@/assets/img-mobile/footer-screen/footer-gradient-background.png') no-repeat;
        }
    }
}
</style>