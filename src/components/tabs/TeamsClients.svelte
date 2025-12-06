<script>
  import Link from "../icons/Link.svelte";

  export let teams = [
    {
      name: "DisBot",
      description: "Public Discord Bot. Open Source. Free and Customizable!",
      icon: "https://cdn.xyzhub.link/u/ciRHKo.png",
      link: "https://github.com/DisBotDevelopment",
    },
    {
      name: "Crystopia",
      description: "Open Source. Free abd Unique Minecraft Network.",
      icon: "https://cdn.xyzhub.link/u/0cM2JX.png",
      link: "https://github.com/Crystopia",
    },
    {
      name: "Moonlight Panel",
      description: "The next generation hosting panel.",
      icon: "https://cdn.xyzhub.link/u/9jvhBv.png",
      link: "https://github.com/Moonlight-Panel",
    },
    {
      name: "xyzOrg",
      description: "Open Source. Software & Solutions",
      icon: "https://cdn.xyzhub.link/u/KjSBsT.png",
      link: "https://github.com/xyzspace-dev",
    },
  ];
  export let clients = [
    {
      name: "danicoo",
      description: "Video Cutter for WindowsArea, Riftzone....",
      icon: "https://cdn.xyzhub.link/u/YYmGCC.webp",
      link: "https://danicoo.de",
    },
    {
      name: "IntraceX",
      description: "Prepaid Server Hosting in Germany",
      icon: "https://cdn.xyzhub.link/u/wGCczz.png",
      link: "https://IntraceX.de",
    },
  ];
</script>

<div>
  <section class="flex flex-col items-center min-h-screen">
    <h1 class="text-4xl p-10 ml-5 font-extrabold">Teams</h1>
    <div class="justify-center grid grid-flow-col grid-rows-2 gap-4">
      {#each teams as team}
        <div
          class="block bg-white/50 text-zinc-800 p-6 border-4 rounded-2xl rounded-base shadow-xs"
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
                <Link />
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
  <section class="flex flex-col items-center min-h-screen">
    <h1 class="text-4xl p-10 ml-2 font-extrabold">Clients</h1>

    <div class="justify-center grid grid-flow-col grid-cols-2 gap-4">
      {#each clients as client}
        <div
          class="block bg-white/50 text-zinc-800 p-6 border-4 rounded-2xl rounded-base shadow-xs"
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
                <Link />
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
