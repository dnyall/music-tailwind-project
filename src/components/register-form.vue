<template>
  <div
    class="text-white p-4 my-3"
    v-show="reg_show_alert"
    :class="reg_variant_color"
  >
    {{ reg_alert_msg }}
  </div>
  <vee-form
    @submit="RegisterSubmit"
    class="RegisterForm"
    :validation-schema="schema"
    :initial-values="initial"
  >
    <!-- Name -->
    <div class="mb-3">
      <label for="name_input" class="inline-block mb-2">
        Name
        <vee-field
          id="name_input"
          type="text"
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
          placeholder="Enter Name"
          name="name"
        />
        <ErrorMessage class="text-red-500" name="name" />
      </label>
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2" for="main_reg">
        Email
        <vee-field name="email" :bails="false" v-slot="{ field, errors }">
          <input
            v-bind="field"
            id="main_reg"
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
          <div
            name="email"
            class="text-red-600"
            v-for="error in errors"
            key="error"
          >
            {{ error }}
          </div>
        </vee-field>
      </label>
    </div>
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2" for="Age">
        Age
        <vee-field
          name="age"
          id="Age"
          type="number"
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
        />
        <ErrorMessage class="text-red-500" name="age" />
      </label>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2" for="pass_reg">
        Password
        <vee-field
          name="password"
          id="pass_reg"
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
      </label>
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2" for="Confirm_Password">
        Confirm Password
        <vee-field
          name="confirm"
          id="Confirm_Password"
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
          placeholder="Confirm Password"
        />
        <ErrorMessage class="text-red-500" name="confirm" />
      </label>
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="inline-block mb-2" for="Country">
        Country
        <vee-field
          name="select"
          as="select"
          id="Country"
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
        >
          <option value="USA">USA</option>
          <option value="Mexico">Mexico</option>
          <option value="Germany">Germany</option>
        </vee-field>
      </label>
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <label class="inline-block" for="Accept_terms">
        <vee-field
          name="AcceptTermsOfService"
          value="1"
          as="input"
          type="checkbox"
          class="w-4 h-4 float-left -ml-6 mt-1 rounded"
          id="Accept_terms"
        />
        Accept terms of service
      </label>
      <div>
        <ErrorMessage name="AcceptTermsOfService" class="text-red-600" />
      </div>
    </div>
    <button
      :disabled="reg_submit_on"
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
import { auth } from "../includes/firebase";
export default {
  name: "register-form",
  data() {
    return {
      schema: {
        password: "required|min:8",
        email: "required|email",
        // register start
        name: "required_custom",
        // email:""
        age: "required|min_value:18|max_value:90",
        confirm: "confirmed:@password",
        select: "required",
        AcceptTermsOfService: "required",
      },
      initial: {
        select: "Germany",
      },
      reg_submit_on: false,
      reg_show_alert: false,
      reg_variant_color: "bg-blue-600",
      reg_alert_msg: "please wait... your account is creating...",
    };
  },
  methods: {
    // async RegisterSubmit(value) {
    //   this.reg_submit_on = true;
    //   this.reg_show_alert = true;
    //   this.reg_variant_color = "bg-blue-600";
    //   this.reg_alert_msg = "please wait... your account is creating...";

    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(value.email, value.password)
    //     .then((userCredential) => {
    //       // Signed in
    //       var user = userCredential.user;
    //       console.log(user);
    //       // ...
    //     })
    //     .catch((error) => {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       console.log(errorCode, errorMessage);
    //       this.reg_submit_on = false;
    //       this.reg_alert_msg =
    //         "error occurd...please try again/ or your sumit before.";
    //       this.reg_variant_color = "bg-red-600";
    //       return;

    //       // ..
    //     });
    //   // let userCred = null;
    //   // try {
    //   //   userCred = await firebase
    //   //     .auth()
    //   //     .createUserWithEmailAndPassword(value.email, value.password);
    //   // } catch (error) {
    //   //   this.reg_submit_on = false;
    //   //   this.reg_alert_msg =
    //   //     "error occurd...please try again/ or your sumit before.";
    //   //   this.reg_variant_color = "bg-red-600";
    //   //   return;
    //   // }

    //   // if successfull
    //   this.reg_variant_color = "bg-green-500";
    //   this.reg_alert_msg = "success! you'r account is created!!!!";

    //   console.log(value);
    // },
    async RegisterSubmit(value) {
      this.reg_submit_on = true;
      this.reg_show_alert = true;
      this.reg_variant_color = "bg-blue-600";
      this.reg_alert_msg = "please wait... your account is creating...";
      let userCred = null;
      try {
        userCred = await auth.createUserWithEmailAndPassword(
          value.email,
          value.password
        );
      } catch (error) {
        this.reg_submit_on = false;
        this.reg_alert_msg =
          "error occurd...please try again/ or your sumit before.";
        this.reg_variant_color = "bg-red-600";
        return;
      }
      // if successfull
      this.reg_variant_color = "bg-green-500";
      this.reg_alert_msg = "success! you'r account is created!!!!";

      console.log(value);
    },
  },
};
</script>

<style>
</style>
