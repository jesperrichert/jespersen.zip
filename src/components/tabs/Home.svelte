<script lang="ts">
  const links = {
    github: "https://github.com/jesperrichert",
    repositories: "https://github.com/jesperrichert?tab=repositories",
    teams: "https://github.com/jesperrichert#-projekte--vorschau",
    techStack: "https://github.com/jesperrichert#tech-stack",
    discord: "https://discord.gg/PHJnYbz57v",
    email: "mailto:hey@jespersen.zip",
  };

  function handleEmailClick(e: MouseEvent) {
    e.preventDefault();
    openTab("Contact");
  }
</script>

<div class="flex items-center justify-center mt-40">
  <div
          class="block bg-background text-white p-6 border-4 rounded-2xl shadow-xs"
  >
    <div class="inline-flex justimax-w-fy-between items-center gap-2 mb-3">
      <span class="animate-bounce">👋</span>
      <h1 class="text-2xl font-semibold">Hey and welcome!</h1>
    </div>

    <p class="text-sm text-white/70 italic mb-4">
      While writing this, I keep thinking about how I can improve it!

    </p>

    <p class="leading-relaxed">
      Nice to meet you. I'm Jesper aka Jespersen. 
      Working as a Fullstack Developer. And freelancer. Lets talk over 
      <a class="text-[#23c08b] font-bold" href="https://matrix.to/#/@jespersen.txt:matrix.org">Matrix</a> or 
      <a class="text-[#7289da] font-bold" href="https://discord.com/users/850470027026759690">Discord</a>
    </p>

    <span>
     I’m working on a few software projects, some Minecraft stuff and a bit of everything else... :D
      You can do anything you can imagine!
    </span>
    <p>
      I am currently preparing for my university entrance qualification (2026) and after it, doing an apprenticeship at <a class="text-red-800" href="https://dataport.de">@dataport AöR</a>
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