<script lang="ts">
  import { Fetcher } from "@/lib/data/Fetcher";
  import type { Skills } from "@/lib/data/types";
  import { onMount } from "svelte";
  let skills: Skills = {};

  onMount(() => {
    async function fetch() {
      skills = await Fetcher.fetchJSONFromSource<Skills>(
        "https://raw.githubusercontent.com/jesperrichert/jespersen.zip/refs/heads/dataSpace/data/general/skills.json",
        {
          cache: false,
        },
      );
    }
    fetch();
  });
</script>

<div>
  <section>
    <h2 class="p-10 text-2xl font-extrabold mb-10">## Skills</h2>
    <span class="p-5">
      <i
        ><b>Languages, Frameworks, Tools and other</b>. I use in projects and
        worked/work with.
        <a
          href="https://github.com/jesperrichert"
          target="_blank"
          class="text-green-500">M0r3 on my Github</a
        ></i
      >
    </span>
    <div>
      <div class="p-5 w-screen grid grid-cols-10">
        {#each skills as skill}
          <a class="flex w-full items-center" href={skill.link}>
            <div>
              <img
                class="mx-2"
                src={skill.icon}
                width="20"
                height="20"
                alt={skill.name}
              />
            </div>
            <span>
              {skill.name}
            </span>
          </a>
        {/each}
      </div>
      <div class="mx-20">
        <span class="border-l-2 ml-1">
          {">"} Passionate about learning and always open to new experiences.
        </span>
      </div>
    </div>
  </section>
</div>

<style>
</style>
