<script lang="ts">
  import { Fetcher } from "@/lib/data/Fetcher";
  import { languages } from "@/lib/data/static";
  import type { LinkTree, Projects } from "@/lib/data/types";
  import { onMount } from "svelte";
  import { Archive, ExternalLink } from "@lucide/svelte";
  let linkTree: LinkTree = {};

  onMount(() => {
    async function fetch() {
      linkTree = await Fetcher.fetchJSONFromSource<LinkTree>(
        "https://raw.githubusercontent.com/jesperrichert/jespersen.zip/refs/heads/dataSpace/data/general/linktree.json",
        {
          cache: false,
        },
      );
    }
    fetch();
  });
</script>

<div>
  <section class="">
    <h2 class="p-10 text-2xl font-extrabold mb-10">## Linktree</h2>
    <div>
      <div class="p-5 w-screen grid grid-cols-1">
        {#each linkTree as link}
          <a
            href={link.link}
            target={link.target}
            class="border-4 mx-2 mb-2 p-2"
          >
            <div class="flex mb-4">
              <div class="inline-flex w-full">
                <div class="mx-2">
                  {#if (link.icon && link.icon.length > 0) || link.icon != undefined}
                    <img
                      src={link.icon}
                      width="25"
                      height="20"
                      alt={link.name}
                      class="w-10"
                    />
                  {/if}
                </div>
                <div class="w-full flex flex-col">
                  <div>
                    <span>
                      {link.name}
                    </span>
                  </div>
                  <div>
                    <span>
                      <i class="text-xs flex text-green-400">
                        {#if link.description}
                          {@html link.description.replaceAll("\n", "<br />")}
                        {:else}
                          // TODO: Add nice text here 🫠
                        {/if}
                      </i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="w-full flex justify-end">
                <ExternalLink />
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
</style>
