<script>
  import Fork from "../icons/Fork.svelte";
  import Link from "../icons/Link.svelte";
  import Star from "../icons/Star.svelte";
  import Links from "../Links.svelte";

  let github = {};

  async function getPinned() {
    const callback = await fetch("https://pinned.berrysauce.dev/get/xyzjesper");
    const data = await callback.json();
    github.pinned = data;
  }
  getPinned();
</script>

<div>
  <section class="flex flex-col items-center min-h-screen">
    <h1 class="text-4xl p-10 ml-5 font-extrabold">Project Showcase</h1>
    <div class="justify-center grid grid-flow-col grid-rows-3 gap-4">
      {#each github.pinned as pin}
        <div
          class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs"
        >
          <div>
            <h5
              class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8"
            >
              <span>{pin.name}</span>
              <span
                class="bg-white/90 rounded-2xl p-1 w-5 h-5"
                style="color: {pin.languageColor};">{pin.language}</span
              >
            </h5>
          </div>
          <p class="text-body mb-6">
            <span>{pin.description ?? "No Description"}</span>
          </p>
          <div class="flex items-center justify-center">
            <div class="inline-flex justify-between items-center">
              <Star></Star>
              <span class="mr-3 ml-3"> {pin.stars}</span>
            </div>
            <div class="inline-flex justify-between items-center44">
              <Fork></Fork>
              <span class="mr-3 ml-3">{pin.forks}</span>
            </div>
            <a
              target="_blank"
              href="https://github.com/{pin.author}/{pin.name}"
              class="inline-flex items-center text-white shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Read more
              <Link />
            </a>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
