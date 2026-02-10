<script lang="ts">
  import Links from "../components/Links.svelte";
  import Home from "../components/tabs/Home.svelte";
  import Tools from "../components/tabs/Tools.svelte";
  import Projects from "../components/tabs/Projects.svelte";
  import TeamsClients from "../components/tabs/TeamsClients.svelte";
  import { Fetcher } from "@/lib/data/Fetcher";
  import type { NavBar } from "@/lib/data/types";
  import { onMount } from "svelte";

  let navBar: NavBar;
  onMount(async () => {
    navBar = await Fetcher.fetchJSONFromSource<NavBar>(
      "https://raw.githubusercontent.com/xyzjesper/xyzjesper.dev/refs/heads/dataSpace/data/general/navbar.json",
      {},
    );
  });

  let navTab = "home";
</script>

<div>
  {#if navTab === "home"}
    <section>
      <Home openTab={(tab: string) => (navTab = tab)}></Home>
    </section>
  {:else if navTab === "projects"}
    <section>
      <Projects></Projects>
    </section>
  {:else if navTab === "work"}
    <section>
      <TeamsClients></TeamsClients>
    </section>
  {:else if navTab === "tools"}
    <section>
      <Tools></Tools>
    </section>
  {/if}

  <div class="flex items-center justify-center h-screen">
    <div
      class="fixed bottom-10 right-3/12 flex items-center mb-7 bg-white/50 rounded-2xl"
    >
      <nav
        class="fixed 0 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px bg-stone-600/70 p-2 rounded-full"
      >
        <div
          class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-center"
        >
          {#each navBar as navItem}
            <button
              data-state={navItem.name === navTab ? "active" : "inactive"}
              class="{navItem.name === navTab
                ? 'bg-white/50 text-zinc-800'
                : 'bg-transparent'} w-15 h-10 cursor-pointer ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium capitalize transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              on:click={() => (navTab = navItem.name)}
            >
              <img src={navItem.icon} alt="icon" />
            </button>
          {/each}
        </div>
      </nav>
    </div>
  </div>

  <section>
    <Links></Links>
  </section>
</div>

<style>
</style>
