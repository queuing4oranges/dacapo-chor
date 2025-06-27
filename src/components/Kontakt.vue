<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <p>Du hast eine Frage, möchtest zu einer Probe vorbeikommen oder uns buchen? Dann kontaktiere uns!</p>
        <div class="h-100 w-75 mt-3 d-flex justify-content-center align-items-center">
            <div class="w-50 px-5">
                <BForm @submit="onSubmit" @reset="onReset" class="w-100 contact-form p-5">
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
                        <BButton type="submit" class="contact-submit-btn">
                            Absenden
                        </BButton>
                    </span>
                </BForm>
            </div>
            <div class="w-50 p-5 d-flex flex-column align-items-center">
                <span>
                    <p class="mb-5">Wir sind auch erreichbar über ...</p>
                </span>
                <span class="d-flex justify-content-start">
                    <a href="mailto:dacapo-chor@web.de" class="text-decoration-none me-3">
                        <p>Email</p>
                        <Email height="100" width="200" />
                        <p class="mt-3">dacapo-chor@web.de</p>
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import HeroTitle from './HeroTitle.vue';
    import { reactive } from 'vue';
    import { BForm, BFormTextarea, BFormInput, BFormGroup, BButton } from 'bootstrap-vue-next';
    import Email from './reusables/Email.vue';
    import Telefon from './reusables/Telefon.vue';

    const form = reactive({
        email: '',
        name: '',
        address: '',
        message: ''
    })
</script>

<style lang="scss" scoped>
    .contact-form {
        background-color: $primary-color;
        color: $background;
    }
    .contact-submit-btn {
        background-color: $logo-color;
        &:hover {
            background-color: $accent;
        }
    }
</style>
