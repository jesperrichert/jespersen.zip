<script lang="ts">
    import {Fetcher} from "@/lib/data/Fetcher";
    import type {LinkMenu} from "@/lib/data/types";
    import icon from "@/lib/icons";
    import {onMount} from "svelte";
    import {Card, CardDescription} from "$lib/components/ui/card";
    import {CardContent, CardFooter, CardHeader, CardTitle} from "$lib/components/ui/card/index.ts";

    let links: LinkMenu;
    onMount(async () => {
        links = await Fetcher.fetchJSONFromSource<LinkMenu>(
            "https://raw.githubusercontent.com/xyzjesper/xyzjesper.dev/refs/heads/dataSpace/data/general/links.json",
            {},
        );
    });
</script>

<div class="flex justify-center items-center min-h-screen ml-4 text-zinc-800">
    <div
            class="ml-7 bottom-0 mb-7 bg-white/20 text-white rounded-2xl"
    >
        <Card class="flex flex-col border-4 p-2 w-56 grid-cols-1 rounded-2xl">
            <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                {#each links as link}
                    <a
                            href={link.link}
                            target={link.target}
                            class="inline-flex justify-between items-center p-1"
                    >
                        {#if link.icon.startsWith("link:")}
                            <img width="25" height="25" alt="ICON" src="{icon(link.icon)}"/>
                        {:else}
                            <svelte:component this={icon(link.icon)}/>
                        {/if}

                        <p class="ml-3 text-right flex">{link.name}</p>
                    </a>

                {/each}
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    </div>
</div>
