<script lang="ts">
  import { Fetcher } from "@/lib/data/Fetcher";
  import type { NavBar, TextLink } from "@/lib/data/types";
  import { onMount } from "svelte";
  let textLinks: TextLink = {};

  onMount(() => {
    async function fetch() {
      textLinks = await Fetcher.fetchJSONFromSource<TextLink>(
        "https://raw.githubusercontent.com/jesperrichert/jespersen.zip/refs/heads/dataSpace/data/general/links.json",
        {},
      );
    }
    fetch();
  });
</script>

<div>
  <section class="p-10">
    <h2 class="text-2xl font-extrabold">## About</h2>
    <div>
      <div>
        <p class="text-sm text-white/70 italic mb-4">
          While writing this, I keep thinking about how I can improve it!
        </p>

        <p class="leading-relaxed">
          Nice to meet you. I'm Jesper aka Jespersen. Working as a Fullstack
          Developer. And freelancer. Lets talk over
          <a
            class="text-[#23c08b] font-bold hover:underline"
            href="https://matrix.to/#/@jespersen.txt:matrix.org">Matrix</a
          >
          or
          <a
            class="text-[#7289da] font-bold hover:underline"
            href="https://discord.com/users/850470027026759690">Discord</a
          >
        </p>

        <span>
          I’m working on a few software projects, some Minecraft stuff and a bit
          of everything else... :D You can do anything you can imagine!
        </span>
        <p>
          I am currently preparing for my university entrance qualification
          (2026) and after it, doing an apprenticeship at <a
            class="text-red-800 hover:underline"
            href="https://dataport.de">@dataport AöR</a
          >
        </p>

        <p class="leading-relaxed mt-3">
          Read more about my projects on
          <a
            class="hover:underline text-green-400 hover:text-green-300 transition-colors"
            href={textLinks.repositories}>GitHub</a
          >, check out
          <a
            class="hover:underline text-pink-400 hover:text-pink-300 transition-colors"
            href={textLinks.teams}>the teams</a
          >
          I'm part of, or explore my
          <a
            class="hover:underline text-blue-400 hover:text-blue-300 transition-colors"
            href={textLinks.techStack}>tech stack</a
          >
          and
          <a
            class="hover:underline text-lime-400 hover:text-lime-300 transition-colors"
            href={textLinks.github}>README.md</a
          > on GitHub.
        </p>

        <p class="leading-relaxed mt-3">
          Need help or want to chat? Feel free to reach me on
          <a
            class="hover:underline text-[#7289da] hover:text-[#8fa2e8] transition-colors"
            href={textLinks.discord}>Discord</a
          >
          or via
          <a
            class="hover:underline text-zinc-400 hover:text-zinc-300 transition-colors"
            href={textLinks.email}>Email</a
          >.
        </p>
      </div>
    </div>
  </section>
</div>

<style>
</style>
