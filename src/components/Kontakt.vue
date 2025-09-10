<template>
    <div
        class="h-100 contact-container d-flex flex-column justify-content-center"
        id="kontakt">
        <div class="page-title">
            <h1>Kontakt</h1>
        </div>
        <div class="h-100 d-flex justify-content-center align-items-center">
            <div class="h-100 w-75 d-flex align-items-start justify-content-center">
                <div v-intersect class="w-50" data-animation="slide-in-top">
                    <BForm @submit="onSubmit" @reset="onReset" class="w-100 contact-form p-5">
                        <!-- Name input -->
                        <BFormGroup id="input-group-1" label="Name" label-for="input-1" class="mb-3 w-75">
                            <BFormInput id="input-1" v-model="form.name" required />
                        </BFormGroup>

                        <!-- Wohnort input -->
                        <BFormGroup id="input-group-2" label="Wohnort" label-for="input-2" class="mb-3 w-75">
                            <BFormInput id="input-2" v-model="form.address" />
                        </BFormGroup>

                        <!-- Email input -->
                        <BFormGroup id="input-group-3" label="Email Adresse" label-for="input-3" type="email" class="mb-3 w-75">
                            <BFormInput id="input-3" v-model="form.email" placeholder="name@email.de" required />
                        </BFormGroup>

                        <!-- Message -->
                        <BFormGroup id="input-group-4" label="Nachricht an uns" label-for="input-4" class="mb-3 w-75">
                            <BFormTextarea id="input-4" v-model="form.message" placeholder="Nachricht an uns ... "
                                type="textarea" required />
                        </BFormGroup>

                        <span class="d-flex justify-content-end">
                            <button type="submit" class="contact-btn mt-3 fs-6 d-flex align-items-center">
                                <p class="me-2 mb-0 kontakt-btn-text">Absenden</p>
                            </button>
                        </span>
                    </BForm>
                </div>
                <div v-intersect class="email-container w-50 d-flex flex-column align-items-center justify-content-center" data-animation="slide-in-bottom">
                    <span>
                        <p class="fs-5 anfrage-text">Du hast eine Frage, möchtest zu einer Probe vorbeikommen oder uns buchen? Dann kontaktiere uns!</p>
                    </span>
                    <span class="d-flex justify-content-start">
                        <a href="mailto:dacapo-chor@web.de" class="text-decoration-none me-3">
                            <Email height="100" width="200" />
                            <p class="mt-3">dacapo-chor@web.de</p>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { BForm, BFormTextarea, BFormInput, BFormGroup } from 'bootstrap-vue-next';
    import Email from './reusables/Email.vue';

    const form = reactive({
        email: '',
        name: '',
        address: '',
        message: ''
    })
</script>

<style lang="scss" scoped>
.contact-container {
    width: 100%;
    min-height: 100vh;
    background-image: url('@/assets/pattern-bg-about.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 1;

    .page-title h1 {
        background-color: #fff;
    }

    .contact-form {
        background-color: $accent2;
        color: $background;
        justify-items: center;
        color: black;

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
            background-color: #fc4936;
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

    .email-container {
        padding: 5rem;
        margin-left: 2rem;
        position: relative;
        z-index: 0;
        height: 70%;

        // Use :deep() here because scoped CSS doesn’t apply to <svg> children.
        // Vue adds data-v-* attributes for scoping, but SVG inner elements like <path>
        // don’t get those, so we need :deep() to style them properly.
        :deep(svg .hover-fill) {
            fill: #046b52;
        }

        :deep(svg:hover .hover-fill) {
            opacity: 0.6;
            fill: #fc4936;
        }
    }

    .email-container::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url("@/assets/email-bg.svg");
        background-size: cover;
        background-position-y: center;
        pointer-events: none;
        z-index: -1;
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

// ANIMATIONS
.slide-in-top {
	-webkit-animation: slide-in-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-in-top {
    0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes slide-in-top {
    0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
}

.slide-in-bottom {
	-webkit-animation: slide-in-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-in-bottom {
    0% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes slide-in-bottom {
    0% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
}

</style>
