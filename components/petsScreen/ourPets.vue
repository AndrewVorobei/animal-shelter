<script setup>
import pet from './pet.vue'
import { useRoute } from 'vue-router';
const route = useRoute();
let currentPage = route.path;
let breakpoint_middle = 1280;
let breakpoint_small = 768;
let breakpoint = 320;
const pets = usePets();
const currentPetIndex = ref(0);
const displayedPets = ref([]);
let displayedPetsCount = ref(null);
const handleResize = () => {
    updateDisplayedPets();
};

const updateDisplayedPets = () => {
    if (currentPage === '/ourPets') {

        if (window.innerWidth <= breakpoint_middle && window.innerWidth >= breakpoint_small) {
            displayedPetsCount.value = 6
        } else if (window.innerWidth > breakpoint && window.innerWidth < breakpoint_small) {
            displayedPetsCount.value = 3
        } else {
            displayedPetsCount.value = 8
        }
        const startIndex = currentPetIndex.value;

        displayedPets.value = pets.value.slice(startIndex, startIndex + displayedPetsCount.value);
    }
};

onMounted(() => {
    window.addEventListener("resize", handleResize);
    updateDisplayedPets();

});
onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
});


</script>

<template>
    <div class='ourPets_container'>
        <div class="ourPets_section" v-if="currentPage === '/ourPets'">
            <div class="pets_row">
                <pet v-for="pet in displayedPets" :key="pet.id" :pet="pet"></pet>
            </div>
        </div>
        <div class="ourPets_navigation">
            <button class="pagination_btn">
                <span>
                    &lt&lt
                </span>
            </button>
            <button class="pagination_btn ">
                <span>
                    &lt
                </span>
            </button>
            <button class="pagination_btn">
                {{ 1 }}
            </button>
            <button class="pagination_btn">
                <span>
                    >
                </span>
            </button>
            <button class="pagination_btn">
                <span>
                    >>
                </span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ourPets_container {
    margin: 80px 40px 100px;
    max-width: 1200px;
    max-height: 1162px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    .pets_header {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: $georgia;
        color: $color-dark-l;
        max-width: 400px;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: 2.1px;
    }

    .ourPets_section {
        max-width: 1200px;
        width: 100%;
        gap: 30px;

        .pets_row {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;

            width: 100%;
            flex: 0 0 calc(25%);
        }
    }

    .ourPets_navigation {
        display: flex;
        gap: 20px;

        .pagination_btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 52px;
            height: 52px;
            border: 2px solid $color-primary;
            border-radius: 100px;
            background: none;

            span {
                color: $color-dark-3xl;
                font-family: $georgia;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 115%;
                letter-spacing: 1.2px;
            }
        }
    }
}

@media (max-width: 1280px) and (min-width: 768px) {
    .ourPets_container {
        margin: 0;
        margin: 60px 30px 70px;
        max-height: 1603px;
        gap: 30px;

        .pets_header {
            margin-top: 20px;
        }

        .pets_row {
            justify-content: center;
        }
    }
}

@media (max-width: 768px) and (min-width: 320px) {
    .ourPets_container {
        max-height: 1565px;
        max-width: 300px;
        margin: 42px 10px;

        .pets_header {
            font-size: 25px;
            letter-spacing: 1.5px;
        }

        .ourPets_section {
            display: flex;
            justify-content: center;

            .pets_row {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                gap: 40px;

                width: 100%;
                flex: 0 0 calc(25%);
            }
        }

        .ourPets_navigation {
            display: flex;
            gap: 10px;

            .pagination_btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 52px;
                height: 52px;
                border: 2px solid $color-primary;
                border-radius: 100px;
                background: none;

                span {
                    color: $color-dark-3xl;
                    font-family: $georgia;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 115%;
                    letter-spacing: 1.2px;
                }

                &:nth-child(1) {
                    border: 2px solid $color-dark-s;

                    span {
                        color: $color-dark-s;
                    }
                }

                &:nth-child(2) {
                    border: 2px solid $color-dark-s;

                    span {
                        color: $color-dark-s;
                    }
                }
            }


        }
    }
}
</style>