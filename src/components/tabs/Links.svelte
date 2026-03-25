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
            "https://raw.githubusercontent.com/jesperrichert/jespersen.zip/refs/heads/dataSpace/data/general/links.json",
            {},
        );
    });

    const positions = {
        1: "right-1",
        2: "right-10",
        3: "right-20",
        4: "left-1",
        5: "left-10",
        6: "left-20",
    }

    const position = () => positions[Math.floor(Math.random() * (6 - 1 + 1) + 1)] as string

</script>

<div class="flex justify-center items-center ml-4 text-zinc-800">
    <Card class="bg-transparent border-0 text-white shadow-none grid grid-flow-col grid-rows-1 rounded-2xl">
        <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
        </CardHeader>
        <CardContent class="inline-flex justify-center items-center flex-col">
            {#each links as link}
                <a
                        href={link.link}
                        target={link.target}
                        class="justify-between items-center inline-flex mt-5 relative {position()} inline-flex"
                >
                    <div class="bg-[#1e2124]/80 shadow-2xl shadow-black border-2 p-2 justify-between items-center inline-flex rounded-2xl">
                        {#if link.icon.startsWith("link:")}
                            <img width="25" height="25" alt="ICON" src="{icon(link.icon)}"/>
                        {:else}
                            <svelte:component this={icon(link.icon)}/>
                        {/if}

                        <p class="ml-3 text-right flex text-shadow-md text-[#7289da] text-shadow-zinc-600">{link.name}</p>
                    </div>
                </a>

            {/each}
        </CardContent>
        <CardFooter></CardFooter>
    </Card>
</div>
