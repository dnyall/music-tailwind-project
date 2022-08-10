import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure } from 'vee-validate';
import { required, min, max, email, alpha_spaces, digits, confirmed, min_value, max_value } from '@vee-validate/rules';
export default {
	install(app) {
		app.component('VeeForm', VeeForm);
		app.component('VeeField', VeeField);
		app.component('ErrorMessage', ErrorMessage);

		defineRule('required', required)
		defineRule('required_custom', required)
		defineRule('min', min)
		defineRule('max', max)
		defineRule('min_value', min_value)
		defineRule('max_value', max_value)
		defineRule('email', email)
		defineRule('alpha_spaces', alpha_spaces)
		defineRule('digits', digits)
		defineRule('confirmed', confirmed)

		configure({
			generateMessage: (ctx) => {
				const messages = {
					required_custom: `نام خود را وارد نمایید.`
				};
				const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The Field ${ctx.field} is invalid.`;
				return message;
			}
		})
	},
};
