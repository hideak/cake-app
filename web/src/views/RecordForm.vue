<template>
  <div class="record-form">
    <TitleBar
      title="Minhas Vendas"
      :icon="require('@/assets/img/dollar-sign-solid.svg')"
    />
    <div class="content">
      <div class="header">
        {{ header }}
      </div>
      <div class="input-group">
        <Label
          label="Lista de Produtos"
          :src="require('@/assets/img/box-solid.svg')"
        />
        <InputField
          placeholder="Adicionar Produto"
          disabled
          hasIcon
          :icon="require('@/assets/img/plus-circle-solid.svg')"
          @click="handleProductEntryOpen"
        />
        <ListItem
          v-for="productEntry in productEntries"
          :key="productEntry.id"
          :content="productEntry.name"
          :sideContent="`R$ ${productEntry.price.toFixed(2).replace('.', ',')}`"
          :deleteAction="() => handleProductEntryDelete(productEntry.id)"
          hasDeleteIcon
        />
        <ListItem content="Total (R$)" :sideContent="total" />
      </div>
      <div class="input-group">
        <Label
          label="Data"
          :src="require('@/assets/img/calendar-day-solid.svg')"
        />
        <InputField
          placeholder="Selecione uma data..."
          type="date"
          v-model="date"
        />
      </div>
      <div class="input-group">
        <Label label="Horário" :src="require('@/assets/img/clock-solid.svg')" />
        <InputField
          placeholder="Digite um horário..."
          v-model="time"
          inputMode="numeric"
          maxLength="5"
          @update:modelValue="maskTimeField()"
        />
      </div>
      <div class="input-group">
        <Label
          label="Detalhes da venda"
          :src="require('@/assets/img/info-circle-solid.svg')"
        />
        <InputField
          placeholder="Digite outras informações da venda..."
          v-model="details"
        />
      </div>
      <div class="buttons">
        <Button
          v-if="!isEditing"
          isAlternativeColor
          label="Salvar Registro"
          @click="saveAction"
        />
        <Button v-if="!isEditing" label="Cancelar" @click="cancelAction" />
        <Button
          v-if="isEditing"
          isAlternativeColor
          label="Salvar Registro"
          @click="editAction"
        />
        <Button
          v-if="isEditing"
          label="Excluir Registro"
          @click="deleteAction"
        />
      </div>
    </div>
    <ProductSelector
      ref="productSelector"
      :items="products"
      @selected="handleProductSelection"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, Ref, ref } from "vue";
import { useRoute } from "vue-router";
import { stringToDate, dateToString, timeToString } from "@/util/date-utils";
import TitleBar from "@/components/TitleBar.vue";
import InputField from "@/components/InputField.vue";
import Label from "@/components/Label.vue";
import Button from "@/components/Button.vue";
import ProductSelector from "@/components/ProductSelector.vue";
import ListItem from "@/components/ListItem.vue";
import Record from "@/model/record.model";
import RecordCreate from "@/model/dto/record-create";
import Product from "@/model/product.model";
import ProductCreate from "@/model/dto/product-create";
import DatabaseConnection from "@/model/interface/database-connection.interface";
import GenericService from "@/services/shared/generic-service";
import ProductEntry from "@/model/product-entry.model";
import router from "@/router";

export default defineComponent({
  name: "RecordForm",
  components: {
    TitleBar,
    InputField,
    Label,
    Button,
    ProductSelector,
    ListItem,
  },
  props: {
    isEditing: { type: Boolean, default: false },
  },
  setup(props) {
    const productSelector = ref();
    const products = ref();
    const productEntries: Ref<ProductEntry[]> = ref([]);
    const date = ref("");
    const time = ref("");
    const details = ref("");
    const route = useRoute();

    // initializing database
    const db: DatabaseConnection = inject("dbConnection") as DatabaseConnection;
    const recordService = new GenericService<Record, RecordCreate>(
      db,
      "records"
    );
    const productService = new GenericService<Product, ProductCreate>(
      db,
      "products"
    );

    /**
     * Returns a computed property depending on the edit mode
     */
    const header = computed(() => {
      return props.isEditing
        ? "Editar registro de venda"
        : "Novo registro de venda";
    });

    /**
     * Returns the computed total price of all the service entries
     */
    const total = computed(() => {
      const result = productEntries.value
        .map((productEntry: ProductEntry) => productEntry.price)
        .reduce((previous, current) => previous + current, 0);
      return `R$ ${result.toFixed(2).replace(".", ",")}`;
    });

    /**
     * Validates the input data before persisting
     */
    const validateData = (): boolean => {
      if (productEntries.value.length === 0) {
        window.alert("Adicione pelo menos um produto válido para o cliente.");
        return false;
      }
      return true;
    };

    /**
     * Gets the current record id from the router parameters
     * @returns the id of the current record
     */
    const getRecordId = (): number => {
      return parseInt(route.params.id as string, 10);
    };

    /**
     * Parses the record data and returns a record creation DTO
     * @returns a new record DTO the parsed data
     */
    const parseCreateData = (): RecordCreate => {
      const recordServices = JSON.parse(
        JSON.stringify(productEntries.value)
      ) as ProductEntry[];
      const recordDate = stringToDate(date.value);
      const recordTime = time.value;
      const recordDetails = details.value;

      return new RecordCreate(
        recordServices,
        recordDate,
        recordTime,
        recordDetails
      );
    };

    /**
     * Parses the record data and returns a record object
     * @returns a new record with the parsed data
     */
    const parseUpdateData = (): Record => {
      const recordServices = JSON.parse(
        JSON.stringify(productEntries.value)
      ) as ProductEntry[];
      const recordDate = stringToDate(date.value);
      const recordTime = time.value;
      const recordDetails = details.value;

      return new Record(
        getRecordId(),
        recordServices,
        recordDate,
        recordTime,
        recordDetails
      );
    };

    /**
     * Gets the value of the id of a possible new service entry to be added
     * @returns the desired id to be attached to a new service entry
     */
    const getNewServiceId = (): number => {
      const maxValue = Math.max(
        ...productEntries.value.map(
          (serviceEntry: ProductEntry) => serviceEntry.id
        )
      );
      return maxValue === Math.max() ? 1 : maxValue + 1;
    };

    /**
     * Handles the open operation of the product selector
     */
    const handleProductEntryOpen = (): void => {
      productSelector.value.open(getNewServiceId());
    };

    /**
     * Handles the selected product
     * @param id the id of the selected product
     */
    const handleProductSelection = (productEntry: ProductEntry): void => {
      productEntries.value.push(productEntry);
    };

    /**
     * Handles the deletion of a product entry
     * @param id the id of the product entry to delete
     */
    const handleProductEntryDelete = (id: number) => {
      const index = productEntries.value.findIndex(
        (productEntry: ProductEntry) => {
          return productEntry.id === id;
        }
      );
      productEntries.value.splice(index, 1);
    };

    /**
     * Handles the cancel button click and returns to the records list
     */
    const cancelAction = (): void => {
      router.go(-1);
    };

    /**
     * Handles the save button click and returns to the records list
     */
    const saveAction = (): void => {
      // validate data
      if (!validateData()) {
        return;
      }

      // parse data
      const newRecord = parseCreateData();

      // create data
      recordService.create(newRecord).then(() => {
        // return to records list
        router.go(-1);
      });
    };

    /**
     * Handles the edit button click and returns to the records list
     */
    const editAction = (): void => {
      // validate data
      if (!validateData()) {
        return;
      }

      // parse data
      const editedRecord = parseUpdateData();

      // update data
      recordService.update(editedRecord).then(() => {
        // return to records list
        router.go(-1);
      });
    };

    /**
     * Handles the delete button click and returns to the records list
     */
    const deleteAction = (): void => {
      // parse data
      const recordId = getRecordId();

      // delete data
      recordService.delete(recordId).then(() => {
        // return to records list
        router.go(-1);
      });
    };

    /**
     * Masks the time field as the user edits its value
     */
    const maskTimeField = (): void => {
      if (time.value.length < 2) {
        return;
      } else if (!time.value.includes(":")) {
        time.value = time.value + ":";
      }
    };

    // load products
    productService.getAll().then((entities: Product[]) => {
      products.value = entities;
    });

    // loading information on creation
    if (!props.isEditing) {
      // set default value for date and time
      const now = new Date();
      date.value = dateToString(now);
      time.value = timeToString(now);
    }

    // loading information on edit
    else {
      // getting the client being edited
      const recordId = getRecordId();
      recordService.get(recordId).then((record: Record) => {
        // updating fields
        productEntries.value = record.products;
        date.value = dateToString(record.date);
        time.value = record.time;
        details.value = record.details;
      });
    }

    // expose template variables
    return {
      header,
      productEntries,
      date,
      time,
      details,
      productSelector,
      products,
      total,
      handleProductEntryOpen,
      handleProductSelection,
      handleProductEntryDelete,
      cancelAction,
      saveAction,
      editAction,
      deleteAction,
      maskTimeField,
    };
  },
});
</script>

<style lang="scss" scoped>
div.record-form {
  display: flex;
  flex-direction: column;
  height: 100%;
}

div.content {
  overflow-y: scroll;

  div.header {
    font-size: 1.125rem;
    padding: 0 1rem 1rem 1rem;
  }

  div.input-group {
    margin-bottom: 1rem;
  }
}

div.buttons {
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
