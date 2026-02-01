<script>
  import Discord from "./icons/Discord.svelte";
  import GitHub from "./icons/GitHub.svelte";
  import Mail from "./icons/Mail.svelte";
  import Matrix from "./icons/Matrix.svelte";
  import Modrinth from "./icons/Modrinth.svelte";
  import Twitch from "./icons/Twitch.svelte";
  import Twitter from "./icons/Twitter.svelte";
  import Youtube from "./icons/Youtube.svelte";

  export let { openTab } = {};
</script>

<div class="flex items-center min-h-screen ml-4 text-zinc-800">
  <div class="left-0 fixed ml-7 bottom-0 mb-7 bg-white/20 text-white rounded-2xl">
    <div class="flex flex-col border-4 p-6 rounded-2xl">
      <a
        href="https://github.com/xyzjesper"
        target="_blank"
        class="inline-flex justify-between items-center p-1"
      >
        <GitHub />
        <span class="ml-3">GitHub</span>
      </a>
      <a
        href="https://discord.com/users/850470027026759690"
        target="_blank"
        class="inline-flex justify-between items-center p-1"
      >
        <Discord />
        <span class="ml-3">Discord</span>
      </a>
      <a
        href="https://modrinth.com/user/xyzjesper"
        target="_blank"
        class="inline-flex justify-between items-center p-1"
      >
        <Modrinth />
        <span class="ml-3">Modrinth</span>
      </a>
      <a
        href="https://www.youtube.com/@xyzjesper"
        target="_blank"
        class="inline-flex justify-between items-center p-1"
      >
        <Youtube />
        <span class="ml-3">Youtube</span>
      </a>
      <a
        href="https://twitch.tv/jesforge"
        target="_blank"
        class="inline-flex justify-between items-center p-1"
      >
        <Twitch />
        <span class="ml-3">Twitch</span>
      </a>
      <a
        href="https://matrix.to/#/@xyzjesper:matrix.org"
        target="_blank"
        class="inline-flex justify-between items-center p-1"
      >
        <Matrix />
        <span class="ml-3">Matrix</span>
      </a>
      <a
        href="https://x.com/xyzjesper"
        target="_blank"
        class="inline-flex justify-between items-center p-1"
      >
        <Twitter />
        <span class="ml-3">Twitter</span>
      </a>
      <a
        onclick={() => openTab("Contact")}
        href="mailto:hey@xyzjesper.dev"
        class="inline-flex justify-between items-center p-1"
      >
        <Mail />
        <span class="ml-3">Contact</span>
      </a>
    </div>
  </div>
</div>
