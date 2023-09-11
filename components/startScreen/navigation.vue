<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

const currentPage = route.path;

const scrollToHelp = () => {
    const helpComponent = document.querySelector('.help');
    if (helpComponent) {
        helpComponent.scrollIntoView({ behavior: 'smooth' });
    }
};

const scrollToContacts = () => {
    const footerComponent = document.querySelector('.footer, .ourPets_footer');
    if (footerComponent) {
        footerComponent.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<template>
    <div class="navigation_block" :class="{ 'our-pets-page': currentPage === '/ourPets' }">
        <div class="logo">
            <span class="logo_name">
                Cozy House
            </span>
            <span class="logo_descr">
                Shelter for pets in Boston
            </span>
        </div>
        <nav class="navigation">
            <NuxtLink to="/" :class="{ active: currentPage === '/' }" class="navigation_link">About the shelter</NuxtLink>
            <NuxtLink to="/ourPets" :class="{ active: currentPage === '/ourPets' }" class="navigation_link">Our pets
            </NuxtLink>
            <NuxtLink to="/" @click="scrollToHelp" class="navigation_link">Help the shelter</NuxtLink>
            <NuxtLink @click="scrollToContacts" class="navigation_link">Contacts</NuxtLink>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.navigation_block,
.our-pets-page {
    display: flex;
    padding: 60px 40px 0 40px;
    gap: 573px;
    justify-content: space-between;
    align-items: center;

    .logo {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .logo_name {
            color: $color-primary;
            font-family: $georgia;
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: 110%;
            letter-spacing: 1.92px;
        }

        .logo_descr {
            color: $color-light-xl;
            font-family: $arial;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 1.3px;
        }
    }

    .navigation {
        display: flex;
        align-content: center;
        gap: 35px;

        * {
            display: flex;
            flex-direction: column;
            color: $color-dark-s;
            font-family: Arial;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;


            &:hover {
                color: $color-light-s;
            }
        }

        .active {
            &::after {
                content: "";
                height: 3px;
                width: 100%;
                background: $color-primary;
            }
        }


    }
}

.our-pets-page {
    padding: 30px 40px;

    .logo {
        .logo_name {
            color: $color-dark-l;
        }

        .logo_descr {
            color: $color-dark-3xl;
        }
    }

    .navigation {
        * {
            color: $color-dark-l;

            &:hover {
                color: $color-dark-3xl;
            }
        }
    }
}

@media (max-width:768px) {

    .navigation_block,
    .our-pets-page {
        max-width: 708px;
        padding: 0;
        margin: 30px 30px 30px 30px;
        gap: 81px;

        .navigation,
        .logo_name {
            white-space: nowrap;
        }
    }

    // .our-pets-page {
    //     max-height: 60px;
    //     margin: 30px;

    //     .logo {

    //         .logo_name,
    //         .navigation {
    //             white-space: nowrap;
    //         }

    //     }
    // }
}
</style>