<template>
    <App>
      <template v-slot:header>
        <Header />
      </template>
    </App>
    <div class="pt-28 p-10 absolute hero min-h-screen z-10">
        <div class="hero-content hero-content-lg flex-col lg:flex-row-reverse">
            <div class="text-center lg:text-left">
            <h1 class="text-3xl font-bold">Register Your Information!</h1>
            </div>
            <div class="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <form class="card-body" @submit.prevent="register" novalidate>

                    <div class="grid grid-cols-4 gap-2">
                        <div class="form-control col-span-4 md:col-span-2">
                            <div class="label">
                                <span class="label-text">Full Name</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="fName">
                            <input type="text" class="grow" v-model="fName" placeholder="First Name" @input="isFNameValid" required />
                            </label>
                            <p v-if="errors.fName" class="text-red-500 text-sm">{{ errors.fName }}</p>
                        </div>
                        <div class="form-control col-span-4 md:col-span-2">
                            <div class="label">
                                <span class="label-text">Middle Name</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="mName">
                            <input type="text" class="grow" v-model="mName" placeholder="Middle Name" />
                            </label>
                            <p v-if="errors.mName" class="text-red-500 text-sm">{{ errors.mName }}</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2">
                        <div class="form-control col-span-4 md:col-span-3">
                            <div class="label">
                                <span class="label-text">Last Name</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="lName">
                            <input type="text" class="grow" v-model="lName" placeholder="Last Name" @input="isLNameValid" required />
                            </label>
                            <p v-if="errors.lName" class="text-red-500 text-sm">{{ errors.lName }}</p>
                        </div>
                        <div class="form-control col-span-4 md:col-span-1">
                            <div class="label">
                                <span class="label-text">Suffix</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="suffix">
                            <input type="text" class="grow" v-model="suffix" placeholder="Suffix"/>
                            </label>
                            <p v-if="errors.suffix" class="text-red-500 text-sm">{{ errors.suffix }}</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-5 gap-2">
                        <div class="form-control col-span-2 md:col-span-1">
                            <div class="label">
                                <span class="label-text">Sex</span>
                            </div>
                            <select class="select select-bordered w-full max-w-xs" v-model="sex" @change="isLSexValid">
                                <option :value="null" disabled>Sex</option>
                                <option>Male</option>
                                <option>Female  </option>
                            </select>
                            <p v-if="errors.sex" class="text-red-500 text-sm">{{ errors.sex }}</p>
                        </div>
                        <div class="form-control col-span-5 md:col-span-2">
                            <div class="label">
                                <span class="label-text">Birth Date</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="bDate">
                            <input type="date" class="grow" v-model="bDate" @input="isBDateValid" required />
                            </label>
                            <p v-if="errors.bDate" class="text-red-500 text-sm">{{ errors.bDate }}</p>
                        </div>
                        <div class="form-control col-span-5 md:col-span-2">
                            <div class="label">
                                <span class="label-text">Birth Place</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="bPlace">
                            <input type="text" class="grow" v-model="bPlace" placeholder="Birth Place" @input="isBPlaceValid" />
                            </label>
                            <p v-if="errors.bPlace" class="text-red-500 text-sm">{{ errors.bPlace }}</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2">
                        <div class="form-control col-span-4 md:col-span-2">
                            <div class="label">
                                <span class="label-text">Mobile Number</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="mContact">
                            <input type="text" class="grow" v-model="mContact" placeholder="Mobile Number" @input="isMContactValid" required />
                            </label>
                            <p v-if="errors.mContact" class="text-red-500 text-sm">{{ errors.mContact }}</p>
                        </div>
                        <div class="form-control col-span-4 md:col-span-2">
                            <div class="label">
                                <span class="label-text">Landline Name</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="lNumber">
                            <input type="text" class="grow" v-model="lNumber" placeholder="Landline Name"/>
                            </label>
                            <p v-if="errors.lNumber" class="text-red-500 text-sm">{{ errors.lNumber }}</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2">
                        <div class="form-control col-span-4 md:col-span-2">
                            <div class="label">
                                <span class="label-text">Province</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="provinceAddr">
                            <input type="text" class="grow" v-model="provinceAddr" placeholder="Province" @input="isProvinceAddrValid" required />
                            </label>
                            <p v-if="errors.provinceAddr" class="text-red-500 text-sm">{{ errors.provinceAddr }}</p>
                        </div>
                        <div class="form-control col-span-4 md:col-span-2">
                            <div class="label">
                                <span class="label-text">City/Municipality</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="cityAddr">
                            <input type="text" class="grow" v-model="cityAddr" placeholder="City/Municipality" @input="isCityAddrValid" required />
                            </label>
                            <p v-if="errors.cityAddr" class="text-red-500 text-sm">{{ errors.cityAddr }}</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2">
                        <div class="form-control col-span-4 md:col-span-1">
                            <div class="label">
                                <span class="label-text">Baranggay</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="brgyAddr">
                            <input type="text" class="grow" v-model="brgyAddr" placeholder="Baranggay" @input="isBrgyAddrValid" required />
                            </label>
                            <p v-if="errors.brgyAddr" class="text-red-500 text-sm">{{ errors.brgyAddr }}</p>
                        </div>
                        <div class="form-control col-span-4 md:col-span-3">
                            <div class="label">
                                <span class="label-text">Line Address</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="streetAddr">
                            <input type="text" class="grow" v-model="streetAddr" placeholder="Line Address" @input="isStreetAddrValid" required />
                            </label>
                            <p v-if="errors.streetAddr" class="text-red-500 text-sm">{{ errors.streetAddr }}</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2">
                        <div class="form-control col-span-4 md:col-span-2">
                            <div class="label">
                                <span class="label-text">Previous School</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="prevSchool">
                            <input type="text" class="grow" v-model="prevSchool" placeholder="Previous School" @input="isPasswordValid" />
                            </label>
                            <p v-if="errors.prevSchool" class="text-red-500 text-sm">{{ errors.prevSchool }}</p>
                        </div>
                        <div class="form-control col-span-4 md:col-span-2">
                            <div class="label">
                                <span class="label-text">Previous School Year</span>
                            </div>
                            <label class="input input-bordered flex items-center gap-2" :class="errors.password ? 'border-red-500' : ''" for="prevSchoolYear">
                            <input type="text" class="grow" v-model="prevSchoolYear" placeholder="Previous School Year" @input="isPasswordValid" />
                            </label>
                            <p v-if="errors.prevSchoolYear" class="text-red-500 text-sm">{{ errors.prevSchoolYear }}</p>
                        </div>
                    </div>
                    
                    <div class="form-control mt-2">
                    <button type="submit" class="btn btn-primary text-lg text-white group-invalid:pointer-events-none group-invalid:opacity-30">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { getSignedInUser } from '../../utils/auth.js';
import App from '../../AppAccounts.vue'
import Header from '../../components/HeaderAccounts.vue'
export default {
    name: 'Summary',
    components: {
        App,
        Header
    },
    data() {
        return {
            fName: '',
            mName: '',
            lName: '',
            suffix: '',
            sex: null,
            bDate: '',
            bPlace: '',
            mContact: '',
            lContact: '',
            provinceAddr: '',
            cityAddr: '',
            brgyAddr: '',
            streetAddr: '',
            prevSchool: '',
            prevSchoolYear: '',
            errors: {}
        };
    },
    methods: {
        register() {
            if(!this.modelStateIsValid()) return;
            let signedInUserID = getSignedInUser();
            // save to local storage with signedInUserID as key
            let user = {
                fName: this.fName,
                mName: this.mName,
                lName: this.lName,
                suffix: this.suffix,
                sex: this.sex,
                bDate: this.bDate,
                bPlace: this.bPlace,
                mContact: this.mContact,
                lContact: this.lContact,
                provinceAddr: this.provinceAddr,
                cityAddr: this.cityAddr,
                brgyAddr: this.brgyAddr,
                streetAddr: this.streetAddr,
                prevSchool: this.prevSchool,
                prevSchoolYear: this.prevSchoolYear
            };
            // save to local storage under 'usersInfo' key where each user uses their signedInUserID as key
            let usersInfo = JSON.parse(localStorage.getItem("usersInfo")) || {};
            usersInfo[signedInUserID] = user;
            localStorage.setItem("usersInfo", JSON.stringify(usersInfo));
            alert("Registered successfully!");
            this.$router.push('/registration')
        },
        getStoredUserInfo() {
            let signedInUserID = getSignedInUser();
            let usersInfo = JSON.parse(localStorage.getItem("usersInfo")) || {};
            let user = usersInfo[signedInUserID];
            if(user) {
                this.fName = user.fName;
                this.mName = user.mName;
                this.lName = user.lName;
                this.suffix = user.suffix;
                this.sex = user.sex;
                this.bDate = user.bDate;
                this.bPlace = user.bPlace;
                this.mContact = user.mContact;
                this.lContact = user.lContact;
                this.provinceAddr = user.provinceAddr;
                this.cityAddr = user.cityAddr;
                this.brgyAddr = user.brgyAddr;
                this.streetAddr = user.streetAddr;
                this.prevSchool = user.prevSchool;
                this.prevSchoolYear = user.prevSchoolYear;
            }
        },
        modelStateIsValid() {
            this.errors = {}; // Reset errors
            return this.isFNameValid() 
                && this.isLNameValid() 
                && this.isLSexValid() 
                && this.isBDateValid() 
                && this.isBPlaceValid() 
                && this.isMContactValid() 
                && this.isProvinceAddrValid() 
                && this.isCityAddrValid() 
                && this.isBrgyAddrValid() 
                && this.isStreetAddrValid();
        },
        
        isFNameValid() {
            this.errors.fName = null;
            if(this.fName.trim().length == 0) this.errors.fName = "First Name is required";          
            return !this.errors.fName;
        },
        isLNameValid() {
            this.errors.lName = null;
            if(this.lName.trim().length == 0) this.errors.lName = "Last Name is required";          
            return !this.errors.lName;
        },
        isLSexValid() {
            this.errors.sex = null;
            if(!this.sex) this.errors.sex = "Select your Sex";       
            return !this.errors.sex;
        },
        isBDateValid() {
            this.errors.bDate = null;
            if(this.bDate.trim().length == 0) this.errors.bDate = "Birth Date is required";          
            return !this.errors.bDate;
        },
        isBPlaceValid() {
            this.errors.bPlace = null;
            if(this.bPlace.trim().length == 0) this.errors.bPlace = "Birth Place is required";          
            return !this.errors.bPlace;
        },
        isMContactValid() {
            this.errors.mContact = null;
            if(this.mContact.trim().length == 0) this.errors.mContact = "Mobile Number is required";          
            return !this.errors.mContact;
        },
        isProvinceAddrValid() {
            this.errors.provinceAddr = null;
            if(this.provinceAddr.trim().length == 0) this.errors.provinceAddr = "Province is required";          
            return !this.errors.provinceAddr;
        },
        isCityAddrValid() {
            this.errors.cityAddr = null;
            if(this.cityAddr.trim().length == 0) this.errors.cityAddr = "City/Municipality is required";          
            return !this.errors.cityAddr;
        },
        isBrgyAddrValid() {
            this.errors.brgyAddr = null;
            if(this.brgyAddr.trim().length == 0) this.errors.brgyAddr = "Baranggay is required";
            return !this.errors.brgyAddr;
        },
        isStreetAddrValid() {
            this.errors.streetAddr = null;
            if(this.streetAddr.trim().length == 0) this.errors.streetAddr = "Line Address is required";
            return !this.errors.streetAddr;
        }
    },
    mounted() {
        // if currently signed in user has data in usersInfo, populate the form
        this.getStoredUserInfo();
    }
};
</script>

<style scoped>
.hero-content-lg {
    max-width: 100rem !important;
}
</style>