<template>
  <div class="product-form">
    <TitleBar
      title="Meus Produtos"
      :icon="require('@/assets/img/box-solid.svg')"
    />
    <div class="content">
      <div class="header">
        {{ header }}
      </div>
      <div class="input-group">
        <Label
          label="Nome do produto"
          :src="require('@/assets/img/box-solid.svg')"
        />
        <InputField placeholder="Digite o nome do produto..." v-model="name" />
      </div>
      <div class="input-group">
        <Label
          label="Preço Padrão"
          :src="require('@/assets/img/dollar-sign-solid.svg')"
        />
        <InputField
          placeholder="Digite o preço do produto..."
          inputMode="numeric"
          v-model="defaultPrice"
        />
      </div>
      <div class="input-group">
        <Label
          label="Outras Informações"
          :src="require('@/assets/img/info-circle-solid.svg')"
        />
        <InputField
          placeholder="Digite outras informações do produto..."
          v-model="details"
        />
      </div>
      <div class="buttons">
        <Button
          v-if="!isEditing"
          isAlternativeColor
          label="Salvar Produto"
          @click="saveAction"
        />
        <Button v-if="!isEditing" label="Cancelar" @click="cancelAction" />
        <Button
          v-if="isEditing"
          isAlternativeColor
          label="Salvar Produto"
          @click="editAction"
        />
        <Button
          v-if="isEditing"
          label="Excluir Produto"
          @click="deleteAction"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from "vue";
import { useRoute } from "vue-router";
import TitleBar from "@/components/TitleBar.vue";
import InputField from "@/components/InputField.vue";
import Label from "@/components/Label.vue";
import Button from "@/components/Button.vue";
import ProductCreate from "@/model/dto/product-create";
import GenericService from "@/services/shared/generic-service";
import DatabaseConnection from "@/model/interface/database-connection.interface";
import Product from "@/model/product.model";
import router from "@/router";

export default defineComponent({
  name: "ProductForm",
  components: {
    TitleBar,
    InputField,
    Label,
    Button,
  },
  props: {
    isEditing: { type: Boolean, default: false },
  },
  setup(props) {
    const name = ref("");
    const defaultPrice = ref("");
    const details = ref("");
    const route = useRoute();

    // initializing database
    const db: DatabaseConnection = inject("dbConnection") as DatabaseConnection;
    const productService = new GenericService<Product, ProductCreate>(
      db,
      "products"
    );

    /**
     * Returns a computed property depending on the edit mode
     */
    const header = computed(() => {
      return props.isEditing ? "Editar produto" : "Cadastrar novo produto";
    });

    /**
     * Validates the input data before persisting
     */
    const validateData = (): boolean => {
      if (!name.value) {
        window.alert("Digite um nome válido para o produto.");
        return false;
      }
      return true;
    };

    /**
     * Gets the current product id from the router parameters
     * @returns the id of the current product
     */
    const getProductId = (): number => {
      return parseInt(route.params.id as string, 10);
    };

    /**
     * Parses the price and return it as a number, or null if it is unparsable
     * @return the price as a string, or null if it is unparsable
     */
    const parseDefaultPrice = (defaultPrice: string): number | null => {
      const pattern = /\d*[.|,]?\d+/;
      const result = pattern.exec(defaultPrice);
      if (result) {
        return parseFloat(result[0].replace(",", "."));
      } else {
        return null;
      }
    };

    /**
     * Parses the product data and returns a product creation DTO
     * @returns a new product DTO the parsed data
     */
    const parseCreateData = (): ProductCreate => {
      const productName = name.value;
      const productDefaultPrice = parseDefaultPrice(defaultPrice.value);
      const productDetails = details.value;

      return new ProductCreate(
        productName,
        productDefaultPrice,
        productDetails
      );
    };

    /**
     * Parses the product data and returns a product object
     * @returns a new product object with the parsed data
     */
    const parseUpdateData = (): Product => {
      const productName = name.value;
      const productDefaultPrice = parseDefaultPrice(defaultPrice.value);
      const productDetails = details.value;

      return new Product(
        getProductId(),
        productName,
        productDefaultPrice,
        productDetails
      );
    };

    /**
     * Handles the cancel button click and returns to the products list
     */
    const cancelAction = (): void => {
      router.go(-1);
    };

    /**
     * Handles the save button click and returns to the products list
     */
    const saveAction = (): void => {
      // validate data
      if (!name.value) {
        window.alert("Digite um nome válido para o produto.");
        return;
      }

      // parse data
      const newProduct = parseCreateData();

      // create data
      productService.create(newProduct).then(() => {
        // return to products list
        router.go(-1);
      });
    };

    /**
     * Handles the edit button click and returns to the products list
     */
    const editAction = (): void => {
      // validate data
      if (!validateData()) {
        return;
      }

      // parse data
      const editedProduct = parseUpdateData();

      // update data
      productService.update(editedProduct).then(() => {
        // return to products list
        router.go(-1);
      });
    };

    /**
     * Handles the delete button click and returns to the products list
     */
    const deleteAction = (): void => {
      // parse data
      const productId = getProductId();

      // delete data
      productService.delete(productId).then(() => {
        // return to products list
        router.go(-1);
      });
    };

    // loading information on edit
    if (props.isEditing) {
      // getting the product being edited
      const productId = getProductId();
      productService.get(productId).then((product: Product) => {
        // updating fields
        name.value = product.name;
        defaultPrice.value = product.defaultPrice
          ? `R$ ${product.defaultPrice.toFixed(2).replace(".", ",")}`
          : "";
        details.value = product.details;
      });
    }

    // expose template variables
    return {
      name,
      defaultPrice,
      details,
      header,
      cancelAction,
      saveAction,
      editAction,
      deleteAction,
    };
  },
});
</script>

<style lang="scss" scoped>
div.product-form {
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
