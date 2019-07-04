<template>
  <div class="container">
    <div>
      <logo />
      <h3> 4 mejores selecciones</h3>
      <div>
    <b-table striped hover :items="items"></b-table>
  </div>
  <b-container fluid>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`">Selección:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
      <div class="links">
        <a
          href="/add/team"
          target="_blank"
          class="button--green"
        >
          Añadir selección
        </a>

      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
      return {
        items: [
          { age: 1, first_name: 'Chile', last_name: '12' },
          { age: 2, first_name: 'Brasil', last_name: '9' },
          { age: 3, first_name: 'Argentina', last_name: '6' },
          { age: 4, first_name: 'Perú', last_name: '3' }
        ],
        types: [
          'text'
        ]
      }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
