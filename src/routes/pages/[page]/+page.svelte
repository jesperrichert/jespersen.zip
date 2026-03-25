<script lang="ts">
    import "./pico.min.css"
    import {onMount} from "svelte";
    import {Fetcher} from "$lib/data/Fetcher.ts";
    import {marked} from "marked";

    let page: string;
    onMount(async () => {
        let pageData = await Fetcher.fetchStringFromSource(
            `https://raw.githubusercontent.com/jesperrichert/jespersen.zip/refs/heads/dataSpace/data/pages/${window.location.href.split("/").pop()}.mdx`,
            {},
        )

        if (!pageData) {
            pageData = await Fetcher.fetchStringFromSource(
                `https://raw.githubusercontent.com/jesperrichert/jespersen.zip/refs/heads/dataSpace/data/pages/${window.location.href.split("/").pop()}.html`,
                {},
            )
            page = pageData
        } else {
            page = await marked(pageData)
        }
        
        if (!page) {
            page = "<h1>Failed to fetch page data from remote endpoint.</h1>"
        }
        
    })
</script>

<div data-theme="dark" class="h-screen flex justify-between p-5">
    <div class="container text-shadow-stone-800 font-mono">
        {@html page}
    </div>
</div>

<style>

    :root {
        --pico-border-radius: 2rem;
        --pico-font-family: Pacifico, cursive;
        --pico-typography-spacing-vertical: 1.5rem;
        --pico-form-element-spacing-vertical: 1rem;
        --pico-form-element-spacing-horizontal: 1.25rem;
    }
</style>