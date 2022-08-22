<script lang="ts">
  import PrimaryButton from "../buttons/PrimaryButton.svelte";
  import { AuthErrorCode, signIn } from "../../functions/firebase/auth";

  let user = {
    email: "",
    password: "",
  };

  const onSubmit = (e: Event) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      alert("Please fill out all fields.");
      return;
    }

    signIn(user.email, user.password, (res) => {
      if (res === "success") {
        alert("Sign in successful.");
        return;
      }

      switch (res) {
        case "auth/user-not-found":
          alert("User not found.");
          break;
        case "auth/wrong-password":
          alert("Wrong password.");
          break;
      }
    });
  };
</script>

<div
  class="flex flex-col justify-center
text-secondary font-body text-3xl"
>
  <p class="pb-4 text-center">Login</p>

  <form on:submit={onSubmit}>
    <div class="flex flex-col gap-2">
      <input
        class="form-item"
        type="text"
        placeholder="Email"
        bind:value={user.email}
      />
      <input
        class="form-item"
        type="password"
        placeholder="Password"
        bind:value={user.password}
      />

      <PrimaryButton>Login</PrimaryButton>
    </div>
  </form>
</div>

<style>
  .form-item {
    @apply w-full p-2 px-4 border-2 text-xl bg-accent border-secondary border-opacity-20 rounded-md cursor-text;
  }
</style>
