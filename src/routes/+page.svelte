<script lang="ts">
    import Links from "../components/tabs/Links.svelte";
    import Home from "../components/tabs/Home.svelte";
    import Projects from "../components/tabs/Projects.svelte";
    import TeamsClients from "../components/tabs/TeamsClients.svelte";
    import {Fetcher} from "@/lib/data/Fetcher";
    import type {NavBar} from "@/lib/data/types";
    import {onMount} from "svelte";

    let navBar: NavBar;
    let navTab: string;
    onMount(async () => {
        console.log("[onMount] Loaded NavBar, Tabs")
        navTab = window.location.href.split("?tab=")[1] ? window.location.href.split("?tab=")[1] : "home";
        navBar = await Fetcher.fetchJSONFromSource<NavBar>(
            "https://raw.githubusercontent.com/jesperrichert/jespersen.zip/refs/heads/dataSpace/data/general/navbar.json",
            {},
        );
    });
</script>

<div>
    <nav class="relative  animate-glowe p-2 shadow-none rounded-b-[100px] bg-linear-to-t from-zinc-300 to-gray-500">
        <div>
            <div class="space-y-1 px-5 pt-2 pb-3 mt-2 rounded-2xl">
                {#each navBar as navItem}
                    <button
                            data-state={navItem.name === navTab ? "active" : "inactive"}
                            class="{navItem.name === navTab
              ? ' bg-fuchsia-500/20'
              : 'bg-fuchsia-200/60'}  ml-5 md:mb-10 w-15 h-10 cursor-pointer ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium capitalize transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                            on:click={() => (navTab = navItem.name)}
                    >
                        <img src={navItem.icon} alt="icon"/>
                    </button>
                {/each}
            </div>

        </div>

    </nav>

    {#if navTab === "home"}
        <section>
            <Home></Home>
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
