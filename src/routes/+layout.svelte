<script lang="ts">
  import type { NavBar } from "@/lib/data/types";
  let { children } = $props();
  import "../global.css";
  import { Fetcher } from "@/lib/data/Fetcher";
  import { onMount } from "svelte";
  let navBarItems: NavBar = $state(undefined);

  onMount(() => {
    async function fetch() {
      navBarItems = await Fetcher.fetchJSONFromSource<NavBar>(
        "https://raw.githubusercontent.com/jesperrichert/jespersen.zip/refs/heads/dataSpace/data/general/navbar.json",
        {},
      );
    }
    fetch();
  });
</script>

<div>
  <section class="flex p-2">
    {#each navBarItems as navbarItem}
      <a class="mr-10" href={navbarItem.link}
        >[
          <span class="inline-flex"
          ><img height="15" width="15" src={navbarItem.icon} alt="" /></span
        >
        <code class="hover:underline hover:text-blue-400"
          >{navbarItem.name}</code
        >]
      </a>
    {/each}
  </section>
  <hr class="text-white" />
  {@render children()}
</div>
