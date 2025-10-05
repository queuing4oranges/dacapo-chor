<template>
    <div
        class="observe-section contact-container d-flex flex-column justify-content-center"
        id="kontakt">
        <div class="page-title">
            <h1>Kontakt</h1>
        </div>
        <div class="contact-column-wrapper w-75 d-flex align-items-center justify-content-center">
            <div v-intersect class="text-container" data-animation="slide-in-fwd-left">
                <p>
                    <strong>da capo</strong> ist noch immer auf der <strong>Suche nach weiteren Männerstimmen</strong>. Wichtiger als weitreichende Vorerfahrung ist uns das zwischenmenschliche Auskommen.
                    Wenn du Interesse an einer unverbindlichen Schnupperstunde hast, melde dich bei uns!
                </p>
                    <br>
                        <strong class="proben-text fs-5">Wir proben immer mittwochs von 19.00 bis 21.15 Uhr.</strong>
                    <br>
                <p>
                    Du möchtest uns buchen oder hast ein anderes Anliegen? Nutze auch dafür gern unser Kontaktformular!
                    <i class="bi bi-arrow-right"></i>
                </p>
            </div>
            <div v-intersect class="form-container" data-animation="slide-in-fwd-right">
                <BForm @submit="onSubmit" @reset="onReset" class="w-100 contact-form p-3 p-md-5">
                    <!-- Name input -->
                    <BFormGroup id="input-group-1" label="Name" label-for="input-1" class="mb-3">
                        <BFormInput id="input-1" v-model="form.name" required />
                    </BFormGroup>

                    <!-- Wohnort input -->
                    <BFormGroup id="input-group-2" label="Wohnort" label-for="input-2" class="mb-3">
                        <BFormInput id="input-2" v-model="form.address" />
                    </BFormGroup>

                    <!-- Email input -->
                    <BFormGroup id="input-group-3" label="Email Adresse" label-for="input-3" type="email" class="mb-3">
                        <BFormInput id="input-3" v-model="form.email" placeholder="name@email.de" required />
                    </BFormGroup>

                    <!-- Message -->
                    <BFormGroup id="input-group-4" label="Nachricht an uns" label-for="input-4" class="mb-3">
                        <BFormTextarea id="input-4" v-model="form.message" placeholder="Nachricht an uns ... "
                            type="textarea" required />
                    </BFormGroup>

                    <span class="d-flex justify-content-end">
                        <button v-if="!isMobile" type="submit" class="contact-btn mt-3 fs-6 d-flex align-items-center">
                            <p class="me-2 mb-0 kontakt-btn-text">Absenden</p>
                        </button>
                        <b-button v-else variant="outline">
                            Absenden
                        </b-button>
                    </span>
                </BForm>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { BForm, BFormTextarea, BFormInput, BFormGroup } from 'bootstrap-vue-next';

const props = defineProps({
    activeLink: String,
    isMobile: Boolean
});

const form = reactive({
    email: '',
    name: '',
    address: '',
    message: ''
})
</script>

<style lang="scss" scoped>
.contact-container,
.contact-container * {
    box-sizing: border-box;
}

.contact-container {
    width: 100%;
    min-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url('@/assets/pattern-bg-about.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 1;
    font-size: 1.25rem;

    .page-title h1 {
        background-color: #fff;
    }

    .form-container {
        width: 50%;
        max-width: 100%;
    }

    .contact-column-wrapper {
        height: 100%;
        margin: 0 auto 3rem;
    }

    .text-container {
        width: 50%;
        max-width: 100%;
        background-color: #fff;

        .proben-text {
            color: #b37800;
        }

        span {
            padding: 2rem;
            width: 100%;
        }

        a,
        .email-address {
            color: #046b52 !important;
            text-decoration-color: #046b52 !important;

            &:hover {
                opacity: 0.9;
            }
        }
    }

    .contact-form {
        background-color: $accent2;
        color: $background;
        justify-items: center;
        color: black;

        .b-form-group {
            width: 75%;
        }

        .form-control,
        button {
            border-radius: unset;
        }

        .contact-btn {
            font-size: 16px;
            font-weight: 200;
            letter-spacing: 1px;
            padding: 13px 20px 13px;
            outline: 0;
            border: 1px solid black;
            cursor: pointer;
            position: relative;
            background-color: transparent;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            z-index: 0;
            overflow: visible;
            color: black;

            &:hover {
                color: #4fc9d2;
            }
        }

        .contact-btn::after {
            content: "";
            background-color: #b37800;
            border: #4fc9d2 1px solid;
            width: 100%;
            z-index: -1;
            position: absolute;
            height: 100%;
            top: 7px;
            left: 7px;
            transition: 0.2s;
        }

        .kontakt-btn-text {
            color: black;
            font-weight: bolder;
        }

        .contact-btn:hover .kontakt-btn-text {
            color: #4fc9d2;
        }

        .contact-btn:hover::after {
            top: 0px;
            left: 0px;
            background-color: #046b52;
        }

        @media (min-width: 768px) {
            .contact-btn {
                padding: 13px 50px 13px;
            }
        }
    }

    .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5rem;
        position: relative;
        z-index: 0;
        height: 70%;
        margin: auto 2rem;

        .anfrage-text {
            font-size: 1.25rem;
        }
    }
}

.contact-container::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("@/assets/haus-bg.png");
    background-size: cover;
    background-position-y: center;
    opacity: 0.4;
    z-index: -1;
    pointer-events: none;
}

/* Styling for mobiles */
@media (max-width: 992px) {
    .contact-container {
        justify-content: flex-start;
        font-size: 1rem;

        .contact-column-wrapper {
            display: flex;
            flex-direction: column;
            max-width: 100vw;
            height: 100%;
        }

        .form-container,
        .text-container {
            width: 100%;
            max-width: 100%;
            max-height: 100%;
            height: 100%;
        }

        .text-container {
            padding: 0;
            margin: 0;
            margin-top: 3rem;
        }

        .anfrage-text {
            font-size: 1rem !important;
        }

        .contact-form .b-form-group {
            width: 100%;
        }

        button.btn-outline {
            background-color: #046b52;
            color: #d1f3e2;
        }
    }
}
</style>
