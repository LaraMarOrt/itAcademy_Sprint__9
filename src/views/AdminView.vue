<template>
    <div class="container">
        <div>
            <h3 class="text-light mb-4">Usuarios:</h3>
            <div class="row">
                <div class="col-sm-10">
                    <div v-for="(user, index) in $store.state.users" :key="index" class="list list-row block">
                        <User :user= user ></User>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import User from '@/components/User.vue';

export default {
    name: "admin",
    components: {
        User
    },
}
</script>

<style  scoped>
.container {
    margin: 3rem;
}

@media (max-width:576px) {
    .container {
        margin: 1rem;
    }
}



@media (max-width:576px) {
    .col-sm-10 {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }

    .row>* {
        padding-right: 0.1rem;
    }
}


.block,
.card {
    background: rgb(79, 126, 108);
    border-width: 0;
    border-radius: .25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .05);
    margin-bottom: 1.5rem
}

@media (min-width:992px) {
    .container {
        max-width: 1140px;
        margin: 2 rem
    }

    .page-sidenav {
        display: block !important
    }
}


.list {
    padding-left: 0;
    padding-right: 0
}

.list-item {
    position: inherit;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
  
}


.list-row .list-item {
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    align-items: center;
    padding: .75rem .625rem
}

.list-row .list-item>* {
    padding-left: .625rem;
    padding-right: .625rem
}



.no-wrap {
    white-space: nowrap
}

.text-sm {
    font-size: .825rem
}

</style>