<template >
    <vee-form :validation-schema="schema" :initial-values="initialValues" @submit="register">
            <!-- Alert -->
            <div class="text-white text-center font-bold p-5 mb-4" 
            :class="reg_alert_variant" 
            v-show="reg_alert_show">
              {{reg_alert_msg}}
            </div>
            <!-- Name -->
            <div class="mb-3">
              <label class="inline-block mb-2">Name</label>
              <vee-field name="name" type="text" class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded" placeholder="Enter Name"/>
                <ErrorMessage class="text-white bg-red-500 text-center font-bold block rounded p-1 m-2" name="name"/>
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <vee-field type="email" name="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email" />
                <ErrorMessage class="text-white bg-red-500 text-center font-bold block rounded p-1 m-2" name="email" />
            </div>
            <!-- Age -->
            <div class="mb-3">
              <label class="inline-block mb-2">Age</label>
              <vee-field type="number" name="age"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded" />
                  <ErrorMessage class="text-white bg-red-500 text-center font-bold block rounded p-1 m-2" name="age" />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <vee-field  name="password" type="password" class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded" placeholder="Password"/>
                <ErrorMessage class="text-white bg-red-500 text-center font-bold block rounded p-1 m-2" name="password" />
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Confirm Password</label>
              <vee-field type="password" name="confirm_password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Confirm Password" />
                <ErrorMessage class="text-white bg-red-500 text-center font-bold block rounded p-1 m-2" name="confirm_password" />
            </div>
            <!-- Country -->
            <div class="mb-3">
              <label class="inline-block mb-2">Country</label>
            <vee-field as="select" name="country"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded">
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Germany">Germany</option>
                <option value="Morocco">Morocco</option>
                <option value="Algeria">Algeria</option>
              </vee-field>
              <ErrorMessage class="text-white bg-red-500 text-center font-bold block rounded p-1 m-2" name="country" />
            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
              <vee-field name="tos" type="checkbox" class="w-4 h-4 float-left -ml-6 mt-1 rounded mb-0" value="accepted"/>
              <label class="inline-block mr-5">Accept terms of service </label>
            </div>
              <ErrorMessage class="text-white bg-red-500 text-center font-bold block rounded p-1 m-2" name="tos" />
            <!-- Submit -->
            <button type="submit" :disabled="reg_in_submission"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700">
              Submit
            </button>
          </vee-form>
</template>
<script>
import {mapState} from 'vuex'


export default {
    name:'register',
    data(){
      const initialValues = {
        name:'mohamed',
        email:'test@test.com',
        age:'24',
        password:'test-test1234',
        confirm_password:'test-test1234',
        country:'USA',
      }
        return{
            initialValues,
            reg_in_submission:false,
            reg_alert_show:false,
            reg_alert_msg:'Please wait! Your account is being created.',
            reg_alert_variant:'bg-blue-500',
        }
    },
    methods:{
        async register(values){
        this.reg_in_submission=true
        this.reg_alert_show=true
        this.reg_alert_msg='Please wait! Your account is being created.'
        this.reg_alert_variant='bg-blue-500'

        try{
          await this.$store.dispatch('register',values)
        }catch(error){
          this.reg_in_submission = false
          this.reg_alert_msg = 'An unexpected error occured! Please try again.'
          this.reg_alert_variant = 'bg-red-400'
          console.log(error);
          return
        }

        this.reg_alert_variant='bg-green-400'
        this.reg_alert_msg='Successful! Your account has been created.'
      },
    },
    computed:{
        ...mapState(['schema']),
    }
}
</script>