<template >
    <vee-form :validation-schema="schema" @submit="login">
        <!-- Alert -->
        <div class="text-white text-center font-bold p-5 mb-4"  :class="login_alert_variant" v-show="login_alert_show">
          {{login_alert_message}}
        </div>
        <!-- Email -->
        <div class="mb-3">
          <label class="inline-block mb-2">Email</label>
          <vee-field type="email" name="email"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
              duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Enter Email" />
            <error-message class="text-white bg-red-500 text-center font-bold block rounded p-1 m-2" name="email"/>
        </div>
        <!-- Password -->
        <div class="mb-3">
          <label class="inline-block mb-2">Password</label>
          <vee-field type="password" name="password"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
              duration-500 focus:outline-none focus:border-black rounded"
            placeholder="Password" />
            <error-message class="text-white bg-red-500 text-center font-bold block rounded p-1 m-2" name="password"/>
        </div>
        <button type="submit" :disabled="login_in_submission" 
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
            hover:bg-purple-700">
          Submit
        </button>
    </vee-form>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'login',
    data(){
        return{
          login_in_submission:false,
          login_alert_show:false,
          login_alert_message:'Please wait! We are loggin you in.',
          login_alert_variant:'bg-blue-400'
        }
    },
    methods:{
      login(values){
        this.login_in_submission = true;
        this.login_alert_show = true;
        this.login_alert_message = 'Please wait! We are loggin you in.';
        this.login_alert_variant = 'bg-blue-400';

        this.login_alert_message = 'Success! You are logged in.';
        this.login_alert_variant = 'bg-green-400';
        console.log(values);
      }
    },
    computed:{
        ...mapState(['schema'])
    }
}
</script>