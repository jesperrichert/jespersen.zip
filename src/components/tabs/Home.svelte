<script lang="ts">
  export let { openTab } = {};

  const links = {
    github: "https://github.com/xyzjesper",
    repositories: "https://github.com/xyzjesper?tab=repositories",
    teams: "https://github.com/xyzjesper#-projekte--vorschau",
    techStack: "https://github.com/xyzjesper#tech-stack",
    discord: "https://discord.gg/PHJnYbz57v",
    email: "mailto:hey@xyzjesper.dev",
  };

  function handleEmailClick(e: MouseEvent) {
    e.preventDefault();
    openTab("Contact");
  }
</script>

<div class="flex items-center justify-center mt-40">
  <div
          class="block bg-white/20 text-white p-6 border-4 rounded-2xl shadow-xs"
  >
    <div class="inline-flex justimax-w-fy-between items-center gap-2 mb-3">
      <span class="animate-bounce">👋</span>
      <h1 class="text-2xl font-semibold">Hey and welcome!</h1>
    </div>

    <p class="text-sm text-white/70 italic mb-4">
      While writing this, I keep thinking about how I can improve it!

    </p>

    <p class="leading-relaxed">
      Welcome! I work on various things in Minecraft, Discord, and also software
      development. I'm a German Full Stack Developer and speak several
      languages. I develop software for everyone.
    </p>

    <p class="leading-relaxed mt-3">
      Read more about my projects on
      <a class="underline text-green-400 hover:text-green-300 transition-colors" href={links.repositories}>GitHub</a>, check out
      <a class="underline text-pink-400 hover:text-pink-300 transition-colors" href={links.teams}>the teams</a> I'm part of, or explore my
      <a class="underline text-blue-400 hover:text-blue-300 transition-colors" href={links.techStack}>tech stack</a> and
      <a class="underline text-lime-400 hover:text-lime-300 transition-colors" href={links.github}>README.md</a> on GitHub.
    </p>

    <p class="leading-relaxed mt-3">
      Need help or want to chat? Feel free to reach me on
      <a class="underline text-[#7289da] hover:text-[#8fa2e8] transition-colors" href={links.discord}>Discord</a> or via
      <a class="underline text-zinc-400 hover:text-zinc-300 transition-colors" href={links.email} on:click={handleEmailClick}>Email</a>.
    </p>
  </div>
</div>