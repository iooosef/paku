<template>
<div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="lg:flex text-center lg:text-left">
        <div class="w-100 flex justify-center">
            <router-link to="/" class="">
                <img src="../assets/paku-logo.png" class="object-contain h-36" style="">
            </router-link>
        </div>
        <div>
            <h1 class="text-4xl font-bold">Register now!</h1>
            <p class="py-6">
                Be part of the PAC-U story and create a future that begins here.
            </p>
        </div>
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form class="card-body group" @submit.prevent="register" novalidate >
        <div class="form-control">
            <label class="input input-bordered flex items-center gap-2" :class="errors.email ? 'border-red-500' : ''" for="email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70"> 
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" class="grow" v-model="email" placeholder="Email" @input="isEmailValid" required />
            </label>
            <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
        </div>
        <div class="form-control">
            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="password">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                <path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" />
            </svg>
            <input type="password" class="grow" v-model="password" placeholder="Password" @input="isPasswordValid" required />
            </label>
            <p v-if="errors.password" class="text-red-500 text-sm">{{ errors.password }}</p>
        </div>
        <div class="form-control">
            <label class="input input-bordered flex items-center gap-2" for="confirmPassword">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                <path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" />
            </svg>
            <input type="password" class="grow" v-model="confirmPassword" placeholder="Confirm Password" @input="isConfirmPasswordValid" required />
            </label>
            <p v-if="errors.confirmPassword" class="text-red-500 text-sm">{{ errors.confirmPassword }}</p>
        </div>
        <div class="form-control mt-2">
          <button type="submit" class="btn btn-primary text-lg text-white group-invalid:pointer-events-none group-invalid:opacity-30">Register</button>
        </div>
        <div class="flex justify-center">
            Already have an account? &nbsp;
            <router-link class="link link-secondary font-medium" to="/accounts.html/login">Login</router-link>
        </div>
      </form>
    </div>
  </div>
</div>
</template>



<script>
import { signInUser, getUserID, getSignedInUser, signOutUser } from '../utils/auth.js';
export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            confirmPassword:'',
            isAuthenticated: false,
            errors: {},
        };
    },
    methods: {
        register() {
            if(!this.modelStateIsValid()) return;

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const userExists = users.find((u) => u.email === this.email);
            if (userExists) {
                this.errors.email = "User with that email already exists!";
                return;
            }

            const userID = Date.now();
            users.push({ userID, email: this.email, password: this.password });

            localStorage.setItem("users", JSON.stringify(users));
            alert("Registered successfully!" + getUserID(this.email));
            signInUser(getUserID(this.email));
            this.$router.push('/registration')
        },
        validateEmail(email) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        },
        modelStateIsValid() {
            this.errors = {}; // Reset errors
            
            return this.isEmailValid() && this.isPasswordValid() && this.isConfirmPasswordValid();
        },
        isEmailValid() {
            this.errors.email = null;
            if(!this.validateEmail(this.email)) this.errors.email = "Invalid email address";
            if(this.email.trim().length == 0) this.errors.email = "Email is required";

            return !this.errors.email;
        },
        isPasswordValid() {
            this.errors.password = null;
            if(!this.password) this.errors.password = "Password is required";
            return !this.errors.password;
        },
        isConfirmPasswordValid() {
            this.errors.confirmPassword = null;
            if(!this.confirmPassword) this.errors.confirmPassword = "Confirm Password is required";
            if(this.password !== this.confirmPassword) this.errors.confirmPassword = "Passwords do not match";
            return !this.errors.confirmPassword;
        },
        redirectIfAuthenticated() {
            if(getSignedInUser()) this.$router.push('/registration');
        }
    },
    beforeMount() {
        this.redirectIfAuthenticated();
    },
    mounted() {
        // Code to run when the component is mounted
    }
};
</script>

<style scoped>
.register-auth {
    /* Add your component styles here */
}
</style>