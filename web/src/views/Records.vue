<template>
  <div class="records">
    <TitleBar
      title="Minhas Vendas"
      :icon="require('@/assets/img/dollar-sign-solid.svg')"
    />
    <div v-if="records && records.length > 0" class="counter">
      <div>Há {{ records.length }} venda(s) realizadas.</div>
    </div>
    <div v-if="!records || records.length === 0" class="no-record">
      <p>Nenhuma venda foi registrada 😢</p>
      <p>Clique no botão de "+" para adicionar uma nova venda.</p>
    </div>
    <div class="content">
      <div class="items">
        <RecordItem
          v-for="record in records"
          :key="record.id"
          :record="record"
          @click="recordItemAction(record.id)"
        />
      </div>
    </div>
    <AddCircleButton @click="recordAddAction()" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import TitleBar from "@/components/TitleBar.vue";
import RecordItem from "@/components/RecordItem.vue";
import AddCircleButton from "@/components/AddCircleButton.vue";
import Record from "@/model/record.model";
import DatabaseConnection from "@/model/interface/database-connection.interface";
import GenericService from "@/services/shared/generic-service";
import router from "@/router";
import RecordCreate from "@/model/dto/record-create";

export default defineComponent({
  name: "Records",
  components: {
    TitleBar,
    RecordItem,
    AddCircleButton,
  },
  setup() {
    const records = ref();

    // initializing database
    const db: DatabaseConnection = inject("dbConnection") as DatabaseConnection;
    const recordService = new GenericService<Record, RecordCreate>(
      db,
      "records"
    );

    // getting the client object and associated records
    recordService.getAll().then((entities: Record[]) => {
      records.value = entities;
    });

    /**
     * Navigates to the new record screen
     */
    const recordAddAction = (): void => {
      router.push({ name: "NewRecord" });
    };

    /**
     * Navigates to the edit record screen
     */
    const recordItemAction = (id: number): void => {
      router.push({
        name: "EditRecord",
        params: { id },
      });
    };

    // exposed template variables
    return {
      records,
      recordAddAction,
      recordItemAction,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

div.records {
  height: 100%;
  display: flex;
  flex-direction: column;

  div.counter {
    padding-bottom: 1rem;
    text-align: center;
  }

  div.no-record {
    padding: 0 1rem;
    text-align: center;
  }

  div.content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: hidden;

    div.name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $app-background-color-white;
      padding: 1rem 1.25rem 1rem 1rem;
      font-size: 1.125rem;
    }

    div.services {
      display: flex;
      align-items: center;
      border-bottom: 1px solid $app-border-color;
      padding: 0 1.25rem 1rem 1rem;
      background-color: $app-background-color-white;

      img {
        height: 1.125rem;
        margin-right: 0.5rem;
      }
    }

    div.items {
      flex-grow: 1;
      overflow-y: scroll;
    }
  }

  div.add-circle-button {
    position: fixed;
    right: 1.375rem;
    bottom: 1.375rem;
  }
}
</style>
