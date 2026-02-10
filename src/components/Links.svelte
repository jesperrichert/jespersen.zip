<script lang="ts">
  import { Fetcher } from "@/lib/data/Fetcher";
  import type { LinkMenu } from "@/lib/data/types";
  import { icon } from "@/lib/icons";
  import { onMount } from "svelte";

  let links: LinkMenu;
  onMount(async () => {
    links = await Fetcher.fetchJSONFromSource<LinkMenu>(
      "https://raw.githubusercontent.com/xyzjesper/xyzjesper.dev/refs/heads/dataSpace/data/general/links.json",
      {},
    );
    console.log(links);
  });
</script>

<div class="flex items-center min-h-screen ml-4 text-zinc-800">
  <div
    class="left-0 fixed ml-7 bottom-0 mb-7 bg-white/20 text-white rounded-2xl"
  >
    <div class="flex flex-col border-4 p-6 rounded-2xl">
      {#each links as link}
        <a
          href={link.link}
          target={link.target}
          class="inline-flex justify-between items-center p-1"
        >
          sdsdf
          <span>{link.name}</span>
        </a>
      {/each}
    </div>
  </div>
</div>
