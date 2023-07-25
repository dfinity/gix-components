<script lang="ts">
    import Copy from "$lib/components/Copy.svelte";

    let copyString = "1234";
</script>

# Copy

The copy component will copy a given text value using the native asynchronous [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText).

```javascript
<Copy value="{copyString}" />
```

## Properties

| Property | Description                                    | Type     | Default |
| -------- | ---------------------------------------------- | -------- | ------- |
| `value`  | The value given to be copied to the clipboard. | `string` |         |

## Showcase

<div class="showcase">
<div id="first">
    Your id number is 
    <div class="entry">
        1234
        <Copy value={copyString}/>
    </div>
    
</div>
<div id="second">
    Today's discount code: 
    <div class="discount">
        HappyHalloween25
        <Copy value="HappyHalloween25"/>
    </div>
    </div>
</div>
<style>
/* .showcase {
    display: flex;
} */
#first {
    margin-bottom: 2em;
    display: flex;
    align-items: center;
}
#second {
    background-color: grey;
    padding: 1rem;
    width: fit-content;
    border-radius: 0.5em;
    color: black;
    font-size: 15px;
    text-align: center;
}
.entry {
    display: flex;
    font-size: 20px;
    width: fit-content;
    padding: 0.4em;
}
.discount {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: dotted 2px silver;
    width: fit-content;
    font-size: 16px;
    margin: 0.5em 0;
    padding: 0.5em;
    color: black;
}
</style>
