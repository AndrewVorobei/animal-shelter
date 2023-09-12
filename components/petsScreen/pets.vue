<script setup>
import pet from "./pet.vue";
import { ref, computed } from "vue"
import { useRouter } from 'vue-router';
const router = useRouter()
const pets = usePets();
const displayedPets = ref([]);
let displayedPetsCount = ref(null);
const currentPetIndex = ref(0);
let breakpoint_middle = 1280;
let breakpoint_small = 768;
let breakpoint = 320
const handleResize = () => {
    updateDisplayedPets();
};

const updateDisplayedPets = () => {

    if (window.innerWidth > breakpoint && window.innerWidth < breakpoint_small) {
        displayedPetsCount.value = 1
    } else if (window.innerWidth <= breakpoint_middle && window.innerWidth >= breakpoint_small) {
        displayedPetsCount.value = 2
    } else {
        displayedPetsCount.value = 3
    }


    const startIndex = currentPetIndex.value;

    displayedPets.value = pets.value.slice(startIndex, startIndex + displayedPetsCount.value);
};

const toRest = () => {

    router.push('/ourPets')
}

const next = () => {
    if (currentPetIndex.value < pets.value.length - displayedPetsCount.value) {
        currentPetIndex.value++;
        updateDisplayedPets();
    }
};

const prev = () => {
    if (currentPetIndex.value > 0) {
        currentPetIndex.value--;
        updateDisplayedPets();
    }
};

const active_btn = computed(() => {
    const isPrevActive = currentPetIndex.value > 0;

    const isNextActive = currentPetIndex.value < pets.value.length - displayedPetsCount.value;

    return {
        isPrevActive,
        isNextActive,
    };
});

onMounted(() => {
    window.addEventListener("resize", handleResize);
    updateDisplayedPets();

});
onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
});

</script>

<template>
    <div class="pets_container">
        <h1 class="pets_header">
            Our friends who
            <span>are looking for a house</span>
        </h1>
        <div class="pets_slider">
            <button :class="{ isActivePrev: !active_btn.isPrevActive }" class="slider_btn" @click="prev">
                <img src="/arrows/arrow_prev.svg" alt="arrow back">
            </button>
            <div class="pets_block">
                <transition-group name="component-fade">

                    <pet v-for="pet in displayedPets" :pet="pet" :key="pet.id">
                        {{ pet.name }}
                    </pet>
                </transition-group>
            </div>
            <button :class="{ isActiveNext: !active_btn.isNextActive }" class="slider_btn" @click="next">
                <img src="/arrows/arrow_next.svg" alt="arrow back">
            </button>
        </div>
        <button @click="toRest" class="pets_footer_btn">
            <span>Get to know the rest</span>
        </button>

    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/_slider-animation.scss';

.pets_container {
    margin: 80px 40px 100px;
    max-height: 697px;
    max-width: 1200px;
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

    .pets_slider {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .pets_block {
            overflow: hidden;
            display: inline-flex;
            gap: 90px;
        }

        .slider_btn {
            max-height: 52px;
            max-width: 52px;
            display: inline-flex;
            padding: 23px 19px;
            flex-direction: column;
            align-items: center;
            border-radius: 100px;
            border: 2px solid #F1CDB3;
            background: $color-light-s;

            &:hover {
                border-radius: 100px;
                border: 2px solid #F1CDB3;
                background: rgba(253, 220, 196, 1);
            }
        }

        .isActiveNext,
        .isActivePrev {
            border: 2px solid $color-dark-s;

            &:hover {
                border: 2px solid $color-dark-s;
                background: none;
            }
        }

    }


    .pets_footer_btn {
        background: $color-primary;
        border-radius: 100px;
        padding: 15px 45px;
        align-items: center;

        span {
            color: $color-dark-3xl;
            font-family: $georgia;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            letter-spacing: 1.02px;
        }

        &:hover {
            background: $color-primary-light;
        }
    }
}


@media (max-width: 1280px) and (min-width: 768px) {

    .pets_container {
        margin: 0;
        max-width: 708px;
        margin: 80px 30px 100px;

        .pets_slider {
            .pets_block {
                gap: 40px;
            }
        }
    }


}

@media (max-width: 768px) and (min-width: 320px) {
    .pets_container {
        margin: 0;
        max-width: 300px;
        max-height: 707px;
        margin: 42px 10px;
        gap: 42px;

        .pets_header {
            text-align: center;
            font-size: 25px;
            letter-spacing: 1.5px;
        }

        .pets_slider {
            flex-direction: column-reverse;

            .pets_block {
                order: 1;
            }

            &:first-child {
                order: 2;
                flex-direction: row;
            }

            &:last-child {
                order: 3;
                flex-direction: row;

            }
        }
    }
}
</style>