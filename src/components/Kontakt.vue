<template>
    <div
        class="observe-section contact-container d-flex flex-column justify-content-center"
        id="kontakt">
        <div class="page-title">
            <h1>Kontakt</h1>
        </div>
        <DatenschutzModal :isVisible="showModal" @close="showModal = false" />
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
                <p v-if="!isMobile" class="mt-4">
                    Als gemeinnütziger Verein finanzieren wir uns vorrangig durch Spenden. So können wir Honorare für Auftritte möglichst gering halten. Wenn du uns unterstützen willst, kannst du das hier tun: <br>DE21 8559 0100 4564 544006 <br>Eine Spendenquittung erhältst du auf Anfrage.
                </p>
            </div>
            <div v-intersect class="form-container" data-animation="slide-in-fwd-right">
                <form
                    @submit.prevent="onSubmit"
                    @reset="onReset"
                    class="w-100 contact-form p-3 p-md-5"
                >
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input
                            v-model="name"
                            v-bind="nameAttrs"
                            id="name"
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors.name }"
                        />
                        <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
                    </div>

                    <div class="mb-3">
                        <label for="address" class="form-label">Wohnort</label>
                        <input
                            v-model="address"
                            v-bind="addressAttrs"
                            id="address"
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors.address }"
                        />
                        <div v-if="errors.address" class="invalid-feedback">{{ errors.address }}</div>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email Adresse</label>
                            <input
                                v-model="email"
                                v-bind="emailAttrs"
                                id="email"
                                type="text"
                                class="form-control"
                                :class="{ 'is-invalid': errors.email }"
                            />
                            <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                    </div>

                    <div class="mb-3">
                        <label for="message" class="form-label">Nachricht an uns</label>
                        <textarea
                            v-model="message"
                            v-bind="messageAttrs"
                            id="message"
                            type="textarea"
                            class="form-control"
                            :class="{ 'is-invalid': errors.message }"
                        ></textarea>
                        <div v-if="errors.message" class="invalid-feedback">{{ errors.message }}</div>
                    </div>

                    <!-- Datenschutz (checkbox) -->
                    <!-- <div class="form-check mt-4">
                        <Field name="agree" type="checkbox" v-slot="{ field, meta, errors }">
                            <input
                                type="checkbox"
                                id="agree"
                                class="form-check-input"
                                v-model="agreeValue"
                            />
                            <label for="agree" class="form-check-label">
                                Ich habe die
                                <button type="button" class="btn btn-link p-0 datenschutz-btn align-baseline" @click="showModal = true">
                                Datenschutzerklärung
                                </button>
                                gelesen und verstanden.
                            </label>

                            <div v-if="errors.length" class="invalid-feedback d-block">{{ errors[0] }}</div>
                            <div v-if="!agreeValue" class="text-muted small">Bitte stimme der Datenschutzerklärung zu, um fortzufahren.</div>
                        </Field>
                    </div> -->

                    <!-- Submit -->
                    <div class="d-flex justify-content-end">
                        <button
                            v-if="!isMobile"
                            type="submit"
                            class="btn btn-primary mt-3 fs-6 d-flex align-items-center"
                        >
                            <span class="me-2 mb-0">Absenden</span>
                        </button>

                        <button
                            v-else
                            type="submit"
                            class="btn btn-outline-primary mt-2"
                            :disabled="!agreeValue"
                        >
                            Absenden
                        </button>
                    </div>
                </form>
            </div>
            <div  v-if="isMobile" class="text-container">
                <p>
                    Als gemeinnütziger Verein finanzieren wir uns vorrangig durch Spenden. So können wir Honorare für Auftritte möglichst gering halten. Wenn du uns unterstützen willst, kannst du das hier tun: <br>DE21 8559 0100 4564 544006 <br>Eine Spendenquittung erhältst du auf Anfrage.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DatenschutzModal from './reusables/DatenschutzModal.vue'
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const props = defineProps({
    activeLink: String,
    isMobile: Boolean
});

const showModal = ref(false);

const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup.string().required("Bitte gib einen Namen ein"),
    address: yup.string().required('Bitte gib deinen Wohnort ein'),
    email: yup.string().required('Bitte gib deine E-Mail Adresse ein'),
    message: yup.string().required('Bitte gib eine Nachricht an uns ein'),
        // .min(20, 'Die Nachricht muss mindestens 20 Zeichen lang sein'),
    // agree: yup.bool().oneOf([true], 'Du musst der Datenschutzerklärung zustimmen')
  }),
});

const [name, nameAttrs] = defineField('name');
const [address, addressAttrs] = defineField('address');
const [email, emailAttrs] = defineField('email');
const [message, messageAttrs] = defineField('message');

const onSubmit = handleSubmit((values, { resetForm }) => {
  console.log(values);
  resetForm();
});


// const { value: agreeValue } = useField('agree');



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

        .datenschutz-btn {
            background-color: transparent;
            border: none;
            text-decoration: underline;

            &:hover {
                opacity: 0.8;
            }
        }
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

    .invalid-feedback {
        color: white;
        font-size: 0.9rem;
        margin-top: 0.25rem;
        display: block;
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
