<template>
  <div class="home">
    <div class="header">
      <div class="title">Cake App</div>
      <div class="subtitle">App de Controle de Vendas</div>
    </div>
    <div class="logo">
      <img src="@/assets/img/app-logo.png" alt="Logo do aplicativo" />
    </div>
    <div class="instructions">Selecione uma opção</div>
    <div class="cards">
      <Card
        description="Minhas Vendas"
        @click="navigateTo({ name: 'Records' })"
      />
      <Card
        description="Meus Produtos"
        @click="navigateTo({ name: 'Products' })"
      />
      <Card
        description="Relatórios"
        @click="navigateTo({ name: 'PlaceholderView' })"
      />
    </div>
    <div class="footer">
      Cake App v{{ releaseNotes[releaseNotes.length - 1].version }} @ 2021
    </div>
    <div class="release-notes">
      <a href="#" @click="openReleaseNotes">Abrir notas de versão</a>
    </div>
    <ReleaseModal ref="releaseModal" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { releaseNotes } from "@/data/release-notes";
import Card from "@/components/Card.vue";
import ReleaseModal from "@/components/ReleaseModal.vue";

export default defineComponent({
  name: "Home",
  components: {
    Card,
    ReleaseModal,
  },
  setup() {
    const releaseModal = ref();

    // if the release notes counter is not set, set it to zero
    if (localStorage.getItem("releaseNotesCounter") === null) {
      localStorage.setItem("releaseNotesCounter", "0");
    }

    // check the current release notes counter
    onMounted(() => {
      const releaseNotesCounter = localStorage.getItem("releaseNotesCounter");
      if (releaseNotesCounter) {
        const count = parseInt(releaseNotesCounter, 10);

        // if the counter is less than the length of the release notes, show the update
        if (count < releaseNotes.length) {
          releaseModal.value.open(
            releaseNotes.slice(count, releaseNotes.length)
          );
          localStorage.setItem(
            "releaseNotesCounter",
            releaseNotes.length.toString()
          );
        }
      }
    });

    /**
     * Opens all the release notes in order
     */
    const openReleaseNotes = (): void => {
      releaseModal.value.open(releaseNotes);
    };

    return { releaseModal, releaseNotes, openReleaseNotes };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
div.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

div.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 2rem 0;
}

div.logo img {
  height: 6rem;
  margin-bottom: 2rem;
}

div.title {
  font-family: $app-font-family-title;
  font-size: 2.25rem;
}

div.subtitle {
  font-family: $app-font-family-subtitle;
  font-size: 1.5rem;
}

div.instructions {
  margin-bottom: 2rem;
}

div.footer {
  margin-bottom: 1rem;
}

div.cards {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.25rem;
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
}
</style>
