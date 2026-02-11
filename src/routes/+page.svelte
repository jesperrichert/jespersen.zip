<script lang="ts">
  import Links from "../components/tabs/Links.svelte";
  import Home from "../components/tabs/Home.svelte";
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
  let string;
</script>

<div>
  <nav
    class="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            command="--toggle"
            commandfor="mobile-menu"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              data-slot="icon"
              aria-hidden="true"
              class="size-6 in-aria-expanded:hidden"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              data-slot="icon"
              aria-hidden="true"
              class="size-6 not-in-aria-expanded:hidden"
            >
              <path
                d="M6 18 18 6M6 6l12 12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              {#each navBar as navItem}
                <button
                  data-state={navItem.name === navTab ? "active" : "inactive"}
                  class="{navItem.name === navTab
                    ? 'bg-white/50 text-zinc-800'
                    : 'bg-transparent'} cursor-pointer p-3 rounded-2xl"
                  on:click={() => (navTab = navItem.name)}
                >
                  <img src={navItem.icon} alt="icon" />
                </button>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-disclosure id="mobile-menu" hidden class="block sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        {#each navBar as navItem}
          <button
            data-state={navItem.name === navTab ? "active" : "inactive"}
            class="{navItem.name === navTab
              ? 'bg-white/50 text-zinc-800'
              : 'bg-transparent'} md:mb-10 w-15 h-10 cursor-pointer ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium capitalize transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            on:click={() => (navTab = navItem.name)}
          >
            <img src={navItem.icon} alt="icon" />
          </button>
        {/each}
      </div>
    </el-disclosure>
  </nav>

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
  {:else if navTab === "links"}
    <section>
      <Links></Links>
    </section>
  {/if}
</div>

<style>
</style>
