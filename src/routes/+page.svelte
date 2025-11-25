<script>
  import Contact from "../components/tabs/Contact.svelte";
  import Links from "../components/Links.svelte";
  import Home from "../components/tabs/Home.svelte";
  import Tools from "../components/tabs/Tools.svelte";
  import Projects from "../components/tabs/Projects.svelte";
  import TeamsClients from "../components/tabs/TeamsClients.svelte";

  let options = ["Home", "Projects", "Teams & Clients", "Contact", "Tools"];
  let value = "Home";
</script>

<div>
  <nav
    class="p-6 relative 0 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px"
  >
    <div
      class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      {#each options as option}
        <button
          on:click={() => (value = option)}
          data-state={option === value ? "active" : "inactive"}
          class="{option === value
            ? 'bg-white/35 text-zinc-800'
            : 'bg-transparent'} w-40 h-10 cursor-pointer ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium capitalize transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
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
      <Home openTab={(tab) => (value = tab)}></Home>
    </section>
  {:else if value == "Projects"}
    <section>
      <Projects></Projects>
    </section>
  {:else if value == "Teams & Clients"}
    <section>
      <TeamsClients></TeamsClients>
    </section>
  {:else if value == "Tools"}
    <section>
      <Tools></Tools>
    </section>
  {/if}

  <section>
    <Links openTab={(tab) => (value = tab)}></Links>
  </section>
</div>

<style>
</style>
