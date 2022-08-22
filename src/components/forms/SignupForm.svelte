<script lang="ts">
  import PrimaryButton from "../buttons/PrimaryButton.svelte";
  import { signUp } from "../../functions/firebase/auth";

  let user = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const onSubmit = (e: Event) => {
    e.preventDefault();

    // TODO: Replace usage of alert() with a custom component.

    if (
      !user.name ||
      !user.email ||
      !user.password ||
      !user.passwordConfirmation
    ) {
      alert("Please fill out all fields.");
      return;
    }

    if (user.password !== user.passwordConfirmation) {
      alert("Passwords do not match.");
      return;
    }

    if (!user.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Please enter a valid email address.");
      return;
    }

    signUp(user.email, user.password, (res) => {
      if (res === "success") {
        alert("Sign up successful.");
        return;
      }

      switch (res) {
        case "auth/email-already-in-use":
          alert("Email already in use.");
          break;
        case "auth/invalid-email":
          alert("Invalid email.");
          break;
      }
    });

    // TODO: Send user data to Firebase server.
  };
</script>

<div
  class="flex flex-col justify-center
text-secondary font-body text-3xl"
>
  <p class="pb-4 text-center">Sign Up</p>

  <form on:submit={onSubmit}>
    <div class="flex flex-col gap-2">
      <input
        class="form-item"
        type="text"
        placeholder="Username"
        bind:value={user.name}
      />

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

      <input
        class="form-item"
        type="password"
        placeholder="Confirm Password"
        bind:value={user.passwordConfirmation}
      />

      <PrimaryButton>Sign Up</PrimaryButton>

      <!--TODO: Add authentication with oauth service using Firebase authentication-->
    </div>
  </form>

  <p class="text-center text-lg">
    Already have an account? <a
      href="/login"
      class="text-lightAccent opacity-50 hover:opacity-100 duration-200 ease-in-out"
      >Log in</a
    >
  </p>
</div>

<style>
  .form-item {
    @apply w-full p-2 px-4 border-2 text-xl bg-accent border-secondary border-opacity-20 rounded-md cursor-text;
  }
</style>
