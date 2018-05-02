<template lang="html">
  <div
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modal-add-photo"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-add-photo">Add a photo</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- UPLOAD FORM -->
          <form id="form-add">
            <div class="form-group row">
              <label for="form-add-input-file" class="col-sm-2 col-form-label">Select photo</label>
              <div class="col-sm-10">
                <input
                  type="file"
                  name="photo"
                  id="form-add-input-file"
                  class="form-control-file">
              </div>
            </div>
            <div class="form-group row">
              <label for="form-add-input-title" class="col-sm-2 col-form-label">Title</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  name="title"
                  id="form-add-input-title"
                  class="form-control"
                  placeholder="Enter a title for your photo...">
              </div>
            </div>
            <div class="form-group row">
              <label for="form-add-input-text" class="col-sm-2 col-form-label">Text</label>
              <div class="col-sm-10">
                <textarea
                  name="text"
                  id="form-add-input-text"
                  class="form-control"
                  rows="4">
                </textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="uploadPhoto"
            data-dismiss="modal"
            class="btn btn-info">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ModalAddPhoto',
  methods: {
    uploadPhoto() {
      const url = `${process.env.API_URL}/pictures`;
      const formData = new FormData(document.getElementById('form-add'));
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };

      axios.post(url, formData, config)
        .then((response) => { this.$emit('uploaded', response.data.uploaded); });

      document.getElementById('form-add').reset();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
