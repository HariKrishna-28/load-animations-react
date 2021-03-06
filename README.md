# load-animations-react

<br>

> ### _Pure CSS animations as ready to use components for reactjs_

<br>

## Instalation

<br>

```bash
npm i load-animations-react
```

<br>

## Demo

### _Click [here](https://loader-demo.netlify.app/) for the demo page that illustrates all the available loading animations_

<br>

## Attributes

<br>

| <div align ="center">Name </div> | <div align = "center">Description</div>                                              |
| -------------------------------- | ------------------------------------------------------------------------------------ |
| `color`                          | Color of the spinner. Insert the color or the color code in quotes. Black by default |

<br>

## Importing the Loaders

 <br>

> ### _Replace `LoaderName` with the actual name of the loader. Visit the [demo](https://loader-demo.netlify.app/) page to see all the available loaders._

 <br>

```javascript
import { LoaderName } from "load-animations-react";
```

<br>

## Example

<br>

> ### _Given below is a simple implementation of the package._

<br>

```javascript
import { CircleLoader } from "load-animations-react";

function App() {
  return (
    <>
      <CircleLoader color="green" />
    </>
  );
}

export default App;
```
