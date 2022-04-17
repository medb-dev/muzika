import {
   Form as VeeForm, 
   Field as VeeField, 
   defineRule,
   ErrorMessage,
   configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules';
import { required,not_one_of,confirmed } from '@vee-validate/rules'
export default{
   install(app){
      app.component('VeeForm',VeeForm)
      app.component('VeeField',VeeField)
      app.component('ErrorMessage',ErrorMessage)

      // defineRule('required',required)
      // defineRule('min',min)
      // defineRule('max',max)
      // defineRule('alpha_spaces',alpha_spaces)
      // defineRule('email',email)
      Object.keys(AllRules).forEach(rule => {
         defineRule(rule,AllRules[rule])
         // console.log(rule);
      })
      defineRule('passwords_mismatch',confirmed)
      defineRule('country_excluded',not_one_of)
      defineRule('tos',required)
      configure({
         generateMessage: (ctx)=>{
            const messages = {
               required:`The field ${ctx.field} is required`,
               alpha_spaces : `The ${ctx.field} may only contain alphabetical charachters and spaces`,
               numeric:`The ${ctx.field} may only contain numbers`,
               email:`The ${ctx.field} must be a valid email`,
               passwords_mismatch:`The passwords don't match`,
               max:`The ${ctx.field} is too long`,
               min:`The ${ctx.field} is too short`,
               max_value:`The ${ctx.field} is too high`,
               min_value:`The ${ctx.field} is too low`,
               country_excluded:`Due to restrictions, we do not accept users from this location`,
               tos:`You must accept the terms of service`
            }  

            return messages[ctx.rule.name] ? messages[ctx.rule.name] : `The ${ctx.field} is invalid`;
         },
         validateOnBlur:true,
         validateOnChange:true,
         validateOnInput:false,
         validateOnModelUpdate:true,
      });
   }, 
}