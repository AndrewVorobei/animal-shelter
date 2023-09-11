<script setup>
import { ref, computed } from "vue"
import pet from "./pet.vue";
import index from "@/assets/img/pets-imgs/index.js"
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute();

let currentPage = route.path;
const pets = ref([
    { id: 1, name: 'Katrine', img: index.katrine, breed: 'Cat - British Shorthair', description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.." },
    { id: 2, name: 'Jennifer', img: index.jennifer, breed: 'Dog - Labrador', description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys." },
    { id: 3, name: 'Woody', img: index.woody, breed: 'Dog - Golden Retriever', description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him." },
    { id: 4, name: 'Sophia', img: index.sophia, breed: 'Dog - Shih tzu', description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice." },
    { id: 5, name: 'Timmy', img: index.timmy, breed: 'Cat - British Shorthair', description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with." },
    { id: 6, name: 'Charly', img: index.charly, breed: 'Dog - Jack Russell Terrier ', description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy." },
    { id: 7, name: 'Scarlett', img: index.scarlett, breed: 'Dog - Jack Russell Terrier', description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human." },
    { id: 8, name: 'Freddie', img: index.freddie, breed: 'Cat - British Shorthair', description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home." },

]);
const displayedPets = ref([]);
let displayedPetsCount = ref(null);
const currentPetIndex = ref(0);
let breakpoint = 1000;

const handleResize = () => {
    updateDisplayedPets();
};

const updateDisplayedPets = () => {
    if (currentPage === '/') {
        displayedPetsCount.value = window.innerWidth <= breakpoint ? 2 : 3;
    } else if (currentPage === '/ourPets') {
        displayedPetsCount.value = window.innerWidth <= breakpoint ? 6 : 8
    }
    const startIndex = currentPetIndex.value;

    displayedPets.value = pets.value.slice(startIndex, startIndex + displayedPetsCount.value);
};

const toRest = () => {
    if (currentPage !== '/ourPets') {
        router.push('/ourPets')
    }
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
    <div class="pets_container" :class="{ 'ourPets_container': currentPage === '/ourPets' }">
        <h1 class="pets_header">
            Our friends who
            <span>are looking for a house</span>
        </h1>
        <div class="pets_slider" v-if="currentPage !== '/ourPets'">
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
        <button @click="toRest" class="pets_footer_btn" v-if="currentPage !== '/ourPets'">
            <span>Get to know the rest</span>
        </button>
        <div class="ourPets_section" v-if="currentPage === '/ourPets'">
            <div class="pets_row">
                <pet v-for="pet in displayedPets" :key="pet.id" :pet="pet"></pet>
            </div>
        </div>
        <div class="ourPets_navigation" v-if="currentPage === '/ourPets'">
            <button class="pagination_btn" :class="{ isActivePrev: !active_btn.isNextActive }">
                <span>
                    &lt&lt
                </span>
            </button>
            <button class="pagination_btn " :class="{ isActivePrev: !active_btn.isNextActive }">
                <span>
                    &lt
                </span>
            </button>
            <button class="pagination_btn">
                {{ 1 }}
            </button>
            <button class="pagination_btn" :class="{ isActivePrev: active_btn.isNextActive }">
                <span>
                    >
                </span>
            </button>
            <button class="pagination_btn" :class="{ isActivePrev: active_btn.isNextActive }">
                <span>
                    >>
                </span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.pets_container,
.ourPets_container {
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

.ourPets_container {
    max-height: 1162px;
    height: 100%;

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
            border: 2px solid $color-primary ;
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

.component-fade-enter-active,
.component-fade-leave-active {
    transition: all 0.4s ease-in-out;
}

.component-fade-leave-from {
    transform: translate(-100px);
}

.component-fade-enter-from {
    opacity: 0;
    transform: translate(100px);
}

.component-fade-enter-to {
    opacity: 1;
    transform: translate(-100px);
}

.component-fade-leave-to {
    opacity: 0;
    transform: translate(-100px);
}

@media (max-width:768px) {

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
</style>