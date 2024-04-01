<template>
  <div class="bgPosition">
    <img src="../assets/aboutUs.jpg" alt="Background Image" />

    <div class="contentPosition">
      <div class="aboutUsWrapper">
        <div class="content">
          <p>
            Welcome to our platform, home to the most expansive collection of movies available
            online. Our mission is simple: to provide you with unparalleled access to the cinematic
            world, offering an extensive library that spans across genres, eras, and cultures.
          </p>
          <p>
            With our user-friendly interface, discovering your next cinematic adventure has never
            been easier. Simply enter the title you're interested in, and unlock a treasure trove of
            information, from plot summaries to cast details, trivia, and beyond.
          </p>
          <p>
            Whether you're a seasoned film buff or a casual moviegoer, our platform caters to all
            tastes and preferences. From timeless classics to the latest releases, we've got you
            covered.
          </p>
          <p>
            But our commitment doesn't end there. We strive to continuously expand our database,
            ensuring that you always have access to the latest and greatest in the world of cinema.
          </p>
          <p>
            Join us on this journey through the magic of movies. Explore, discover, and immerse
            yourself in stories that captivate, entertain, and inspire. Welcome to the ultimate
            movie-lover's paradise.
          </p>
          <p class="welcome">Welcome to Movieland!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.bgPosition {
  @apply relative min-h-screen;
}
img {
  @apply absolute inset-0 w-full h-full object-cover;
}
.contentPosition {
  @apply relative z-10;
}
.aboutUsWrapper {
  @apply flex justify-center items-center m-auto w-full px-10 lg:w-1/2 lg:px-0;
}
.content {
  @apply flex flex-col p-5 justify-center items-center gap-5 mt-10 mb-20 lg:mb-10 bg-anti_flash_white opacity-85 text-center md:text-justify text-lg text-eaire_black font-semibold;
}
.welcome {
  @apply text-3xl;
}
</style>
