<script setup>
</script>

<template>
    <div class="about_container">
        <img src="@/assets/img/about-screen/about-pets.png" alt="pets">
        <section class="about_content">
            <h1 class="about_header">
                About the shelter “Cozy House”
            </h1>
            <p class="about_descr_top">
                Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find
                a
                family. The others will continue to live with us and will be waiting for a lucky chance to become dearly
                loved.
            </p>
            <p class="about_descr_bottom">
                We feed our wards with the best food and make sure that they do not get sick, feel comfortable
                (including
                psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels.
                About
                12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to
                the
                pets and would hardly ever leave them alone.
            </p>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.about_container {
    max-height: 408px;
    max-width: 1200px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 80px 40px 100px;
    gap: 120px;

    .about_content {
        max-width: 430px;
        display: flex;
        flex-direction: column;
        gap: 25px;

        .about_header {
            max-width: 370px;
            color: $color-dark-l;
            font-size: 35px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            letter-spacing: 2.1px
        }

        .about_descr_top,
        .about_descr_bottom {
            color: $color-dark-xl;
            font-family: $arial;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
        }
    }
}

@media (max-width: 1280px) and (min-width: 768px) {
    .about_container {
        margin: 0;
        margin: 80px 166px 100px 165px;
        max-width: 437px;
        max-height: 868px;
        width: 100%;
        height: 100%;
        align-items: center;
        flex-direction: column-reverse;

        img {
            width: 300px;
            height: 408px;
        }
    }
}

@media (max-width: 768px) and (min-width: 320px) {
    .about_container {
        margin: 0;
        margin: 42px 10px;
        max-width: 300px;
        max-height: 890px;
        align-items: center;
        flex-direction: column-reverse;
        gap: 42px;

        .about_content {
            max-width: 300px;
            gap: 22px;
            align-items: center;

            .about_header {
                text-align: center;
                font-size: 25px;
            }

            p {
                text-align: justify;
                max-width: 270px;
            }
        }

        img {
            width: 260px;
            height: 353.6px;
        }
    }
}
</style>