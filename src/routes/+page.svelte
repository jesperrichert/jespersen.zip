<script>
    import Contact from "../components/tabs/Contact.svelte";
    import Links from "../components/Links.svelte";
    import Home from "../components/tabs/Home.svelte";
    import Tools from "../components/tabs/Tools.svelte";
    import Projects from "../components/tabs/Projects.svelte";
    import TeamsClients from "../components/tabs/TeamsClients.svelte";

    let options = [

        {
            icon: "https://cdn.xyzhub.link/u/QY2ESu.png",
            name: "home"
        },
        {
            icon: "https://cdn.xyzhub.link/u/O9uTCU.png",
            name: "projects"
        },
        {
            icon: "https://cdn.xyzhub.link/u/00jq2i.png",
            name: "work"
        },
        {
            icon: "https://cdn.xyzhub.link/u/dW2bH0.png",
            name: "contact"
        },
        {
            icon: "https://cdn.xyzhub.link/u/HcP57Q.png",
            name: "tools"
        }
    ];
    let value = "home";
</script>

<div>
    {#if value === "contact"}
        <section>
            <Contact></Contact>
        </section>
    {:else if value === "home"}
        <section>
            <Home openTab={(tab) => (value = tab)}></Home>
        </section>
    {:else if value === "projects"}
        <section>
            <Projects></Projects>
        </section>
    {:else if value === "work"}
        <section>
            <TeamsClients></TeamsClients>
        </section>
    {:else if value === "tools"}
        <section>
            <Tools></Tools>
        </section>
    {/if}

    <div class="flex items-center justify-center h-screen">
        <div class="fixed bottom-10 right-3/12 flex items-center mb-7 bg-white/50 rounded-2xl">
            <nav
                    class="fixed 0 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px bg-stone-600/70  p-2 rounded-full"
            >
                <div
                        class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-center"
                >
                    {#each options as option}
                        <button
                                data-state={option.name === value ? "active" : "inactive"}
                                class="{option.name === value ? 'bg-white/50 text-zinc-800' : 'bg-transparent'} w-15 h-10 cursor-pointer ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium capitalize transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                on:click={() => (value = option.name)}
                        >
                            <img
                                    src="{option.icon}"
                                    alt="icon"
                            />
                        </button>
                    {/each}
                </div>
            </nav>
        </div>
    </div>

    <section>
        <Links openTab={(tab) => (value = tab)}></Links>
    </section>
</div>

<style>
</style>
