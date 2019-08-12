<template>
  <b-form-group :id="id + 'Group'">
    <b-form-input
      :id="id"
      v-model="model.$model"
      :placeholder="placeholder"
      :type="type"
      :name="id"
      :state="model.$dirty ? !model.$error : null"
      :aria-describedby="id + '-live-feedback'"
    />

    <b-form-invalid-feedback :id="id + '-live-feedback'">
      {{ message }}
    </b-form-invalid-feedback>
  </b-form-group>
</template>

<script>
export default {
    props: {
       id: {
        type: String,
        default: () => ''
      },
      model: {
        type: Object,
        default: () => ''
      },
      placeholder: {
        type: String,
        default: () => ''
      },
      type: {
        type: String,
        default: () => ''
      },
      message: {
        type: String,
        default: () => ''
      }
    }
}
</script>

<style scoped>
  input {
  width: 100%;
  height: 3em;
  margin-top: 0.5em;
  border-top: none;
  border-right: none;
  border-left: none;
  font-size: 0.8em;
  border-radius: 0px;
}
input:focus {
  outline:none;
  border-color: #1abc9c;
}
</style>