<script lang="ts">
    import Link from "../icons/Link.svelte";
    import {onMount} from "svelte";
    import {Fetcher} from "$lib/data/Fetcher.ts";
    import type {Clients, Teams} from "$lib/data/types.ts";


    let clients: Teams;
    onMount(async () => {
        clients = await Fetcher.fetchJSONFromSource<Teams>(
            "https://raw.githubusercontent.com/xyzjesper/xyzjesper.dev/refs/heads/dataSpace/data/general/clients.json",
            {},
        );
    });

    let teams: Clients;
    onMount(async () => {
        teams = await Fetcher.fetchJSONFromSource<Clients>(
            "https://raw.githubusercontent.com/xyzjesper/xyzjesper.dev/refs/heads/dataSpace/data/general/teams.json",
            {},
        );
    });
</script>

<div>
    <section class="flex flex-col items-center min-h-screen">
        <h1 class="text-4xl p-10 ml-5 font-extrabold">Teams</h1>
        <div class="justify-center grid lg:grid-flow-col md:grid-flow-row lg:grid-rows-2 md:grid-rows-1 gap-4">
            {#each teams as team}
                <div
                        class="block bg-background text-white p-6 border-4 rounded-2xl rounded-base shadow-xs"
                >
                    <div
                            class="h-auto bg-neutral-primary-soft block max-w-md p-6 rounded-base"
                    >
                        <div class="inline-flex">
                            <!-- svelte-ignore a11y_img_redundant_alt -->
                            <img
                                    width="10000"
                                    height="1000"
                                    class=" w-36 h-36 rounded-2xl"
                                    src={team.icon}
                                    alt="No Image"
                            />
                            <div class="flex flex-col ml-10">
                                <h5
                                        class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8"
                                >
                                    <span>{team.name}</span>
                                </h5>
                                <p class="text-body mb-6">
                                    <span>{team.description ?? "No Description"}</span>
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center justify-center">
                            <a
                                    target="_blank"
                                    href={team.link}
                                    class="inline-flex items-center font-medium leading-5 rounded-base text-sm px-4 py-2.5"
                            >
                                Read more
                                <Link/>
                            </a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>
    <section class="flex flex-col items-center min-h-screen">
        <h1 class="text-4xl p-10 ml-2 font-extrabold">Clients</h1>

        <div class="justify-center grid lg:grid-flow-col md:grid-flow-row lg:grid-rows-2 md:grid-rows-1 gap-4">
            {#each clients as client}
                <div
                        class="block  bg-background text-white p-6 border-4 rounded-2xl rounded-base shadow-xs"
                >
                    <div
                            class="h-auto block max-w-md p-6 rounded-base shadow-xs items-center justify-center"
                    >
                        <div class="inline-flex items-center justify-center">
                            <!-- svelte-ignore a11y_img_redundant_alt -->
                            <img
                                    width="10000"
                                    height="1000"
                                    class=" w-36 h-36 rounded-2xl"
                                    src={client.icon}
                                    alt="No Image"
                            />
                            <div class="flex flex-col ml-10">
                                <h5
                                        class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8"
                                >
                                    <span>{client.name}</span>
                                </h5>
                                <p class="text-body mb-6">
                                    <span>{client.description ?? "No Description"}</span>
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center justify-center">
                            <a
                                    target="_blank"
                                    href={client.link}
                                    class="inline-flex items-center font-medium leading-5 rounded-base text-sm px-4 py-2.5"
                            >
                                Home Page
                                <Link/>
                            </a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</div>
