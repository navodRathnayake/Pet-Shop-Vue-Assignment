<template>
    <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->

<!-- <section
class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
> -->
<section></section>
<div>
  <div class="h-screen w-full overflow-hidden flex flex-nowrap text-center" id="slider">
    <div class="bg-blue-600 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 class="text-4xl max-w-md">Your Big Ideia</h2>
        <p class="max-w-md">It's fast, flexible, and reliable — with zero-runtime.</p>
    </div>
    <div class="bg-pink-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 class="text-4xl max-w-md">Tailwind CSS works by scanning all of your HTML</h2>
        <p class="max-w-md">It's fast, flexible, and reliable — with zero-runtime.</p>
    </div>
    <div class="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 class="text-4xl max-w-md">React, Vue, and HTML</h2>
        <p class="max-w-md">Accessible, interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.</p>
    </div>
</div>

</div>
<!-- <div
  class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
></div> -->

<div
  class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
>
  <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
    <h1 class="text-3xl font-extrabold sm:text-5xl">
      Let us find your

      <strong class="block font-extrabold text-rose-700">
        Forever Home.
      </strong>
    </h1>

    <p class="mt-4 max-w-lg sm:text-xl/relaxed">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
      tenetur fuga ducimus numquam ea!
    </p>

    <div class="mt-8 flex flex-wrap gap-4 text-center">
      <a
        href="#"
        class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
      >
        Get Started
      </a>

      <a
        href="#"
        class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
      >
        Learn More
      </a>
    </div>
  </div>
</div>
<!-- </section> -->
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#slider');
    setTimeout(function moveSlide() {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        if (max === slider.scrollLeft) {
            slider.scrollTo({left: 0, behavior: 'smooth'})
        } else {
            slider.scrollBy({left, behavior: 'smooth'})
        }

        setTimeout(moveSlide, 2000)
    }, 2000)

})
</script>