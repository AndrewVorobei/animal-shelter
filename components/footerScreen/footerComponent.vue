<script setup>

</script>

<template>
    <div class="footer_container">
        <div class="footer_left">
            <h1 class="footer_left_header">
                For questions <span> and suggestions </span>
            </h1>
            <div class="footer_left_email">
                <img src="@/assets/img/footer-screen/email.svg" alt="email">
                <span class="email">
                    email@shelter.com
                </span>
            </div>
            <div class="footer_left_phone">
                <img src="@/assets/img/footer-screen/phone.svg" alt="phone">
                <span class="phone">
                    +13 674 567 75 54
                </span>
            </div>
        </div>
        <div class="footer_middle">
            <h1 class="footer_middle_header">
                We are waiting for your visit
            </h1>
            <div class="footer_middle_location">
                <img src="@/assets/img/footer-screen/location.svg" alt="location">
                <span class="location">
                    <NuxtLink
                        to="https://www.google.com/maps/place/1+Centre+St,+Boston,+MA+02119,+%D0%A1%D0%A8%D0%90/@42.3217698,-71.0941378,14z/data=!4m6!3m5!1s0x89e37a260516d22d:0x67663c18c6a54ce9!8m2!3d42.3300628!4d-71.0920028!16s%2Fg%2F11td12jd0m?entry=ttu">

                        1 Central Street, Boston (entrance from the store)
                    </NuxtLink>
                </span>
            </div>
            <div class="footer_left_sublocation">
                <img src="@/assets/img/footer-screen/location.svg" alt="location">
                <span class="location">
                    <NuxtLink
                        to="https://www.google.com/maps/search/1+Central+Street,+Boston/@42.3107005,-71.0590214,12z?entry=ttu">

                        18 South Park, London
                    </NuxtLink>
                </span>
            </div>
        </div>
        <img src="@/assets/img/footer-screen/footer-puppy.png" alt="footer puppy" class='footer_puppy_bg'>
    </div>
</template>

<style lang="scss" scoped>
.footer_container {
    max-width: 1200px;
    max-height: 310px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 40px 40px 0 40px;

    .footer_left,
    .footer_middle {
        display: flex;
        flex-direction: column;
        gap: 40px;
        max-width: 302px;

        .footer_left_header,
        .footer_middle_header {
            color: $color-light-xl;
            font-family: $georgia;
            font-size: 35px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            letter-spacing: 2.1px;
        }

        .footer_left_email,
        .footer_left_phone,
        .footer_middle_location,
        .footer_left_sublocation {
            display: flex;
            gap: 20px;

            .email,
            .phone,
            .location {
                color: $color-primary;
                font-family: $georgia;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 115%;
                letter-spacing: 1.2px;

                * {
                    color: $color-primary;
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
}


@media (max-width: 1280px) and (min-width: 768px) {
    .footer_container {
        margin: 0;
        max-height: 234px;
        max-width: 708px;
        display: flex;
        gap: 60px;
        margin: 30px 30px 0 30px;

        .footer_left {
            margin-left: 34px;
            max-width: 278px;
            max-height: 234px;

            .footer_left_header {
                display: flex;
                flex-direction: column;

                span {
                    white-space: nowrap;
                }
            }
        }

        .footer_middle {
            margin-right: 34px;
            max-width: 302px;
            max-height: 234px;
        }

        .footer_puppy_bg {
            margin: 298px 0 0 170px;
            position: absolute;
            width: 300px;
            height: 310px;
        }
    }
}

@media (max-width: 768px) and (min-width: 320px) {
    .footer_container {
        max-height: 470px;
        max-width: 300px;
        margin: 30px 10px 0;
        flex-direction: column;
        gap: 40px;

        .footer_left,
        .footer_middle {
            max-width: 280px;
            margin-inline: 10px;

            .footer_left_header,
            .footer_middle_header {
                display: flex;
                flex-direction: column;
                font-size: 25px;
                letter-spacing: 1.5px;
                text-align: center;

            }

            .footer_middle_location {
                gap: 19.87px;

                img {
                    width: 21.854px;
                }

                .location {
                    a {
                        display: flex;
                        width: 258.278px;
                        max-height: 46px;

                    }
                }
            }
        }

        .footer_puppy_bg {
            margin: 510px 20px 0;
            position: absolute;
            width: 260px;
            height: 269px;
        }
    }
}
</style>