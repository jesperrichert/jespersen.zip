<script>
  async function sendMail() {
    const text = document.getElementById("text").value;
    const name = document.getElementById("name").value;
    const from = document.getElementById("from").value;

    const callback = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        text: text,
        name: name,
        from: from,
      }),
    });

    const data = await callback.json();

    if (data.success) {
      alert("Email has been sent to hey@xyzjesper.dev");
    } else {
      alert("Failed to send your Email!");
    }
  }
</script>

<div class="flex items-center justify-center min-h-screbg-white/50en">
  <div
    class=" bg-white/50 text-zinc-900 p-6 border-4 rounded-2xl rounded-base shadow-xs"
  >
    <div class="flex min-h-screen justify-center items-center z-100">
      <div
        class="text-4xl font-extrabold mt-40 min-h-screen flex justify-center absolute"
      >
        <div class="min-h-screen flex flex-col items-center">
          <p class="flex justify-center flex-col">Let't Talk</p>
          <span
            class="mb-8 lg:mb-16 font-light text-center text-zinc-900 text-xs"
          >
            👀 What you are here? <br />
            Nice to see you. Please write a message with your Request, Question or
            something else.
          </span>
        </div>
      </div>

      <form on:submit={(e) => sendMail()} class="mx-auto mt-16 sm:mt-20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="name" class="block text-sm/6 font-semibold">Name</label>
            <div class="mt-2.5">
              <input
                id="name"
                type="text"
                name="name"
                autocomplete="given-name"
                class="block rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="from" class="block text-sm/6 font-semibold">Email</label
            >
            <div class="mt-2.5">
              <input
                id="from"
                type="email"
                name="from"
                autocomplete="email"
                class="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="text" class="block text-sm/6 font-semibold"
              >Message</label
            >
            <div class="mt-2.5">
              <textarea
                id="text"
                name="text"
                rows="4"
                class="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <button
            type="submit"
            class="block w-full rounded-md text-white bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >Let's talk</button
          >
        </div>
      </form>
    </div>
  </div>
</div>
