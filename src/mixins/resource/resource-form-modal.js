/* eslint-disable new-cap */
export default {
  props: {
    resourceId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      loading: false,
      form: {},
      errors: {},
      model: null, // this is required, please assign your model in your component
    }
  },
  computed: {
    isCreating() {
      return !this.resourceId
    },
  },
  methods: {
    newModel(attributes) {
      return new this.model(attributes)
    },
    resetForm() {
      this.$emit('update:resource-id', null)
      this.form = {}
      this.loading = false
      this.errors = {}
    },
    async getResource() {
      if (!this.resourceId) return

      this.loading = true
      const res = await this.model.find(this.resourceId)
      this.form = { ...res.data }
      this.loading = false
    },
    async save() {
      try {
        this.loading = true
        const model = this.newModel({
          id: this.resourceId,
          ...this.form,
        })
        const res = await model.save()
        this.$emit('update:resource-id', res.id)
        this.$notifySuccess('Successfully Saved!')
        this.errors = {}
        this.$emit('save', res)
      } catch (err) {
        if (!err.response) return
        if (err.response.status === 422) {
          this.errors = { ...err.response.data.errors }
        }
      } finally {
        this.loading = false
      }
    },
  },
}
