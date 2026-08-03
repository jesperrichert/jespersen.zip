<script lang="ts">
  import { Fetcher } from "@/lib/data/Fetcher";
  import { languages } from "@/lib/data/static";
  import type { Projects } from "@/lib/data/types";
  import { onMount } from "svelte";
  import { Archive } from "@lucide/svelte";
  let projects: Projects = {};

  onMount(() => {
    async function fetch() {
      projects = await Fetcher.fetchJSONFromSource<Projects>(
        "https://raw.githubusercontent.com/jesperrichert/jespersen.zip/refs/heads/dataSpace/data/general/projects.json",
        {
          cache: false,
        },
      );
    }
    fetch();
  });
</script>

<div>
  <section class="">
    <h2 class="p-10 text-2xl font-extrabold mb-10">## Projects</h2>
    <div>
      <div class="p-5 w-screen grid grid-cols-1 lg:grid-cols-2">
        {#each projects as project}
          <div class="border-4 p-2">
            <div class="flex mb-4">
              <div class="inline-flex">
                <div class="mx-2">
                  <img
                    src={project.icon}
                    width="25"
                    height="20"
                    alt={project.name}
                    class="w-10"
                  />
                </div>
                <span>
                  {project.name}
                </span>
              </div>
              <div class="w-full flex justify-end">
                {#if project.archived}
                  <div class="border-2 p-1 text-orange-400 flex">
                    <Archive width="5" height="5" />
                    Archived
                  </div>
                {/if}
              </div>
            </div>
            <div class="p-2">
              <span>{@html project.description.replace("\n", "<br />")}</span>
            </div>
            <div>
              <hr class="p-1 mx-5 grid grid-cols-3" />
              <div class="w-full inline-flex justify-center items-center">
                <div>
                  {#each project.url as url}
                    <button
                      class="mx-1 cursor-pointer"
                      on:click={() => window.open(url.link)}
                    >
                      {#if url.icon != null && url.icon != "" && url.icon != undefined}
                        <img
                          src={url.icon}
                          width="20"
                          height="10"
                          alt={url.name}
                          class="inline-flex w-5 h-auto"
                        />
                      {/if}
                      {url.name}
                    </button>
                  {/each}
                </div>
                <hr class="h-10 border-r-2 mx-2 mb-3" />
                <div>
                  {#each project.languages as lang}
                    <img
                      src={languages[lang]}
                      width="15"
                      height="10"
                      alt={"404"}
                      class="mb-1"
                    />
                  {/each}
                </div>
                <hr class="h-10 border-r-2 mx-2 mb-3" />
                <div>
                  <div class="w-full flex justify-center items-center">
                    <img
                      src={project.teamIcon}
                      width="20"
                      height="10"
                      alt={project.team}
                      class="w-5"
                    />
                  </div>
                  <div>{project.team}</div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
</style>
