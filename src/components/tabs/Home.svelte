<script lang="ts">
  export let { openTab } = {};
</script>

<div class="flex items-center justify-center overflow-hidden mt-40">
  <div>
    <div
      class="block bg-white/35 text-zinc-800 p-6 border-4 rounded-2xl rounded-base shadow-xs"
    >
      <div class="inline-flex justify-between items-center">
        <span class="animate-bounce mr-2"> 👋 </span>
        <h1 class="text-2xl font-semibold">Hey and welcome!</h1>
      </div>

      <span
        >While writing this, I keep thinking about how I can improve it!</span
      >

      <p>
        Anyway... welcome! I work on various things in Minecraft, Discord, and
        also software development.
        <br />
        I'm a German Full Stack Developer and speak several languages.
        <br />
        I develop software for everyone.
        <br />
        Read more about my projects on
        <a
          class="underline text-green-400"
          href="https://github.com/xyzjesper?tab=repositories">GitHub</a
        >
        or check out
        <a
          class="underline text-pink-400"
          href="https://github.com/xyzjesper#-projekte--vorschau">the teams</a
        >
        I'm part of. You can also explore my
        <a
          class="underline text-blue-400"
          href="https://github.com/xyzjesper#tech-stack">tech stack</a
        >
        <br />
        on my
        <a class="underline text-lime-800" href="https://github.com/xyzjesper"
          >README.md</a
        >.
        <br />
        Need help? Want to chat or anything else? Feel free to contact me on
        <a class="text-[#7289da] underline" href="https://discord.gg/PHJnYbz57v"
          >Discord</a
        >
        or via
        <a
          class="underline text-zinc-400"
          onclick={() => openTab("Contact")}
          href="mailto:hey@xyzjesper.dev">Email</a
        >.
      </p>
    </div>
  </div>
</div>
