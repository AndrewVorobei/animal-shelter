<script setup>
import { ref } from "vue"
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


const isOpen = ref(false);
</script>

<template>
    <div class="navigation_block" :class="{ 'our-pets-page': currentPage === '/ourPets' }">
        <div class="logo" :class="{ 'absolute_logo': isOpen }">
            <span class="logo_name">
                Cozy House
            </span>
            <span class="logo_descr">
                Shelter for pets in Boston
            </span>
        </div>
        <nav class="navigation">
            <div class="links">
                <NuxtLink to="/" :class="{ active: currentPage === '/' }" class="navigation_link">About the shelter
                </NuxtLink>
                <NuxtLink to="/ourPets" :class="{ active: currentPage === '/ourPets' }" class="navigation_link">Our pets
                </NuxtLink>
                <NuxtLink to="/" @click="scrollToHelp" class="navigation_link">Help the shelter</NuxtLink>
                <NuxtLink @click="scrollToContacts" class="navigation_link">Contacts</NuxtLink>
            </div>

        </nav>
        <div id="sidemenu">
            <button class="sidemenu__btn" @click="isOpen = !isOpen" v-bind:class="{ 'active_burger_btn': isOpen }">
                <img src="@/assets/img-small/navigation/burger.svg" alt="">
            </button>
            <transition name="translateX">
                <nav v-show="isOpen">
                    <div class="sidemenu__wrapper">
                        <ul class="sidemenu__list">
                            <NuxtLink to="/" :class="{ active: currentPage === '/' }" class="navigation_link">About the
                                shelter
                            </NuxtLink>
                            <NuxtLink to="/ourPets" :class="{ active: currentPage === '/ourPets' }" class="navigation_link">
                                Our pets
                            </NuxtLink>
                            <NuxtLink to="/" @click="scrollToHelp" class="navigation_link">Help the shelter</NuxtLink>
                            <NuxtLink @click="scrollToContacts" class="navigation_link">Contacts</NuxtLink>
                        </ul>
                    </div>
                </nav>
            </transition>
        </div>

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

        .links {
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
}

#sidemenu {
    display: none;
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
        .links {
            * {
                color: $color-dark-l;

                &:hover {
                    color: $color-dark-3xl;
                }
            }
        }
    }
}


.burger {
    display: none;
}

@media (min-width:768px) and (max-width: 1280px) {

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
}

@media (min-width: 320px) and (max-width: 768px) {

    .navigation_block,
    .our-pets-page {
        padding: 0;
        max-width: 257px;
        margin: 30px 53px 0 10px;
        gap: 43px;

        .logo {
            white-space: nowrap;
        }

        .absolute_logo {
            position: absolute;
            z-index: 2;
            margin: 30px 0 0 35px;
        }

        .navigation {
            display: none;
        }

        #sidemenu {
            display: block;

            .sidemenu__btn {
                border: none;
                background: none;
            }

            .active_burger_btn {
                position: absolute;
                transform: rotate(-90deg);
                z-index: 2;
                margin-left: 250px;
            }

            nav {
                max-width: 320px;
                max-height: 823px;
                background: $color-dark-3xl;
                position: absolute;
                top: 0;
                left: 30%;
                z-index: 1;

                .sidemenu__wrapper {
                    .sidemenu__list {
                        padding: 0;
                        margin: 248px 39px;
                        max-width: 243px;
                        max-height: 327px;
                        display: flex;
                        flex-direction: column;
                        gap: 40px;

                        a {
                            color: $color-dark-s;
                            font-family: $arial;
                            font-size: 32px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 160%;

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
                }
            }


        }

        .translateX-enter {
            transform: translateX(-200px);
            opacity: 0;
        }

        .translateX-enter-active,
        .translateX-leave-active {
            transform-origin: top left 0;
            transition: .2s ease;
        }

        .translateX-leave-to {
            transform: translateX(-200px);
            opacity: 0;
        }




    }

    .our-pets-page {
        margin: 30px 50px 30px 10px;
    }


}
</style>