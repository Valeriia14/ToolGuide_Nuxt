<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <!-- <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" /> -->
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10"
              >
                <div class="flex h-16 shrink-0 items-center"></div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col "
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div :class="[theme? 'bg-gray-900' : 'bg-white', 'flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4']">
        <div class="flex h-16 shrink-0 items-center justify-center">
          <h5 class="text-purple-600 font-bold text-3xl">Tool &nbsp;<span :class="[theme ? 'text-white' :'text-black' ]">Glide</span></h5>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    :class="[
                      theme
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-400 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:bg-purple-600',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-purple-600 hover:text-white"
                @click="changeTheme"
              >
                Change Theme
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        :class="[theme? 'bg-gray-900' : 'bg-white', 'sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200  px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8']"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">View notifications</span>
            </button>

            <!-- Separator -->
            <div
              class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true"
            />

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="hidden lg:flex lg:items-center">
                  <span
                    class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                    aria-hidden="true"
                    >Tom Cook</span
                  >
                </span>
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-gray-900 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <a
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-50' : '',
                        'block px-3 py-1 text-sm leading-6 text-red-900',
                      ]"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main
        :class="[ theme ? 'bg-gray-900':'bg-white','h-screen text-black border border-gray-200']"
      >
        <div class="w-full h-full">
          <!-- Your content -->
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Dashboard from "@/components/Icons/Dashboard.vue";
import Discover from "@/components/Icons/Discover.vue";
import Tool from "@/components/Icons/Tool.vue";
import Support from "@/components/Icons/Support.vue";
import Resources from "@/components/Icons/Resources.vue";
import Tips from "@/components/Icons/Tips.vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const navigation = [
  { name: "Dashboard", href: "#", icon: Dashboard, current: true },
  { name: "Discover", href: "#", icon: Discover, current: false },
  { name: "Tool", href: "#", icon: Tool, current: false },
  { name: "Support", href: "#", icon: Support, current: false },
  { name: "Resources", href: "#", icon: Resources, current: false },
  { name: "Tips & Tricks", href: "#", icon: Tips, current: false },
];

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarOpen = ref(false);
</script>

<script>
import { mapMutations } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      theme: true,
    };
  },
  methods: {
    changeTheme() {
      this.theme = !this.theme;
    },
  },
};
</script>

<style>

.theme-dark {
  background-color: #1C1D20;
  color: #FFFFFF
}

.theme-white {
  background-color: #1C1D20;
  color: #FFFFFF;

}
