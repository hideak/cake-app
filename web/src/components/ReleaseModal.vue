<template>
  <teleport to="#modal">
    <div class="release-modal" :class="{ visible: isOpened }">
      <div class="container">
        <img
          src="@/assets/img/exclamation-circle-solid.svg"
          alt="Exclamation mark"
        />
        <div class="title">Seu App foi Atualizado!</div>
        <div class="content">
          <div
            v-for="releaseItem in releaseItems"
            :key="releaseItem.version"
            class="release-item"
          >
            <p class="version">Versão {{ releaseItem.version }}</p>
            <p
              v-for="(description, index) in releaseItem.descriptions"
              :key="index"
            >
              {{ description }}
            </p>
          </div>
        </div>
        <div>
          <Button isAlternativeColor label="Confirmar" @click="close" />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import Button from "@/components/Button.vue";
import ReleaseItem from "@/model/release-item.model";

export default defineComponent({
  name: "ReleaseModal",
  components: {
    Button,
  },
  setup() {
    const isOpened = ref(false);
    const releaseItems: Ref<ReleaseItem[]> = ref([]);

    /**
     * Opens the release modal
     */
    const open = (items: ReleaseItem[]): void => {
      releaseItems.value = items;
      isOpened.value = true;
    };

    /**
     * Closes the release modal
     */
    const close = (): void => {
      isOpened.value = false;
    };

    // exposed template variables
    return { isOpened, open, close, releaseItems };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

div.release-modal {
  visibility: hidden;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: $app-background-color-modal;
  transition: opacity 0.1s ease-in, visibility 0.1s;

  div.container {
    display: flex;
    flex-direction: column;
    background-color: $app-background-color-white;
    width: 80%;
    height: 90%;
    padding: 1rem;
    border-radius: 0.25rem;

    img {
      height: 2rem;
      margin-bottom: 1rem;
    }

    div.title {
      text-align: center;
      font-weight: bold;
    }

    div.content {
      flex-grow: 1;
      overflow-y: scroll;

      p.version {
        font-weight: bold;
      }
    }
  }

  &.visible {
    visibility: visible;
    opacity: 1;
  }
}
</style>
