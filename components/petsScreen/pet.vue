<script setup>
import petModal from "@/components/petsScreen/petModal.vue"

const props = defineProps({
    pet: {
        type: Object,
        required: true
    }
});
const openModal = () => {
    isModalOpen.value = true;
    document.body.classList.add('body-no-scroll')
};

const closeModal = () => {
    isModalOpen.value = false;
    document.body.classList.remove('body-no-scroll');
};
const isModalOpen = ref(false);


</script>

<template>
    <div class="pet_container">
        <img :src="pet.img" alt="">
        <span class="pet_name">
            <slot></slot>
        </span>
        <button class="learn_pet_btn" @click="openModal">
            <span>Learn more</span>
        </button>
        <transition name="modal">
            <petModal v-if="isModalOpen" :pet="pet">
                <button @click="closeModal" class="close_modal">

                </button>
            </petModal>
        </transition>
    </div>
</template>

<style>
.body-no-scroll {
    overflow: hidden;
}
</style>

<style lang="scss" scoped>
.pet_container {
    max-height: 435px;
    max-width: 270px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 9px;
    gap: 30px;
    padding-bottom: 30px;
    background: $color-light-s;

    .pet_name {
        color: $color-dark-l;
        font-family: $georgia;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.2px;
    }

    .learn_pet_btn {
        display: flex;
        padding: 15px 45px;
        align-items: center;
        border-radius: 100px;
        border: 2px solid #F1CDB3;
        background: none;

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

    &:hover {
        box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, $alpha: 0.04);
    }
}

.close_modal {

    width: 52px;
    height: 52px;
    display: flex;
    background: none;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    background: url('@/assets/img/pets-imgs/modal-close.svg');

    &:hover {
        background: url('@/assets/img/pets-imgs/close-hover.svg');
    }
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>