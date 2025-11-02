<template>
    <div
        class="observe-section contact-container d-flex flex-column justify-content-center"
        id="kontakt">
        <div class="page-title">
            <h1>Kontakt</h1>
        </div>
        <DatenschutzModal :isVisible="showModal" @close="showModal = false" />
        <div class="toast-container position-fixed top-0 start-0 p-3">
            <div
                id="liveToast"
                class="fs-6 toast align-items-center text-bg-success border-0"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                ref="toastRef"
            >
                <div class="d-flex">
                    <div class="toast-body">{{ toastMessage }}</div>
                    <button
                    type="button"
                    class="btn-close btn-close-white me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                    ></button>
                </div>
            </div>
        </div>
        <div class="contact-column-wrapper w-75 d-flex align-items-center justify-content-center">
            <div v-intersect class="text-container" data-animation="slide-in-fwd-left">
                <p>
                    <strong>da capo</strong> ist noch immer auf der <strong>Suche nach weiteren Männerstimmen</strong>. Wichtiger als weitreichende Vorerfahrung ist uns das zwischenmenschliche Auskommen.
                    Wenn du Interesse an einer unverbindlichen Schnupperstunde hast, melde dich bei uns!
                </p>
                    <br>
                        <strong class="proben-text fs-5">Wir proben immer mittwochs von 19.00 bis 21.00 Uhr.</strong>
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
                    <div class="mb-1 form-group">
                        <label for="name" class="form-label">Name</label>
                        <input
                            v-model="name"
                            v-bind="nameAttrs"
                            id="name"
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors.name, 'is-valid': !errors.name && name }"
                        />
                        <div class="invalid-feedback" :class="{ 'd-block': errors.name, 'invisible': !errors.name }">
                            {{ errors.name || '' }}
                        </div>
                    </div>

                    <div class="mb-1 form-group">
                        <label for="address" class="form-label">Wohnort</label>
                        <input
                            v-model="address"
                            v-bind="addressAttrs"
                            id="address"
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors.address, 'is-valid': !errors.address && address }"
                        />
                        <div class="invalid-feedback" :class="{ 'd-block': errors.address, 'invisible': !errors.address }">
                            {{ errors.address || '' }}
                        </div>
                    </div>

                    <div class="mb-1 form-group">
                        <label for="email" class="form-label">E-Mail-Adresse</label>
                        <input
                            v-model="email"
                            v-bind="emailAttrs"
                            id="email"
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors.email, 'is-valid': !errors.email && email }"
                        />
                        <div class="invalid-feedback" :class="{ 'd-block': errors.email, 'invisible': !errors.email }">
                            {{ errors.email || '' }}
                        </div>
                    </div>

                    <div class="mb-1 form-group">
                        <label for="message" class="form-label">Nachricht an uns</label>
                        <textarea
                            v-model="message"
                            v-bind="messageAttrs"
                            id="message"
                            type="textarea"
                            class="form-control"
                            :class="{ 'is-invalid': errors.message, 'is-valid': !errors.message && message }"
                        ></textarea>
                        <div class="invalid-feedback" :class="{ 'd-block': errors.message, 'invisible': !errors.message }">
                            {{ errors.message || '' }}
                        </div>
                    </div>

                    <div class="form-check mt-2 form-group">
                        <input
                            v-model="agree"
                            v-bind="agreeAttrs"
                            type="checkbox"
                            id="agree"
                            class="form-check-input"
                        />
                        <label for="agree" class="form-check-label">
                            Ich habe die
                            <button type="button" class="btn btn-link p-0 datenschutz-btn align-baseline" @click="showModal = true">
                            Datenschutzerklärung
                            </button>
                            gelesen und verstanden.
                        </label>
                        <div
                            class="text-muted small"
                            :class="{ 'd-block': errors.agree, 'invisible': !errors.agree }"
                        >
                            {{ errors.agree || ' ' }}
                        </div>
                    </div>

                    <div class="mt-4 d-flex justify-content-end">
                        <button
                            v-if="!isMobile"
                            type="submit"
                            class="contact-btn mt-3 fs-6 d-flex align-items-center"
                        >
                            <p class="me-2 mb-0 kontakt-btn-text">Absenden</p>
                        </button>

                        <button
                            v-else
                            type="submit"
                            class="btn btn-outline"
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
import { useForm } from 'vee-validate';
import { Toast } from 'bootstrap';
import DatenschutzModal from './reusables/DatenschutzModal.vue'
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

// Email.js credentials
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const props = defineProps({
    activeLink: String,
    isMobile: Boolean
});

const showModal = ref(false);

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup.string().required("Bitte gib deinen Namen ein"),
    address: yup.string().required('Bitte gib deinen Wohnort ein'),
    email: yup.string().required('Bitte gib deine E-Mail Adresse ein'),
    message: yup.string().required('Bitte gib deine Nachricht an uns ein'),
    agree: yup.bool().oneOf([true]).required('Bitte stimme der Datenschutzerklärung zu')
  }),
});

const [name, nameAttrs] = defineField('name');
const [address, addressAttrs] = defineField('address');
const [email, emailAttrs] = defineField('email');
const [message, messageAttrs] = defineField('message');
const [agree, agreeAttrs] = defineField('agree');

const toastRef = ref(null);
const toastMessage = ref('');

function showToast(msg) {
  toastMessage.value = msg;
  const toast = new Toast(toastRef.value);
  toast.show();
}

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  console.log(values);
  try {
    const response = await emailjs.send(
        serviceId,
        templateId,
        {
            name: values.name,
            address: values.address,
            email: values.email,
            message: values.message
        },
        { publicKey }
    );
    if (response.status === 200) {
        showToast('Danke für deine Nachricht')
    }
  } catch (e) {
        console.warn(e);
  }
  resetForm();
});

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
        font-size: 16px;

        .datenschutz-btn {
            background-color: transparent;
            border: none;
            text-decoration: underline;
            color: $logo-color;

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

        .form-group {
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
        min-height: 1.5em;
    }
}

.contact-container::before {
    content: "";
    position: absolute;
    inset: 0;
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

        .contact-form .form-group {
            width: 100%;
        }

        button.btn-outline {
            background-color: #046b52;
            color: #d1f3e2;
        }
    }
}
</style>
