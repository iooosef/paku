<template>
    <div class="container">
        <h1 class="mt-5">Basic Information Registration</h1>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: ''
        };
    },
    methods: {
        submitForm() {
            // Handle form submission
            console.log('Name:', this.name);
            console.log('Email:', this.email);
        }
    }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>