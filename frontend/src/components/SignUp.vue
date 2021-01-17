<template>
    <div id="app">
        <v-container>
            <v-layout row class="text-xs-center">
                <v-flex xs4 class=" text-xs-center">
                    <v-container style="position: relative;top: 13%;left:80%;" class="text-xs-center">
                        <v-card flat>
                            <v-card-title primary-title>
                            <h4>SignUp</h4>
                            </v-card-title>
                            <v-form>
                            <v-text-field  name="Username" label="Username"></v-text-field>
                            <v-text-field  name="email" label="Email Id"></v-text-field>
                            <v-text-field  name="Password" label="Password" type="password"></v-text-field>
                            <v-card-actions>
                            <v-btn primary large block>SignUp</v-btn>
                            </v-card-actions>
                            </v-form>
                        </v-card>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
  name: 'SignUp',
};
</script>
