<script>
  import Discord from "./icons/Discord.svelte";
  import GitHub from "./icons/GitHub.svelte";
  import Mail from "./icons/Mail.svelte";
  import Modrinth from "./icons/Modrinth.svelte";
  import Twitch from "./icons/Twitch.svelte";
  import Youtube from "./icons/Youtube.svelte";
</script>

<div class="flex items-center min-h-screen ml-4">
  <div class="left-0 fixed ml-7 bottom-0 mb-7">
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
      <a href="#contact" class="inline-flex justify-between items-center p-1">
        <Mail />
        <span class="ml-3">Contact</span>
      </a>
    </div>
  </div>
</div>
