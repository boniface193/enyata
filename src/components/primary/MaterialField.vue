<template>
    <div class="input-container">
        <input :type="type" class="input" @blur="checkInpBlur" autocomplete="off" spellcheck="false"
            maxlength="25">
        <div class="placeholde" @click="placeHolder">
            {{label}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['label', 'type'],

    methods: {
        placeHolder() {
            document.querySelector(".input").focus()
        },
        checkInpBlur() {
            const input = document.querySelector(".input")
            const placeholder = document.querySelector(".placeholde");
            if (input.value != "") {
                placeholder.style.top = "-12px";
                placeholder.style.fontSize = ".8rem";
            } else {
                placeholder.removeAttribute("style")
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.input-container {
    position: relative;
    .input {
        width: 100%;
        height: 48px;
        padding: 10px;
        border: 1px solid #A4A7B7;
        border-radius: 4px;

        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;           
        color: #0B2253;
    }

    .placeholde {
        background-color: white;
        display: inline;
        padding: 0px 8px 6px 8px;
        box-sizing: content-box;
        position: absolute;
        top: 9px;
        left: 5px;
        transition: top .2s, font-size .2s;
        color: #B0B9C8;
    }

    .input:focus {
        background-color: #fff;
        border-color: #0a73dc63;
        outline: 0;
        box-shadow: 0 0 0 .25rem #0a73dc2d
    }
}

.input:focus+.placeholde {
    top: -11px;
    font-size: .8rem;
}
</style>