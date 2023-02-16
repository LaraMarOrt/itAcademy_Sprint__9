<template>
    <div class="list-item" data-id="19">
        <div><a href="#" data-abc="true"><span class="w-48 avatar gd-success">{{
            user.username.charAt(0).toUpperCase()
        }}</span></a></div>
        <div class="flex">
            <a href="#" class="item-author text-color" data-abc="true">{{ user.username }}</a>
            <div class="item-except text-muted text-sm h-1x">Usuario registrado con la cuenta: {{ user.userMail }}</div>
        </div>
    </div>
</template>

<script>
export default {
 name: 'User',
 props: [ 'user'],
}
</script>

<style scoped>
.text-muted {
    color: #d8eadc !important
}

.block,
.card {
    background: rgb(79, 126, 108);
    border-width: 0;
    border-radius: .25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .05);
    margin-bottom: 1.5rem
}

.avatar {
    position: inherit;
    line-height: 1;
    white-space: nowrap;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 500px;
    box-shadow: 0 5px 10px 0 rgba(50, 50, 50, .15)
}

.avatar img {
    border-radius: inherit;
    width: 100%
}

.gd-success {
    color: #fff;
    border: none;
    background: #31c971 linear-gradient(45deg, #31c971, #1a1b1a)
}

.w-48 {
    width: 48px !important;
    height: 48px !important
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

.text-color {
    color: #ffffff;
    font-weight: 600;
}

.text-gd {
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}

.text-sm {
    font-size: .825rem
}

a:link {
    text-decoration: none;
}
</style>