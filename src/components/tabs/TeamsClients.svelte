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
      name: "dannic",
      description: "Video Cutter for WindowsArea, Riftzone....",
      icon: "https://cdn.discordapp.com/avatars/834107020163940393/e2bc6d36c07138770e040c8340dbec68.webp?size=1024",
      link: "https://danicoo.de",
    },
    {
      name: "IntraceX",
      description: "Prepaid Server Hosting in Germany",
      icon: "https://cdn.discordapp.com/icons/1322577214302326834/64258b9b14613ddc169b65e233ebf3a6.png?size=512",
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
          class="h-auto bg-neutral-primary-soft block max-w-md p-6 border border-default rounded-base shadow-xs"
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
  <section class="flex flex-col items-center min-h-screen">
    <h1 class="text-4xl p-10 ml-2 font-extrabold">Clients</h1>
    <div class="justify-center grid grid-cols-3 gap-4">
      {#each clients as client}
        <div
          class="h-auto bg-neutral-primary-soft block max-w-md p-6 border border-default rounded-base shadow-xs items-center justify-center"
        >
          <div class="inline-flex">
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
              class="inline-flex items-center text-white shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Home Page
              <Link />
            </a>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
