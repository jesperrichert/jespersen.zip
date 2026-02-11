<script lang="ts">
    import {onMount} from "svelte";
    import {Fetcher} from "$lib/data/Fetcher.ts";
    import {marked} from "marked";

    let page: string;
    onMount(async () => {
        const data = await Fetcher.fetchStringFromSource(
            `https://raw.githubusercontent.com/xyzjesper/xyzjesper.dev/refs/heads/dataSpace/data/pages/${window.location.href.split("/").pop()}.mdx`,
            {},
        )
        page = await marked(data)
    });
</script>

<div>
    {@html page}
</div>

<style>
</style>