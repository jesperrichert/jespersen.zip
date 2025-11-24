<script>
  import Contact from "../components/tabs/Contact.svelte";
  import Links from "../components/Links.svelte";
  import Home from "../components/tabs/Home.svelte";

  let options = ["Home", "Contact"];
  let value = "Home";
</script>

<div>
  <nav
    class="p-6 relative 0 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      {#each options as option}
        <button
          on:click={() => (value = option)}
          data-state={option === value ? "active" : "inactive"}
          class="w-40 h-10 cursor-pointer ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium capitalize transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-800 data-[state=active]:shadow"
          >{option}</button
        >
      {/each}
    </div>
  </nav>

  {#if value == "Contact"}
    <section>
      <Contact></Contact>
    </section>
  {:else if value == "Home"}
    <section>
      <Home></Home>
    </section>
  {/if}
  <section class="absolute">
    <Links></Links>
  </section>
</div>

<style>
</style>
