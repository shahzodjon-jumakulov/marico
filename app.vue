<script setup>
const steps = [
  {
    index: 1,
    title: "Connect Your Content",
    description:
      "Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online.",
    button: "View Avaliable Sources",
  },
  {
    index: 2,
    title: "Share Your Homepage",
    description:
      "Share your Wavium homepage link with your followers, and we'll handle the rest.",
  },
  {
    index: 3,
    title: "Send Emails & Text Messages",
    description:
      "No more going through a social platform. Reach and engage your audience directly over email and text massage.",
  },
];
</script>

<template>
  <UContainer>
    <Header />
    <main>
      <UContainer class="space-y-[6rem]">
        <div
          class="text-5xl md:text-[7rem] font-bold leading-normal text-center pt-[6rem]"
        >
          <UiTitle label="Own your audience." />
          <h1 class="gradient-text">So you don't lose them.</h1>
        </div>
        <div class="flex-center flex-col gap-12">
          <h2
            class="text-[2.5rem] font-medium leading-normal text-white md:w-1/2 text-center"
          >
            Turn your audience into email and text message subscribers.
          </h2>
          <div class="flex flex-col gap-6 md:w-1/2">
            <div class="flex-center max-md:flex-col max-md:gap-6">
              <UButton
                label="Get Started Now"
                size="sm"
                block
                class="md:w-[calc(50%-1.5rem)] mx-3"
              />
              <UButton
                label="View A Demo"
                variant="outline"
                size="sm"
                block
                class="md:w-[calc(50%-1.5rem)] mx-3"
              />
            </div>
            <div class="flex-center flex-wrap gap-2.5 text-2xl text-center">
              <img src="/Dot.svg" alt="dot" draggable="false" />
              <p class="font-bold text-white">1000+</p>
              <p class="text-secondary">creators have already started</p>
            </div>
          </div>
        </div>
        <WhyUs />
        <Step :content="steps[0]" />
        <div class="flex justify-between">
          <div class="flex flex-col gap-5">
            <p class="text-3xl text-white">Your Homepage</p>
            <div class="flex flex-col gap-8">
              <div class="flex flex-col">
                <div
                  class="text-5xl md:text-[4.6rem] leading-normal text-white font-semibold"
                >
                  Your Content.
                </div>
                <div
                  class="text-5xl md:text-[4.6rem] leading-normal text-white font-semibold"
                >
                  All in <span class="text-primary">One Spot</span>
                </div>
              </div>
              <div class="flex flex-col gap-3">
                <div class="flex gap-3">
                  <div
                    class="bg-[#2D2D2D] w-8 h-8 flex-center text-lg text-white font-medium rounded-full shrink-0"
                  >
                    1
                  </div>
                  <p class="text-white text-2xl">
                    Bring all of your content together into one homepage.
                  </p>
                </div>
                <div class="flex gap-3">
                  <div
                    class="bg-[#2D2D2D] w-8 h-8 flex-center text-lg text-white font-medium rounded-full shrink-0"
                  >
                    2
                  </div>
                  <p class="text-white text-2xl">
                    Your page automatically updates whenever you create.
                  </p>
                </div>
              </div>
              <div class="flex max-md:items-center max-md:flex-col gap-6">
                <UButton label="Get Started Now" />
                <UButton label="View A Demo" variant="outline" />
              </div>
            </div>
          </div>
        </div>
        <Step :content="steps[1]" />
        <div class="flex-center flex-col gap-12">
          <div class="flex max-md:flex-col gap-6">
            <div class="pt-10 pl-10">
              <p class="text-[#0FC65C] text-3xl">One Link</p>
              <h2
                class="text-[5rem] font-semibold text-[#919191] leading-[normal]"
              >
                ALL You Create.
              </h2>
              <h2 class="text-[5rem] font-semibold text-white leading-[normal]">
                One Link
              </h2>
              <img src="/Mobile.png" alt="mobile" />
            </div>
            <div class="pt-10 pl-7">
              <p class="text-[#0FC65C] text-3xl">Collect Subscribers</p>
              <h2
                class="text-[5rem] font-semibold text-[#919191] leading-[normal]"
              >
                Emails. Phone's.
              </h2>
              <h2 class="text-[5rem] font-semibold text-white leading-[normal]">
                All Yours.
              </h2>
            </div>
          </div>
          <UButton label="Get Started" block class="w-[17rem]" />
        </div>
        <Step :content="steps[2]" />
        <div class="flex justify-between">
          <div class="flex flex-col gap-5">
            <p class="text-3xl text-white">Create & Share</p>
            <div class="flex flex-col gap-8">
              <div class="flex flex-col">
                <div
                  class="text-5xl md:text-[4.6rem] leading-normal text-white font-semibold"
                >
                  Reach Your
                </div>
                <div
                  class="text-5xl md:text-[4.6rem] leading-normal text-white font-semibold"
                >
                  Audience <span class="text-primary">Directly.</span>
                </div>
              </div>
              <div class="flex flex-col gap-3">
                <div class="flex gap-3">
                  <div
                    class="bg-[#2D2D2D] w-8 h-8 flex-center text-lg text-white font-medium rounded-full shrink-0"
                  >
                    1
                  </div>
                  <p class="text-white text-2xl">
                    Embed content or create something new to share.
                  </p>
                </div>
                <div class="flex gap-3">
                  <div
                    class="bg-[#2D2D2D] w-8 h-8 flex-center text-lg text-white font-medium rounded-full shrink-0"
                  >
                    2
                  </div>
                  <p class="text-white text-2xl">
                    Share content over email, text message or your homepage.
                  </p>
                </div>
              </div>
              <div class="flex max-md:items-center max-md:flex-col gap-6">
                <UButton label="Get Started Now" />
                <UButton label="View A Demo" variant="outline" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex-center flex-col gap-2">
          <img src="/logo.svg" alt="logo" class="w-[10rem]" />
          <UiTitle label="Get Started Now" />
          <h2
            class="text-[2.5rem] font-medium leading-normal text-white text-center"
          >
            Setup is easy and takes under 5 minutes.
          </h2>
          <div class="flex-center flex-col gap-6 md:w-1/2">
            <UButton label="Get Started Now" class="md:w-1/2" block />
            <div class="flex-center flex-wrap gap-2.5 text-2xl text-center">
              <img src="/Dot.svg" alt="dot" draggable="false" />
              <p class="font-bold text-white">1000+</p>
              <p class="text-secondary">creators have already started</p>
            </div>
          </div>
        </div>
      </UContainer>
    </main>
    <Footer />
  </UContainer>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #fe6783 1.9%, #ffbf84 97.1%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
