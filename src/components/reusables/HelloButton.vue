<template>
    <BButton variant="primary" @click="handleClick">
        Styled Button
    </BButton>
</template>
  
<script>
    import { BButton } from 'bootstrap-vue-next'

    export default {
        components: { BButton },
        methods: {
            handleClick() {
                alert('Button clicked!')
            }
        }
    }
</script>
  