<template>
    <div>
      <div class="bg-gray-100">
        <nav
          class="
            container
            px-6
            py-8
            mx-auto
            md:flex md:items-center
          "
        >
          <div class="flex items-center justify-between">
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button
                type="button"
                class="
                  text-gray-800
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                "
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
  
  
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="
              flex-col
              mt-8
              space-y-4
              md:flex
              md:space-y-0
              md:flex-row
              md:items-center
              md:space-x-10
              md:mt-0
            "
          >
            <router-link to="/" class="text-sm font-bold text-gray-800 hover:text-blue-400">
              Home
            </router-link>
            <router-link to="/game" class="text-sm font-bold text-gray-800 hover:text-blue-400">
              Game
            </router-link>
            <router-link to="/history" class="text-sm font-bold text-gray-800 hover:text-blue-400">
              History
            </router-link>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        showMenu: false,
      };
    },
  };
  </script>