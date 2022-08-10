<template>
		<div class="text-white p-4 my-3" v-show="login_show_alert" :class="login_variant_color">
			{{login_alert_msg}}
		</div>
  <vee-form @submit="loginSubmit" :validation-schema="schema" class="LoginForm">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2" for="emailField">
        Email
        <vee-field
          name="email"
          id="emailField"
          type="email"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
          placeholder="Enter Email"
        />
        <ErrorMessage name="email" class="text-red-500" />
      </label>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2" for="password"> Password </label>
      <vee-field
        name="password"
        id="password"
        type="password"
        class="
          block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none focus:border-black
          rounded
        "
        placeholder="Password"
      />
      <ErrorMessage class="text-red-500" name="password" />
    </div>
    <button
				:disabled="login_submit_on"
      type="submit"
      class="
        block
        w-full
        bg-purple-600
        text-white
        py-1.5
        px-3
        rounded
        transition
        hover:bg-purple-700
      "
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
export default {
  name: "login-form",
  data() {
    return {
      schema: {
        // login start
        email: "required|email",
        password: "required|min:8",
      },
      login_submit_on: false,
      login_show_alert: false,
      login_variant_color: "bg-blue-600",
      login_alert_msg: "please wait... you are going to log in...",
    };
  },
  methods: {
    loginSubmit(value) {
      this.login_submit_on = true;
      this.login_show_alert = true;
      this.login_variant_color = "bg-blue-600";
      this.login_alert_msg = "please wait... you are going to log in...";

      // if successfull
      this.login_variant_color = "bg-green-500";
      this.login_alert_msg = "success! you are loged in!!";

      console.log(value);
    },
  },
};
</script>

<style>
</style>
