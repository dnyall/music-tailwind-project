<template [v-cloak]>
  <!-- Auth Modal -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    :class="{ hidden: !authModalShow }"
    id="modal"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>
      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >
      <div
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
        "
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div
              class="modal-close cursor-pointer z-50"
              @click.prevent="toggleModal"
              @keydown="toggleModal"
            >
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                :class="tab == 'Login' ? ['text-white', 'bg-blue-600'] : ''"
                href="#"
                @click.prevent="tab = 'Login'"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                @click.prevent="tab = 'Register'"
                :class="tab == 'Register' ? ['text-white', 'bg-blue-600'] : ''"
                >Register</a
              >
            </li>
          </ul>
          <!-- Login Form -->
          <login-form v-if="tab == 'Login'" />
          <!-- Registration Form -->
          <register-form v-else-if="tab == 'Register'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
import LoginForm from "./login-form.vue";
import RegisterForm from "./register-form.vue";
export default {
  name: "modal-item",

  data() {
    return {
      tab: "Login",
    };
  },
  computed: {
    authModalShow() {
      return this.$store.getters.authModalShow;
    },
  },
  methods: {
    ...mapMutations(["toggleModal"]),
  },
  components: {
    Form,
    Field,
    ErrorMessage,
    LoginForm,
    RegisterForm,
  },
};
</script>

<style>
[v-cloak] > * {
  display: none;
}

[v-cloak]::before {
  content: " ";
  display: block;
  position: absolute;
  width: 80px;
  height: 80px;
  /* background-image: url(/images/svg/loader.svg); */
  background-size: cover;
  left: 50%;
  top: 50%;
}

.modalLogin-enter-active,
.modalLogin-leave-active {
  transition: all 0.3s ease;
  opacity: 1;
}

.modalLogin-enter-from,
.modalLogin-leave-to {
  opacity: 0;
}

.modalRegister-enter-active,
.modalRegister-leave-active {
  transition: all 0.3s ease;
  opacity: 1;
  transform: scale(1);
}

.modalRegister-enter-from,
.modalRegister-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.v-move,
.move {
  transition: all 0.2s ease;
}

.LoginForm,
.RegisterForm {
  transition: all 0.3s ease;
}

.hide {
  display: none;
}

.show {
  display: inline-block;
}
</style>
