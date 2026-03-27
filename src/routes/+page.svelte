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
    let mobileOpen = false;
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

    <button
            aria-label="mobile-sidebar"
            on:mouseleave={() => mobileOpen = false}
            on:click={() => mobileOpen = true}
            data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
            type="button"
            class="outline-0 ring-0 text-heading bg-transparent border-0 hover:bg-neutral-secondary-medium font-medium leading-5 rounded-base ms-3 mt-3 text-sm p-2 focus:outline-none inline-flex sm:hidden">
        <svg class="{mobileOpen ? `text-transparent` : ``} w-6 h-6" aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg"
             width="24" height="24" fill="none"
             viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
        </svg>
    </button>

    <aside id="default-sidebar"
           class="fixed top-0 left-0 z-40 w-64 h-full transition-transform sm:translate-x-0 {mobileOpen ? ``: `-translate-x-full`}"
           aria-label="Sidebar">

        <div class="h-full px-3 py-4 bg-neutral-primary-soft">
            <ul class="space-y-2 font-medium">
                {#each navBar as navItem}
                    <li>
                        <button on:click={() => (navTab = navItem.name)}
                                data-state={navItem.name === navTab ? "active" : "inactive"}
                                class="{navItem.name === navTab
              ? ' bg-fuchsia-500/20'
              : 'bg-fuchsia-200/60'} cursor-pointer flex items-center justify-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group rounded-2xl w-12 h-10 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
                            <img src={navItem.icon} alt="icon"/>
                        </button>
                    </li>
                {/each}
            </ul>
        </div>
    </aside>

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
