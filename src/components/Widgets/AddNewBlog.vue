<template>
	<v-form class="add-blog-form d-custom-flex justify-space-between">
		<dropzone id="myVueDropzone" class="mb-2" :options="dropzoneOptions">
			<input type="hidden" name="token" value="xxx">
		</dropzone>
		<div class="add-blog-widget">
			<v-text-field
				name="subject"
				label="Subject">
			</v-text-field>
			<v-textarea
				name="content"
				label="Content"
				>
			</v-textarea>
			<div class="mb-2">
        		<v-btn color="success">{{$t("message.publish")}}</v-btn>
      	</div>	
		</div>
	</v-form>
</template>

<script>
import Dropzone from "vue2-dropzone";

export default {
  components: {
    Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  }
};
</script>
